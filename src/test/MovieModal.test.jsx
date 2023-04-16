import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { setConditions } from "../stores/slice";
import MovieModal from "../modules/MovieModal";

const mockStore = configureStore([]);

describe("MovieModal", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      conditions: {
        openModal: true,
      },
      movie: {
        loading: false,
        data: {
          Title: "Test Movie",
          Poster: "http://example.com/poster.jpg",
          Plot: "Test plot",
          BoxOffice: "$100 million",
          Runtime: "120 min",
          Year: "2022",
          imdbRating: "7.5",
          imdbVotes: "1000",
        },
      },
    });
  });

  test("renders modal with correct data", () => {
    render(
      <Provider store={store}>
        <MovieModal />
      </Provider>,
    );

    const modalTitle = screen.getByText("Test Movie");
    const modalPlot = screen.getByText("Test plot");
    expect(modalTitle).toBeInTheDocument();
    expect(modalPlot).toBeInTheDocument();
  });

  test("dispatches setConditions action on modal cancel", () => {
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <MovieModal />
      </Provider>,
    );

    const modalCancelButton = screen.getByRole("button", { name: "Cancel" });
    fireEvent.click(modalCancelButton);

    expect(store.dispatch).toHaveBeenCalledWith(
      setConditions({ openModal: false }),
    );
  });
});
