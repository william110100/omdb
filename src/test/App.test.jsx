import App from "../App";
import { store } from "../stores/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

describe("App", () => {
  test("renders Dashboard and MovieModal components", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const dashboardElement = screen.getByTestId("dashboard");
    expect(dashboardElement).toBeInTheDocument();

    const movieModalElement = screen.getByTestId("movie-modal");
    expect(movieModalElement).toBeInTheDocument();
  });
});
