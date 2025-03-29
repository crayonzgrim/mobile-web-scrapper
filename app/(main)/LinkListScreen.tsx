
import { Button } from '@/components/shared/Button';
import { Header } from '@/components/shared/Header/Header';
import { Icon } from '@/components/shared/Icon';
import { Spacer } from '@/components/shared/Spacer';
import { Typography } from '@/components/shared/Typography';
import { atomLinkList } from '@/store/atomLinkList';
import { RootStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMemo } from 'react';
import { FlatList, SectionList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRecoilValue } from 'recoil';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function LinkListScreen() {
  const { navigate } = useNavigation<NavigationProp>();
  const safeAreaInset = useSafeAreaInsets();
  const data = useRecoilValue(atomLinkList);

  const onPressListItem = (item: any) => {
    navigate('LinkDetail', item);
  }

  const onPressAddButton = () => {
    navigate("AddLink")
  }

  const sectionData = useMemo(() => {
    const dateList: any = {};

    const makeDateString = (createdAt: string) => {
      const dateItem = new Date(createdAt)
      return `${dateItem.getFullYear()}.${dateItem.getMonth() + 1}.${dateItem.getDate()} ${dateItem.getHours()}:${dateItem.getMinutes()}`
    }

    if (!data.list) return []

    data.list.forEach(item => {
      const keyName = makeDateString(item.createdAt)
      if (!dateList[keyName]) {
        dateList[keyName] = [item];
      } else {
        dateList[keyName].push(item);
      }
    })

    return Object.keys(dateList).map(item => {
      return {
        title: item,
        data: dateList[item]
      }
    })
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="Link List" />
        </Header.Group>
      </Header>

      <SectionList
        style={{ flex: 1 }}
        sections={sectionData}
        renderItem={({ item }) => {
          return (
            <Button onPress={() => onPressListItem(item)} paddingHorizontal={24} paddingVertical={24}>
              <View>
                <Typography fontSize={20}>
                  {item?.link}
                </Typography>

                <Spacer space={4} />

                <Typography fontSize={16} color="gray">
                  {item?.title !== '' ? `${item?.title.slice(0, 20)} | ` : ''}{new Date(item?.createdAt).toLocaleString()}
                </Typography>
              </View>
            </Button>
          )
        }}
        renderSectionHeader={({ section }) => {
          return (
            <View style={{ paddingHorizontal: 12, paddingVertical: 4, backgroundColor: "#FFF" }}>
              <Typography fontSize={16} color="gray">
                {section.title}
              </Typography>
            </View>
          )
        }}
      />

      <FlatList
        style={{ flex: 1 }}
        data={data.list}
        renderItem={({ item }) => {
          return (
            <Button onPress={() => onPressListItem(item)} paddingHorizontal={24} paddingVertical={24}>
              <View>
                <Typography fontSize={20}>
                  {item?.link}
                </Typography>

                <Spacer space={4} />

                <Typography fontSize={16} color="gray">
                  {item?.title !== '' ? `${item?.title.slice(0, 20)} | ` : ''}{new Date(item?.createdAt).toLocaleString()}
                </Typography>
              </View>
            </Button>
          )
        }}
      />

      <View style={{ position: 'absolute', right: 24, bottom: 24 + safeAreaInset.bottom }}>

        <Button onPress={onPressAddButton}>
          <View style={{ width: 52, height: 52, borderRadius: 26, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
            <Text>
              <Icon name="add" color="white" size={32} />
            </Text>
          </View>
        </Button>
      </View>
    </View>
  )
};
