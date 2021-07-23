import { CellState } from "./CellState";

export class Cell {
  constructor(public state: CellState) {}

  getNextState(neighbors: number) {
    if (neighbors === 3) {
      return CellState.ALIVE;
    }

    return this.state === CellState.DEAD || neighbors < 2 || neighbors > 3
      ? CellState.DEAD
      : CellState.ALIVE;
  }
}
