import { Stack, Button } from "@react-native-material/core";

export function Button({ title, ...rest }) {
  return (
    <Stack fill >
      <Button title={title} />
    </Stack>
  );
}