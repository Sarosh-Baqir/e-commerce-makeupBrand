import { useEffect, useRef } from "react";
import { Link, Form, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./loginAction";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailInputRef = useRef();

  const state = useSelector((state) => state.allUsers);
  const isAuthenticated = useSelector((state) =>
    state.allUsers.some((user) => user.isAuthenticated)
  ); // check if any user is authenticated

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await loginAction({
      request: event.target,
      dispatch,
      state,
    });

    if (result.success) {
      if (location.state && location.state.product) {
        dispatch({ type: "addToCart", payload: location.state.product });
      }
      navigate("/products"); // navigate to products page upon successful login
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

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <Form
        className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <label htmlFor="email" className="block text-gray-300 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          ref={emailInputRef}
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

        <button
          type="submit"
          className="w-full bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-600"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <Link to="/signup" className="text-yellow-500 hover:underline">
            Don't have an account? Signup
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
