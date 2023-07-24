import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import Dashboard from "../components/dashboard/Dashboard";
import Home from "../components/dashboard/home";
import Bills from "../components/dashboard/bills";
import Documents from "../components/dashboard/documents";
import Calendar from "../components/dashboard/calendar"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/",
        element: <Home />,
      },
      {
        path: "/dashboard/home",
        element: <Home />,
      },
      {
        path: "/dashboard/bills",
        element: <Bills />,
      },
      {
        path: "/dashboard/documents",
        element: <Documents />,
      },
      {
        path: "/dashboard/calendar",
        element: <Calendar />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 Page not found</h1>,
  },
]);

export default router;
