import { Header } from '@/components/shared/Header/Header';
import { Spacer } from '@/components/shared/Spacer';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import WebView from 'react-native-webview';


export default function LinkDetailScreen() {
  const routes = useRoute();
  const navigation = useNavigation();

  const onPressBack = () => {
    navigation.goBack();
  }

  console.log({ uri: (routes?.params as any)?.link })
  // Https://naver.com
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon name='arrow-back' onPress={onPressBack} />
          <Spacer space={12} horizontal />
          <Header.Title title="LINK DETAIL" />
        </Header.Group>
      </Header>

      {
        routes.params ? (
          <WebView
            style={{ flex: 1 }}
            originWhitelist={['*']}
            source={{ uri: (routes?.params as any)?.link }}
          />
        ) : null
      }
    </View>
  )
};
