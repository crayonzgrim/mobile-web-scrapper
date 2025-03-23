import { Pressable } from 'react-native';

type HitSlop = {
  top: number;
  left: number;
  bottom: number;
  right: number;
};

type ButtonProps = {
  onPressIn?: () => void;
  onPressOut?: () => void;
  onPress?: () => void;
  hitSlop?: HitSlop;
  children: React.ReactNode;
  paddingHorizontal?: number;
  paddingVertical?: number;
};

export const Button = ({
  onPressIn,
  onPressOut,
  onPress,
  hitSlop = { top: 0, left: 0, bottom: 0, right: 0 },
  children,
  paddingHorizontal = 0,
  paddingVertical = 0
}: ButtonProps) => {
  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      hitSlop={hitSlop}
      style={{
        paddingHorizontal,
        paddingVertical
      }}
    >
      {children}
    </Pressable>
  );
};
