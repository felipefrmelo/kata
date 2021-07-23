import { Game } from "./game";
import { Player } from "./player";
import { Action, Board, Point, State } from "./state";

class RamdonPlayer implements Player {
  async takeAction(state: State): Promise<Action> {
    const actionsAvailables = state.actionsAvailables();
    return actionsAvailables[
      Math.floor(Math.random() * actionsAvailables.length)
    ];
  }

  constructor(public point: Point, public name: string) {}
}

function main() {
  const board = new Board();
  const game = new Game(
    board,
    new RamdonPlayer("x", "player1"),
    new RamdonPlayer("o", "player2")
  );

  game.start();

  if (game.winner) console.log(`O vencedor foi o ${game.winner.name}`);
  else console.log("O jogo empatou");

  console.log(game.state.toString());
}

main();
