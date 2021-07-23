import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe("test Button", () => {
  it(`renders correctly`, () => {
    const { getByText } = render(<Button>Hello Button</Button>);
    const button = getByText("Hello Button");
    expect(button).toBeInTheDocument();
  });
});
