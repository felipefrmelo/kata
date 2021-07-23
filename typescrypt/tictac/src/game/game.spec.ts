import { Game } from "./game";
import { Player } from "./player";
import { Action, Board, Point, State } from "./state";

class StubPlayer implements Player {
  point: Point;

  constructor(private readonly x: number) {
    this.point = x;
  }
  name: string = "";

  takeActionIscalledWith: State | undefined;
  async takeAction(state: State) {
    this.takeActionIscalledWith = state;
    return Promise.resolve([this.x, this.x]);
  }
}

class FakeState implements State {
  count = 0;
  updateIscalledWith: number[][] = [];
  constructor(
    public maxCountDone: number = 4,
    public maxCountOver: number = 5
  ) {}
  state: Point[][] = [];

  update([row, col]: Action, value: Point): State {
    this.count = this.count + 1;
    this.updateIscalledWith.push([row, col]);
    return this;
  }
  actionsAvailables(): Action[] {
    throw new Error("Method not implemented.");
  }
  get done(): boolean {
    return this.count >= this.maxCountDone;
  }
  get over(): boolean {
    return this.count >= this.maxCountOver;
  }
}

describe("test game", () => {
  test("should init a game", () => {
    const board = new Board();
    const game = new Game(board);

    expect(game.state.done).toBeFalsy();
    expect(game.state.over).toBeFalsy();
  });

  test("should update  a board in start loop until is done ", async () => {
    const board = new FakeState();
    const player1 = new StubPlayer(0);
    const game = new Game(board, player1);

    await game.start();
    expect(game.state.done).toBe(true);
    expect(board.count).toBe(board.maxCountDone);
  });

  test("should call  take action from player and pass to update ", async () => {
    const board = new FakeState();
    const player1 = new StubPlayer(0);
    const player2 = new StubPlayer(1);
    const game = new Game(board, player1, player2);

    await game.start();

    expect(player1.takeActionIscalledWith).toBe(game.state);
    expect(board.updateIscalledWith).toEqual([
      [player1.point, player1.point],
      [player2.point, player2.point],
      [player1.point, player1.point],
      [player2.point, player2.point],
    ]);

    expect(game.winner).toEqual(player2);
  });

  test("should be winner undefined when game over", async () => {
    const board = new FakeState(10, 3);
    const player1 = new StubPlayer(0);
    const player2 = new StubPlayer(1);
    const game = new Game(board, player1, player2);

    await game.start();

    expect(board.updateIscalledWith).toEqual([
      [player1.point, player1.point],
      [player2.point, player2.point],
      [player1.point, player1.point],
    ]);

    expect(game.winner).toBeUndefined();
  });
});
