import { Game } from "./game";

describe("game", () => {
  test("should init a game with empty state", () => {
    const game = new Game();

    const state = game.init();

    expect(state).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });


});
