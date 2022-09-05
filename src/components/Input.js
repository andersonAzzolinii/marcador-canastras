import { Input as ReactInput } from 'react-native';

export function Input({ ...rest }) {
  return (
    <ReactInput  
    bg="gray.100"
    h={14}
    size="md"
    borderWidth={0}
    fontSize="md"
    fontFamily="body"
    color="dark"
    placeholderTextColor="gray.300"
    {...rest}
    />
  );
}