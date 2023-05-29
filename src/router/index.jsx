import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import Dashboard from "../components/dashboard/Dashboard";

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
  },
  {
    path: "*",
    element: <h1>404 Page not found</h1>,
  },
]);

export default router;
