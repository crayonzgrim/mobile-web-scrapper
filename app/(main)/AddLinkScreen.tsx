import { Button } from '@/components/shared/Button';
import { Header } from '@/components/shared/Header/Header';
import { Icon } from '@/components/shared/Icon';
import { RemoteImage } from '@/components/shared/RemoteImage';
import { SingleLineInput } from '@/components/shared/SingleLineInput';
import { Spacer } from '@/components/shared/Spacer';
import { Typography } from '@/components/shared/Typography';
import { atomLinkList, LinkListState } from '@/store/atomLinkList';
import { getClipboardString } from '@/utils/clipboardUtils';
import { getOpenGraphData } from '@/utils/openGraphTagUtils';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSetRecoilState } from 'recoil';

export default function AddLinkScreen() {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  const safeareaInset = useSafeAreaInsets();

  const updateList = useSetRecoilState<LinkListState>(atomLinkList);

  const [url, setUrl] = useState('')
  const [metaData, setMetaData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const onPressBack = () => {
    navigation.goBack();
  }

  const onPressSave = () => {
    if (url === "") return;

    updateList((prev) => {
      const list = [{
        title: metaData?.title ?? "",
        image: metaData?.image ?? "",
        link: url,
        createdAt: new Date().toISOString()
      }]

      return {
        list: list.concat(prev.list)
      }
    })

    setUrl("")
  }



  const onSubmitEditing = async () => {
    setLoading(true)

    const result = await getOpenGraphData(url);
    setMetaData(result)

    setLoading(false)
  }

  const onGetClipboardString = useCallback(async () => {
    const result = await getClipboardString();
    if (result.startsWith("http")) {
      setUrl(result)
      const ogResult = await getOpenGraphData(result);
      setMetaData({
        title: ogResult.title,
        image: ogResult.image,
        description: ogResult.description,
      })
    }
  }, [])

  useEffect(() => {
    // https://github.com
    onGetClipboardString()
  }, [])


  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="Add Link" />
        </Header.Group>

        <Header.Icon name='close' onPress={onPressBack} />
      </Header>

      <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 32, paddingHorizontal: 24 }}>
        <View>
          <SingleLineInput
            value={url}
            onChangeText={setUrl}
            placeholder="https://example.com"
            onSubmitEditing={onSubmitEditing}
          />

          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => {
              setUrl("")
              setMetaData(null)
            }}>
              <Icon name="close" size={16} color={'black'} />
            </Button>
          </View>
        </View>
        {
          loading ? (
            <>
              <Spacer space={20} />

              <View style={{ borderWidth: 1, borderRadius: 4, borderColor: 'gray' }}>
                <Spacer space={(width - 48) * 0.5} />
                <Spacer space={50} />

                <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
                  <ActivityIndicator size="large" />
                </View>

              </View>
            </>
          ) : (
            metaData && (
              <>
                <Spacer space={20} />

                <View style={{ borderWidth: 1, borderRadius: 4, borderColor: 'gray' }}>
                  <RemoteImage uri={metaData.image} width={width - 48} height={(width - 48) * 0.5} />
                  <Spacer space={10} />
                  <Typography color="black" fontSize={20}>{metaData.title}</Typography>
                  <Spacer space={4} />
                  <Typography color="gray" fontSize={16}>{metaData.description}</Typography>
                </View>
              </>
            )
          )
        }


      </View>


      <Button onPress={onPressSave}>
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
