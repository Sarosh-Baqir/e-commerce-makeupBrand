import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout";
import ErrorPage from "./components/errorPage";
import Home from "./components/home";
import Signup from "./components/signup";
import Login from "./components/login";
import { signupAction } from "./components/signupAction";
import { loginAction } from "./components/loginAction";
import { loader as homeLoader } from "./components/loader";
import ProductsPage from "./components/productsPage";
import Dashboard from "./components/dashboard";
import ProtectedRoute from "./components/protectedRoute";
import Cart from "./components/cart";
import "./App.css";
import Checkout from "./components/checkout";
import OrderSummary from "./components/orderSummary";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: "/products",
          element: <ProductsPage />,
          loader: homeLoader,
        },
        {
          path: "/login",
          element: <Login />,
          action: loginAction,
        },
        {
          path: "/signup",
          element: <Signup />,
          action: signupAction,
        },
        {
          path: "/dashboard",
          // Protect the Dashboard route
          element: <ProtectedRoute element={<Dashboard />} />, // Add the Dashboard route
        },
        {
          path: "/cart",
          element: <Cart />,
        },

        {
          path: "/checkout",
          element: <Checkout />,
        },

        {
          path: "/orderSummary",
          element: <OrderSummary />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
