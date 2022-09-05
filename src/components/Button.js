import { Button as ButtonReact, Text, Dimensions } from 'react-native';

export function Button({ title, ...rest }) {
  return (
    <ButtonReact
      h={14}
      minW={Dimensions.get('screen').width * 0.7}
      rounded="sm"
      {...rest}>
      <Text fontSize="15">{title}</Text>
    </ButtonReact>
  );
}