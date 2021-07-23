import { Player } from "./player";
import { State } from "./state";

export class Game {
  state: State;
  players: Player[];
  winner: Player | undefined;
  turn: number = 0;

  constructor(state: State, ...players: Player[]) {
    this.state = state;
    this.players = players;
  }

  async start() {
    while (!this.state.over) {
      const currentPlayer = this.nextPlayer();
      const action = await currentPlayer.takeAction(this.state);
      this.state = this.state.update(action, currentPlayer.point);

      if (this.state.done) {
        this.winner = currentPlayer;
        break;
      }
    }
  }

  private nextPlayer() {
    return this.players[this.turn++ % this.players.length];
  }
}
