import { render, cleanup } from "@testing-library/react";
import { TodoForm } from "./TodoForm";

afterEach(() => {
  cleanup();
});

describe("Todo form component", () => {
  test("renders correctly & contains input field", () => {
    const { getByPlaceholderText } = render(<TodoForm />);
    const input = getByPlaceholderText("What needs to be done?");
    expect(input).toBeInTheDocument();
  });
});
