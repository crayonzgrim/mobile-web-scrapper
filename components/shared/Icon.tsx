import { Ionicons } from '@expo/vector-icons';

type IconsProps = {
  name: any;
  size: number;
  color?: string;
};

export const Icon = ({ name, size, color = 'black' }: IconsProps) => {
  return <Ionicons name={name} size={size} color={color} />;
};
