import "./index.scss";
import {
  CalendarOutlined,
  DollarOutlined,
  EyeOutlined,
  StarOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { FC, memo } from "react";

interface Props {
  BoxOffice: string;
  Runtime: string;
  Year: string;
  imdbRating: string;
  imdbVotes: string;
}

const Section: FC<Props> = (props: Props) => {
  const { BoxOffice, Runtime, Year, imdbRating, imdbVotes } = props;

  return (
    <div className="section">
      <div className="column movie">
        <StarOutlined />
        <span className="text">{imdbRating}</span>
      </div>
      <div className="column movie">
        <EyeOutlined />
        <span className="text">{imdbVotes}</span>
      </div>
      <div className="column movie">
        <CalendarOutlined />
        <span className="text">{Year}</span>
      </div>
      <div className="column movie">
        <DollarOutlined />
        <span className="text">{BoxOffice}</span>
      </div>
      <div className="column movie">
        <VideoCameraOutlined />
        <span className="text">{Runtime}</span>
      </div>
    </div>
  );
};

export default memo(Section);
