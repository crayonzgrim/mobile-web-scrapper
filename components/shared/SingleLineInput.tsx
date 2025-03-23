import { useState } from 'react';
import { TextInput, View } from 'react-native';

type SingleLineInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

export const SingleLineInput = ({ value, onChangeText, placeholder }: SingleLineInputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={{
        alignSelf: 'stretch',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: focused ? 'black' : 'gray'
      }}
    >
      <TextInput
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  )
};
