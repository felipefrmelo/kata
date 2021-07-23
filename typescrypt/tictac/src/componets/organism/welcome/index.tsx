import { Button, Text } from "../../atoms";

export function Welcome({ onStart }: { onStart: () => void }) {
  return (
    <div>
      <Text size="5xl">Jogo da Velha!</Text>
      <Button
        className="bg-gray-600 hover:bg-gray-200 hover:translate-x-96 rounded-lg"
        type="button"
        onClick={onStart}
      >
        start
      </Button>
    </div>
  );
}
