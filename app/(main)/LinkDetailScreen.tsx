import { Header } from '@/components/shared/Header/Header';
import { Spacer } from '@/components/shared/Spacer';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';


export const LinkDetailScreen = () => {
  const navigation = useNavigation();

  const onPressBack = () => {
    navigation.goBack();
  }

  return (
    <View>
      <Header>
        <Header.Group>
          <Header.Icon name='arrow-back' onPress={onPressBack} />
          <Spacer space={12} horizontal />
          <Header.Title title="LINK DETAIL" />
        </Header.Group>
      </Header>
    </View>
  )
};
