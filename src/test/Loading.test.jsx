import { render, screen } from "@testing-library/react";
import Loading from "../modules/components/Loading";

describe("Loading", () => {
  test("renders loading spinner", () => {
    render(<Loading />);

    const spinnerElement = screen.getByTestId("loading-spinner");
    expect(spinnerElement).toBeInTheDocument();

    const tipElement = screen.getByText(/Loading/i);
    expect(tipElement).toBeInTheDocument();
  });
});
