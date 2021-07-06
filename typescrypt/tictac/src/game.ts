import { transpose } from "./utils";

export type Point = number | string;
export type Action = number[];

export class Board {
  state: Point[][];
  static readonly EMPTY: Point = 0;

  constructor(state?: Point[][]) {
    this.state = state ? state : this.makeNewBoardEmpty();
    Object.freeze(this);
  }

  private makeNewBoardEmpty(): Point[][] {
    return Array.from({ length: 3 }, () => Array(3).fill(Board.EMPTY));
  }

  getPoint(row: number, col: number): Point {
    return this.state[row][col];
  }

  update([row, col]: Action, value: Point) {
    const newState = this.state.map((r, j) =>
      r.map((c, i) => (row === j && col === i && c === Board.EMPTY ? value : c))
    );

    return new Board(newState);
  }

  actionsAvailables(): Action[] {
    let result: Action[] = [];

    this.state.forEach((row, y) => {
      row.forEach((col, x) => {
        if (col === Board.EMPTY) result = [...result, [y, x]];
      });
    });

    return result;
  }

  get done() {
    return this.rows
      .concat(this.cols)
      .concat(this.diagonals)
      .some(this._checkIfHasSequenceCompleted);
  }

  get over() {
    return !this.state.some((row) => row.some((col) => col === Board.EMPTY));
  }

  get rows() {
    return this.state;
  }

  get cols() {
    return transpose(this.state);
  }

  get diagonals() {
    return [
      this.rows.map((row, j) => row[j]),
      this.rows.map((row, j) => row[row.length - j - 1]),
    ];
  }

  _checkIfHasSequenceCompleted(seq: Point[]) {
    const firstValue = seq[0];
    return seq.every((p) => p !== Board.EMPTY && p === firstValue);
  }
}


