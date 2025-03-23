
import { Button } from '@/components/shared/Button';
import { Header } from '@/components/shared/Header/Header';
import { Icon } from '@/components/shared/Icon';
import { Spacer } from '@/components/shared/Spacer';
import { Typography } from '@/components/shared/Typography';
import { atomLinkList } from '@/store/atomLinkList';
import { RootStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, Text, View } from 'react-native';
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

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="Link List" />
        </Header.Group>
      </Header>

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
