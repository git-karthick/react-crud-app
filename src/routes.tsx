import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import UsersTable from "./components/UsersTable";
import PrivateRoute from "./components/PrivateRoute";
//import { Suspense, lazy } from "react";
import TableSkeleton from "./components/TableSkeleton";
import UserDetailsPage from "./pages/UserDetailsPage";
import CreateUser from "./components/CreateUser";
//const UsersTable = lazy(() => import("./components/UsersTable"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "users",
            element: <UsersTable />,
            //children: [],
          },
          { path: "users/:id", element: <UserDetailsPage /> },
        ],
      },
      { path: "newuser", element: <CreateUser /> },
    ],
  },
]);

export default router;
