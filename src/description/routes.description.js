import Dashboard from "../presentation/dashboard/Dashboard";
import Login from "../presentation/login";
import Reservation from "../presentation/reservation/Reservation";
import ProtectedRoute from "../routes/ProtectedRoute";
import PublicRoute from "../routes/PublicRoute";

export const routes = [
  {
    element: <PublicRoute />,
    children: [{ path: "/login", element: <Login /> }],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
    ],
  },
  {
    path: "*",
    element: <>Page Not Found</>,
  },
];
