import { View } from 'react-native';
import { Badge } from './Badge';
import { Icon } from './Icon';

type TabIconProps = {
  icon: string;
  isVisible?: boolean;
  color?: string;
};

export const TabIcon = ({
  icon,
  isVisible = true,
  color = 'black'
}: TabIconProps) => {
  if (isVisible) {
    return (
      <View>
        <Badge
          fontSize={10}
          color={'white'}
          badgeText={'N'}
          badgeBgColor="blue"
        >
          <Icon name={icon} size={20} color={color} />
        </Badge>
      </View>
    );
  } else {
    return (
      <View>
        <Icon name={icon} size={20} color="black" />
      </View>
    );
  }
};
