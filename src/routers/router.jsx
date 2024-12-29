import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/index";
import HomePage from '../pages/Home/index';
import LoginPage from "../pages/LoginPage/index";
import ProfilePage from "../pages/Profile";
import CartPage from "../pages/CartPage";

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
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/profile",
        element: <ProfilePage />
      }
    ]
  }
]);