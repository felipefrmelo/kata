import { useEffect, useState } from "react";
import { State } from "../componets/molecule";
import { Board } from "../game/state";

export default function Play() {
  const [board, setboard] = useState(new Board());
  const [turn, setTurn] = useState<1 | 0>(1);
  const players = {
    0: "X",
    1: "O",
  };

  useEffect(() => {
    if (!board.done) setTurn(turn === 0 ? 1 : 0);
  }, [board]);

  const handleUpdate = (row: number, col: number) => {
    if (board.done || board.over) return;

    const newboard = board.update([row, col], Object.values(players)[turn]);
    setboard(newboard);
  };

  return (
    <div>
      <State onClick={handleUpdate} points={board.state} />
      {board.done && <p>Player {turn + 1} wins!</p>}
      {board.over && <p>Draw!</p>}
    </div>
  );
}
