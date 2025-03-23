import { View } from 'react-native';
import { Typography } from './Typography';

type BadgeProps = {
  children: React.ReactNode;
  fontSize: number;
  color: string;
  badgeText: string;
  badgeBgColor?: string;
};

export const Badge = ({
  children,
  fontSize,
  color,
  badgeText = '',
  badgeBgColor = 'red'
}: BadgeProps) => {
  return (
    <View>
      {children}

      <View
        style={{
          backgroundColor: badgeBgColor,
          width: 16,
          height: 16,
          borderRadius: '100%',
          alignItems: 'center',
          justifyContent: 'center',

          position: 'absolute',
          top: -5,
          right: -7
        }}
      >
        <Typography fontSize={fontSize} color={color}>
          {badgeText}
        </Typography>
      </View>
    </View>
  );
};
