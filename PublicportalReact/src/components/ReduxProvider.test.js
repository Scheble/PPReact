import React from "react";
import { render, screen } from "@testing-library/react";
import ReduxProvider from "./ReduxProvider";

test("App should load", () => {
  render(<ReduxProvider />);
  expect(screen.findAllByTestId("root"));
});
