import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Welcome } from ".";

describe("test menu component", () => {
  test("should render Welcome", () => {
    const onStart = jest.fn();
    render(<Welcome onStart={onStart} />);

    expect(screen.getByText(/jogo da velha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "start" })).toBeInTheDocument();
  });

  test("should call onStart when start button is clicked", () => {
    const onStart = jest.fn();
    render(<Welcome onStart={onStart} />);

    fireEvent.click(screen.getByRole("button", { name: "start" }));

    expect(onStart).toBeCalled();
  });
});
