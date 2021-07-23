import { Button, Text } from "../../atoms";

export function Config() {
  return (
    <div>
      <Text size="xl">Opções</Text>
      <Button loading>Player VS CPU</Button>
      <Button>Player VS Player</Button>
    </div>
  );
}
