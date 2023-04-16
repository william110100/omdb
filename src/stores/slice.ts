import { createSlice } from "@reduxjs/toolkit";
import { fetchMovie, fetchMovies } from "./thunk";
import { MovieResponse, MoviesResponse } from "../types";

const initialMovieState: MovieResponse = {
  Actors: "",
  Awards: "",
  BoxOffice: "",
  Country: "",
  Director: "",
  DVD: "",
  Genre: "",
  Language: "",
  Metascore: "",
  Plot: "",
  Poster: "",
  Production: "",
  Rated: "",
  Ratings: [
    {
      Source: "",
      Value: "",
    },
  ],
  Released: "",
  Response: "",
  Runtime: "",
  Title: "",
  Type: "",
  Website: "",
  Writer: "",
  Year: "",
  imdbID: "",
  imdbRating: "",
  imdbVotes: "",
};

const initialMoviesState: MoviesResponse = {
  Response: "False",
  Search: [
    {
      imdbID: "",
      Poster: "",
      Title: "",
      Type: "",
      Year: "",
    },
  ],
  totalResults: "1",
};

const conditionsSlice = createSlice({
  initialState: {
    openModal: false,
  },
  name: "conditions",
  reducers: {
    setConditions: (state, { payload }) => {
      state.openModal = payload.openModal;
    },
  },
});

const movieSlice = createSlice({
  extraReducers: ({ addCase }) => {
    addCase(fetchMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    addCase(fetchMovie.pending, (state) => {
      state.loading = true;
    });
  },
  initialState: {
    loading: false,
    data: initialMovieState,
  },
  name: "movie",
  reducers: {},
});

const moviesSlice = createSlice({
  extraReducers: ({ addCase }) => {
    addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
  },
  initialState: {
    loading: false,
    data: initialMoviesState,
  },
  name: "movies",
  reducers: {},
});

export const { setConditions } = conditionsSlice.actions;

export default {
  conditions: conditionsSlice.reducer,
  movie: movieSlice.reducer,
  movies: moviesSlice.reducer,
};
