import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/index";
import HomePage from '../pages/Home/index';
import LoginPage from "../pages/LoginPage/index";
import ProfilePage from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <HomePage />
      },
    //   {
    //     path: "/cart",
    //     element: <PrivateRoute><CartPage /></PrivateRoute>
    //   },
      {
        path: "/profile",
        element: <ProfilePage />
      }
    ]
  }
]);