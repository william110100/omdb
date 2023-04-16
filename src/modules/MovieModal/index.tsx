import { Modal } from "antd";
import { FC, memo } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../stores/store";
import { setConditions } from "../../stores/slice";
import { Section } from "./components";

const MovieModal: FC = () => {
  const dispatch = useAppDispatch();
  const conditions = useAppSelector((state: RootState) => state.conditions);
  const { loading, data } = useAppSelector((state: RootState) => state.movie);

  return (
    <Modal
      footer={[]}
      onCancel={() =>
        dispatch(setConditions({ ...conditions, openModal: false }))
      }
      open={conditions.openModal}
      title={data?.Title}
    >
      <div className="row">
        <div className="column" style={{ gap: "24px" }}>
          <img alt={data?.Title} src={data?.Poster} width={200} />
          <p>{data?.Plot}</p>
        </div>
        <Section
          BoxOffice={data?.BoxOffice}
          Runtime={data?.Runtime}
          Year={data?.Year}
          imdbRating={data?.imdbRating}
          imdbVotes={data?.imdbVotes}
        />
      </div>
    </Modal>
  );
};

export default memo(MovieModal);
