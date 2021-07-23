import { CellState } from "../CellState";

describe("CellState", () => {
  it("should hava a ALIVE state", () => {
    expect(CellState.ALIVE).toBe(1);
  });

  it("should have a DEAD state", () => {
    expect(CellState.DEAD).toBe(0);
  });
});
