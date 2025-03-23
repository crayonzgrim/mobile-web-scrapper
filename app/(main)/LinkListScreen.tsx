import { Button } from '@/components/shared/Button';
import { Header } from '@/components/shared/Header/Header';
import { Icon } from '@/components/shared/Icon';
import { Spacer } from '@/components/shared/Spacer';
import { Typography } from '@/components/shared/Typography';
import { RootStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const LinkListScreen = () => {
  const { navigate } = useNavigation<NavigationProp>();
  const safeAreaInset = useSafeAreaInsets();

  const onPressButton = () => {
    navigate('LinkDetail');
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

      <View style={{ flex: 1 }}>
        <Button onPress={onPressButton}>
          <Typography>LINK DETAIL로 이동</Typography>
        </Button>

        <Spacer space={12} />

        <Button onPress={onPressAddButton}>
          <Typography>링크 등록하기로 이동</Typography>
        </Button>
      </View>

      <View style={{ position: 'absolute', right: 24, bottom: 24 + safeAreaInset.bottom }}>

        <Button onPress={onPressAddButton}>
          <View style={{ width: 52, height: 52, borderRadius: 26, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
            <Icon name="add" color="white" size={32} />
          </View>
        </Button>
      </View>
    </View>
  )
};
