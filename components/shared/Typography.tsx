import React from 'react';
import { Text } from 'react-native';

type TypographyProps = {
  color?: string;
  fontSize?: number;
  children: React.ReactNode;
  className?: string;
};

export const Typography = ({
  color = 'black',
  fontSize = 16,
  children,
  className
}: TypographyProps) => {
  return (
    <Text style={{ color, fontSize }} className={className}>
      {children}
    </Text>
  );
};
