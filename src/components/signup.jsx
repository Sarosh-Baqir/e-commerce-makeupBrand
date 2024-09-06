import React from "react";
import { NavLink, Form, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "./signupAction";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.allUsers); // Get all users from the state

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await signupAction({
      request: event.target,
      dispatch,
      state,
    });

    if (result.success) {
      navigate("/login");
    } else {
      alert("Signup failed: User already exists.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <Form
        className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <label htmlFor="name" className="block text-gray-300 font-semibold">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full p-2 mt-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <label htmlFor="email" className="block text-gray-300 font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full p-2 mt-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <label htmlFor="password" className="block text-gray-300 font-semibold">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          className="w-full p-2 mt-2 mb-6 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-600"
        >
          Signup
        </button>
        <div className="mt-4 text-center">
          <NavLink to="/login" className="text-yellow-500 hover:underline">
            Already have an account? Login
          </NavLink>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
