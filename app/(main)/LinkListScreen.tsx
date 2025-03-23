import { Button } from '@/components/shared/Button';
import { Header } from '@/components/shared/Header/Header';
import { Spacer } from '@/components/shared/Spacer';
import { Typography } from '@/components/shared/Typography';
import { RootStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const LinkListScreen = () => {
  const { navigate } = useNavigation<NavigationProp>();

  const onPressButton = () => {
    navigate('LinkDetail');
    console.log("LinkDetail")
  }

  const onPressAddButton = () => {
    navigate("AddLink")
    console.log("AddLink")
  }

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="Link List" />
        </Header.Group>
      </Header>

      <View>
        <Button onPress={onPressButton}>
          <Typography>LINK DETAIL로 이동</Typography>
        </Button>

        <Spacer space={12} />

        <Button onPress={onPressAddButton}>
          <Typography>링크 등록하기로 이동</Typography>
        </Button>

      </View>
    </View>
  )
};
