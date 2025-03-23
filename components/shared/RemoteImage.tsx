import React from 'react';
import { Image } from 'react-native';

type RemteImageProps = {
  uri: string;
  width: number;
  height: number;
  style?: any;
};

export const RemoteImage = ({ uri, width, height, style }: RemteImageProps) => {
  return <Image source={{ uri }} style={{ width, height, ...style }} />;
};
