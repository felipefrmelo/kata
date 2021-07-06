import { Board } from "./game";

describe("test board", () => {
  let board: Board;
  const EMPTY = Board.EMPTY;

  beforeEach(() => {
    board = new Board();
  });
  test("should board init empty", () => {
    expect(board.state).toEqual([
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
    ]);
  });

  test("should return actions availables", () => {
    const board = new Board();

    expect(board.actionsAvailables()).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ]);
  });

  test("should return a new Board when update with a valid action", () => {
    expect(board.update([0, 0], 1).state).toEqual([
      [1, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
    ]);
    expect(board.update([0, 0], 1).actionsAvailables()).toEqual([
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ]);
  });

  test("should return a new Board when update with a valid action", () => {
    expect(
      board
        .update([0, 0], 1)
        .update([0, 1], 1)
        .update([2, 1], 1)
        .actionsAvailables()
    ).toEqual([
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 2],
    ]);
  });

  test("should cannot update a field when not is empty", () => {
    expect(board.update([0, 0], 1).update([0, 0], 2).getPoint(0, 0)).toBe(1);
  });

  test("should done be true when you have 3 consecutive points equals and not empty.", () => {
    assertIsDone(board, false);
    assertIsDone(
      board.update([0, 0], 1).update([0, 1], 1).update([0, 2], 1),
      true
    );
    assertIsDone(
      board.update([0, 0], 1).update([1, 0], 1).update([2, 0], 1),
      true
    );
    assertIsDone(
      board.update([0, 0], 1).update([1, 1], 1).update([2, 2], 1),
      true
    );

    assertIsDone(
      board.update([0, 2], 1).update([1, 1], 1).update([2, 0], 1),
      true
    );

    assertIsDone(
      board.update([2, 0], 1).update([2, 1], 1).update([2, 2], 2),
      false
    );
  });

  test("should over be true when not has emtpy fields", () => {
    const boardFilled = new Board([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ]);
    expect(boardFilled.over).toBeTruthy();
  });

  function assertIsDone(newBoard: Board, e: boolean) {
    expect(newBoard.done).toBe(e);
  }
});
