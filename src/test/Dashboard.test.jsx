import Dashboard from "../modules/Dashboard";
import { setConditions } from "../stores/slice";
import { fetchMovie, fetchMovies } from "../stores/thunk";
import { categories } from "../utilities/constants";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  conditions: {},
  movies: {},
});

describe("Dashboard component", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("renders search input and segmented control", () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );

    expect(
      screen.getByPlaceholderText("Search for movies or TV series"),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("segmented-control")).toBeInTheDocument();
  });

  test("dispatches fetchMovies action with correct arguments on search input change", async () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );

    const searchInput = screen.getByPlaceholderText(
      "Search for movies or TV series",
    );

    fireEvent.change(searchInput, { target: { value: "Batman" } });

    await waitFor(() => {});

    expect(store.getActions()).toEqual([
      fetchMovies({ keyword: "Batman", type: "movie" }),
    ]);
  });

  test("dispatches setType action with correct value on segmented control change", () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );

    fireEvent.click(screen.getByText(categories[1]));

    expect(store.getActions()).toEqual([setConditions({ type: "series" })]);
  });

  test("dispatches fetchMovie and setConditions actions on movie card click", async () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );

    const fetchMovieMock = jest.fn().mockResolvedValue({});
    const unwrapMock = jest.fn().mockReturnValue(fetchMovieMock());
    fetchMovieMock.unwrap = unwrapMock;

    const movieCard = screen.getByRole("img");

    fireEvent.click(movieCard);

    expect(store.getActions()).toEqual([
      setConditions({ openModal: true }),
      fetchMovie({ imdbID: movieCard.getAttribute("src") }),
    ]);

    expect(fetchMovieMock).toHaveBeenCalledWith({
      imdbID: movieCard.getAttribute("src"),
    });

    await waitFor(() => {});

    expect(unwrapMock).toHaveBeenCalled();
  });
});
