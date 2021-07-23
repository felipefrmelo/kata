import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Config } from ".";

describe("test config component", () => {
  test("should render Config", () => {
    render(<Config />);

    expect(screen.getByText(/opções/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Player vs CPU/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Player vs Player/i })
    ).toBeInTheDocument();
  });
});
