import { Counter } from "./components/Counter";
import { Portfolio } from "./components/Portfolio";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <Portfolio />
  }
];

export default AppRoutes;
