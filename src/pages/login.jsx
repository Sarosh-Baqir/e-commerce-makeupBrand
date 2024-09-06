import { useEffect } from "react";
import { Link, Form, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "./loginAction";
import { useAllUsers, useIsAuthenticated } from "../utils/constants";
import Button from "../components/Button";
import Card from "../components/Card";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useAllUsers();
  const isAuthenticated = useIsAuthenticated();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await loginAction({
      request: event.target,
      dispatch,
      state,
    });

    if (result.success) {
      navigate("/checkout");
    } else {
      // show an alert for failed login
      alert(result.error || "Login failed.");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/products"); // navigate to products page if already authenticated
    }
  }, [isAuthenticated, navigate]);

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <label htmlFor="email" className="block text-gray-300 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-2 mt-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <label htmlFor="password" className="block text-gray-300 font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="w-full p-2 mt-2 mb-6 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <Button type="submit">Login</Button>
        <div className="mt-4 text-center">
          <Link to="/signup" className="text-yellow-500 hover:underline">
            Don't have an account? Signup
          </Link>
        </div>
      </Form>
    </Card>
  );
};

export default Login;
