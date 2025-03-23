import { Button } from '@/components/shared/Button';
import { Header } from '@/components/shared/Header/Header';
import { SingleLineInput } from '@/components/shared/SingleLineInput';
import { Spacer } from '@/components/shared/Spacer';
import { Typography } from '@/components/shared/Typography';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const AddLinkScreen = () => {
  const navigation = useNavigation();

  const safeareaInset = useSafeAreaInsets();

  const [url, setUrl] = useState('')

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

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 }}>
        <SingleLineInput
          value={url}
          onChangeText={setUrl}
          placeholder="https://example.com"
        />
      </View>

      <Button>
        <View style={{ backgroundColor: url === "" ? 'gray' : "black" }}>
          <View style={{ height: 52, alignItems: 'center', justifyContent: 'center' }}>
            <Typography color="white" fontSize={18}>저장</Typography>
          </View>

          <Spacer space={safeareaInset.bottom} />
        </View>
      </Button>
    </View>
  )
};
