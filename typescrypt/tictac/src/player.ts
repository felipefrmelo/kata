import { Action, Point, State } from "./state";

export interface Player {
  point: Point;
  takeAction(state: State): Action;
  name: string;
}
