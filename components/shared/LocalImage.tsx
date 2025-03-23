import React from 'react';
import { Image } from 'react-native';

type LocalImageProps = {
  source: any;
  width: number;
  height: number;
  style: any;
};

export const LocalImage = ({
  source,
  width,
  height,
  style
}: LocalImageProps) => {
  return <Image source={source} style={{ width, height, ...style }} />;
};
