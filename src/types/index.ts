export type Movie = {
  imdbID: string;
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
};

export type Rating = {
  Source: string;
  Value: string;
};

export type MovieResponse = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  Director: string;
  DVD: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: Rating[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
};

export type MoviesRequest = {
  keyword: string;
  type: string;
};

export type MoviesResponse = {
  Response: string;
  Search: Movie[];
  totalResults: string;
};
