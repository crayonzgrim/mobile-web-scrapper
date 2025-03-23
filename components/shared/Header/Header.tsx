import { useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Spacer } from '../Spacer';
import { HeaderGroup } from './HeaderGroup';
import { HeaderIcon } from './HeaderIcon';
import { HeaderTitle } from './HeaderTitle';

type HeaderProps = {
  children: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  return (
    <View style={{ paddingTop: insets.top }}>
      <View
        style={{
          width: width || '100%',
          flexDirection: 'row',
          height: 56,
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          alignItems: 'center'
        }}
      >
        <Spacer horizontal={true} space={12} />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {children}
        </View>

        <Spacer horizontal={true} space={12} />
      </View>
    </View>
  );
};

Header.Title = HeaderTitle;
Header.Icon = HeaderIcon;
Header.Group = HeaderGroup;
