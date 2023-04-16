import "./index.scss";
import { Spin } from "antd";
import { FC, memo } from "react";

const Loading: FC = () => {
  return (
    <div className="middle">
      <Spin size="large" tip="Loading"></Spin>
    </div>
  );
};

export default memo(Loading);
