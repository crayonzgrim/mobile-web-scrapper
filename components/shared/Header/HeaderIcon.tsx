import { Button } from '../Button';
import { Icon } from '../Icon';

type HeaderIconProps = {
  onPress?: () => void;
  name: string;
  size?: number;
};

export const HeaderIcon = ({ onPress, name, size }: HeaderIconProps) => {
  return (
    <Button onPress={onPress}>
      <Icon name={name} size={28} color={'black'} />
    </Button>
  );
};
