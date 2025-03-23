import { Dimensions, View } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { Button } from './Button';
import { Icon } from './Icon';
import { Spacer } from './Spacer';
import { Typography } from './Typography';

type Icons = {
  iconName: string;
  onPress: () => void;
};

type HeaderWithoutCompoundProps = {
  leftIcon?: Icons;
  rightIcon?: Icons;
  title: string;
};

export const HeaderWithoutCompound = ({
  leftIcon,
  rightIcon,
  title
}: HeaderWithoutCompoundProps) => {
  const { width } = Dimensions.get('window');

  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View style={{ paddingTop: insets?.top }}>
          <View
            style={{
              width,
              height: 56,
              flexDirection: 'row',
              borderBottomColor: 'gray',
              borderBottomWidth: 1
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
              {leftIcon && (
                <Button onPress={leftIcon.onPress}>
                  <Icon name={leftIcon.iconName} size={28} />
                </Button>
              )}

              <Typography fontSize={18}>{title}</Typography>
              {rightIcon && (
                <Button onPress={rightIcon.onPress}>
                  <Icon name={rightIcon.iconName} size={28} />
                </Button>
              )}
            </View>

            <Spacer horizontal={true} space={12} />
          </View>
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};
