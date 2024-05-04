import Dashboard from "../presentation/dashboard/Dashboard";
import Reservation from "../presentation/reservation/Reservation";

export const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
];
