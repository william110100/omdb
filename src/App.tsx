import "./App.scss";
import { FC, Suspense, memo } from "react";
import { Provider } from "react-redux";
import { Dashboard, MovieModal } from "./modules";
import { Loading } from "./modules/components";
import { store } from "./stores/store";

const App: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <Dashboard />
        <MovieModal />
      </Provider>
    </Suspense>
  );
};

export default memo(App);
