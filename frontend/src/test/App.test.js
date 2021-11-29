import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import App from "../App";

//snapshot test to compare App component rendering
test("renders App correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

//unit test to match specific text in App component
test("renders title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Search Engine/);
  expect(titleElement).toBeInTheDocument();
});
