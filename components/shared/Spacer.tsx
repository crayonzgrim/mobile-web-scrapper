import { View } from 'react-native';

type SpacerProps = {
  horizontal?: boolean;
  space: number;
};

export const Spacer = ({ horizontal, space }: SpacerProps) => {
  if (horizontal) {
    return <View style={{ marginLeft: space }} />;
  }

  return <View style={{ marginTop: space }} />;
};
