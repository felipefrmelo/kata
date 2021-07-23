import React from "react";
import { Action, Point } from "../../../game/state";
import { Marker } from "../../atoms";

export interface StateProps {
  points: Point[][];
  onClick?: (row: number, col: number) => void;
}

export function State({ onClick = () => {}, points }: StateProps) {
  return (
    <table>
      <tbody className="grid gap-8">
        {points.map((row, row_index) => (
          <tr className="grid gap-8 grid-cols-3" key={row_index}>
            {row.map((point, col_index) => (
              <td onClick={() => onClick(row_index, col_index)} key={col_index}>
                <Marker value={point} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
