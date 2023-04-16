import "./index.scss";
import { SearchOutlined } from "@ant-design/icons";
import { Card, Empty, Image, Input, Segmented } from "antd";
import { FC, memo, useEffect, useState } from "react";
import { setConditions } from "../../stores/slice";
import { RootState, useAppDispatch, useAppSelector } from "../../stores/store";
import { fetchMovie, fetchMovies } from "../../stores/thunk";
import { Movie } from "../../types";
import { categories } from "../../utilities/constants";

const { Meta } = Card;

const Dashboard: FC = () => {
  const dispatch = useAppDispatch();
  const conditions = useAppSelector((state: RootState) => state.conditions);
  const { data } = useAppSelector((state: RootState) => state.movies);
  const [keyword, setKeyword] = useState<string>("Batman");
  const [type, setType] = useState<any>("Movie");

  useEffect(() => {
    if (keyword || type)
      dispatch(fetchMovies({ keyword: keyword, type: type.toLowerCase() }));
  }, [keyword, type]);

  return (
    <div className="column" style={{ rowGap: "32px" }}>
      <Input
        onChange={(e) => {
          setTimeout(() => setKeyword(e.target.value), 1000);
        }}
        placeholder="Search for movies or TV series"
        prefix={<SearchOutlined />}
        size="large"
      />
      <Segmented
        block
        onChange={(value: any) => setType(value)}
        options={categories}
        size="large"
        value={type}
      />
      {data?.Response === "False" ? (
        <Empty />
      ) : (
        <div className="moviesSection">
          {data?.Search?.map((item: Movie, index: number) => {
            return (
              <Card
                onClick={() => {
                  dispatch(setConditions({ ...conditions, openModal: true }));
                  dispatch(fetchMovie({ imdbID: item.imdbID })).unwrap();
                }}
                hoverable
                key={index}
                cover={<Image src={item.Poster} height={250} />}
              >
                <Meta title={item.Title} description={item.Year} />
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default memo(Dashboard);
