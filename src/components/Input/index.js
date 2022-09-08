import { TextInput as ReactInput } from 'react-native';
import React from 'react';


export function Input({ ...rest }) {
  return (
    <ReactInput 
    {...rest}
    />
  );
}