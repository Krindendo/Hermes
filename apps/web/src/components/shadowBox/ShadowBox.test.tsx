import React from "react";

import { render, screen } from "@testing-library/react";
import ShadowBox from "./ShadowBox";

describe("tests", () => {
  it("should", () => {
    render(<ShadowBox />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
