import { View } from 'react-native';

export const HeaderGroup = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {children}
    </View>
  );
};
