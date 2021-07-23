import { getByRole, render, screen } from "@testing-library/react";
import { Marker } from "./index";

describe("test Marker", () => {
  it.only("renders correctly", () => {
    render(<Marker value="X"/>);

    expect(screen.getByText(/x/i)).toBeInTheDocument();
  });
});
