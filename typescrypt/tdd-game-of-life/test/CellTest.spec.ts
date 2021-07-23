import { Cell } from "../Cell";
import { CellState } from "../CellState";

describe("Cell", () => {
  let cell: Cell;

  beforeEach(() => {
    cell = makeCell();
  });

  it("should initialized with cell state", () => {
    const cellAlive = makeCell();
    expect(cellAlive.state).toBe(CellState.ALIVE);

    const cellDead = makeCell(CellState.DEAD);
    expect(cellDead.state).toBe(CellState.DEAD);
  });

  it("should dead if it has fewer than 2 neighbors", () => {
    assertState(cell.getNextState(1), CellState.DEAD);
  });

  it("should dead with more than 3 neighbors", () => {
    assertState(cell.getNextState(4), CellState.DEAD);
    assertState(cell.getNextState(5), CellState.DEAD);
  });

  it("should live with  2 or 3 neighbors", () => {
    assertState(cell.getNextState(2), CellState.ALIVE);
    assertState(cell.getNextState(3), CellState.ALIVE);
  });

  it("should come alive with exactly 3 neighbors", () => {
    const cellDead = makeCell(CellState.DEAD);
    assertState(cellDead.getNextState(3), CellState.ALIVE);
  });

  it("should stay dead if it has not exactly 3 neighbors", () => {
    const cellDead = makeCell(CellState.DEAD);
    assertState(cellDead.getNextState(2), CellState.DEAD);
  });
});

function assertState(nextState: CellState, expected: CellState) {
  expect(nextState).toBe(expected);
}

function makeCell(state: CellState = CellState.ALIVE) {
  return new Cell(state);
}
