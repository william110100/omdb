import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MovieResponse, MoviesRequest, MoviesResponse } from "../types";
import { API_URL } from "../utilities/constants";

export const fetchMovie = createAsyncThunk<MovieResponse, { imdbID: string }>(
  "omdb/movie",
  async ({ imdbID }, { rejectWithValue }) => {
    return await axios
      .get(API_URL, {
        params: {
          apikey: "faf7e5bb",
          i: imdbID,
        },
      })
      .then((res) => res?.data)
      .catch((err) => rejectWithValue(err));
  },
);

export const fetchMovies = createAsyncThunk<MoviesResponse, MoviesRequest>(
  "omdb/movies",
  async ({ keyword, type }, { rejectWithValue }) => {
    return await axios
      .get(API_URL, {
        params: {
          apikey: "faf7e5bb",
          s: keyword,
          type: type,
        },
      })
      .then((res) => res?.data)
      .catch((err) => rejectWithValue(err));
  },
);
