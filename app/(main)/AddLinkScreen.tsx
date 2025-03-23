import { Header } from '@/components/shared/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

export const AddLinkScreen = () => {
  const navigation = useNavigation();

  const onPressBack = () => {
    navigation.goBack();
  }

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="Add Link" />
        </Header.Group>

        <Header.Icon name='close' onPress={onPressBack} />
      </Header>
    </View>
  )
};
