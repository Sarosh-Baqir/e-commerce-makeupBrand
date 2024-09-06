import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { signupAction } from "./pages/signupAction";
import { loginAction } from "./pages/loginAction";
import { loader as homeLoader } from "./utils/loader";
import ProductsPage from "./pages/productsPage";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/protectedRoute";
import Cart from "./pages/cart";
import "./App.css";
import Checkout from "./pages/checkout";
import OrderSummary from "./pages/orderSummary";

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
          element: <ProtectedRoute element={<Checkout />} />,
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
