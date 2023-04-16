import Section from "../modules/MovieModal/components/Section";
import { render, screen } from "@testing-library/react";

describe("Section", () => {
  const props = {
    BoxOffice: "100 million",
    Runtime: "120 min",
    Year: "2021",
    imdbRating: "7.5",
    imdbVotes: "1000",
  };

  test("renders section component with correct data", () => {
    render(<Section {...props} />);

    const ratingElement = screen.getByTestId("rating-column");
    expect(ratingElement).toHaveTextContent("7.5");

    const votesElement = screen.getByTestId("votes-column");
    expect(votesElement).toHaveTextContent("1000");

    const yearElement = screen.getByTestId("year-column");
    expect(yearElement).toHaveTextContent("2021");

    const boxOfficeElement = screen.getByTestId("box-office-column");
    expect(boxOfficeElement).toHaveTextContent("100 million");

    const runtimeElement = screen.getByTestId("runtime-column");
    expect(runtimeElement).toHaveTextContent("120 min");
  });
});
