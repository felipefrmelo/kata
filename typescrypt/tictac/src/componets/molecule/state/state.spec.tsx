import { fireEvent, render, screen } from "@testing-library/react";
import { State } from "./index";

describe("test state", () => {
  it("render state", () => {
    render(
      <State
        points={[
          ["X", "X", "X"],
          ["X", "X", "X"],
          ["X", "X", "X"],
        ]}
      />
    );

    expect(screen.getAllByText("X")).toHaveLength(9);
  });

  it("render 3 cols and 3 rows", () => {
    render(
      <State
        points={[
          ["X", "X", "X"],
          ["X", "X", "X"],
          ["X", "X", "X"],
        ]}
      />
    );

    const rows = screen.getAllByRole("row");
    rows.forEach((row) => {
      expect(row.childNodes).toHaveLength(3);
    });
  });

  it("should return a cell index when click", () => {
    const onClick = jest.fn();
    render(
      <State
        onClick={onClick}
        points={[
          ["X", "X", "X"],
          ["5", "X", "X"],
          ["X", "X", "X"],
        ]}
      />
    );
    const rows = screen.getAllByRole("row");
    const cells = screen.getAllByRole("cell");

    fireEvent.click(cells[0]);
    fireEvent.click(cells[1]);

    expect(onClick).toHaveBeenCalledWith(0, 0);
    expect(onClick).toHaveBeenCalledWith(0, 1);
  });
});
