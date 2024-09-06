import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { useCartItemCount, useIsAuthenticated } from "../utils/constants";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const cartItemCount = useCartItemCount();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  const handleCart = () => {
    navigate("/cart");
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      dispatch({ type: "resetSearch" });
    } else {
      dispatch({ type: "searchProduct", payload: searchQuery });
      navigate("/products");
    }
  }, [searchQuery, dispatch, navigate]);

  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <NavLink
        to="/"
        className="text-2xl font-bold text-yellow-500"
        activeClassName="text-yellow-500"
      >
        MakeupShop
      </NavLink>

      <div className="flex-grow mx-4 hidden md:flex items-center relative">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-2 pl-10 rounded-lg bg-gray-700 text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaSearch
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
      </div>

      <div className="flex items-center space-x-4">
        <NavLink
          to="/login"
          className="hover:underline"
          activeClassName="text-yellow-500"
        >
          <FaUser />
        </NavLink>
        <NavLink
          to="/signup"
          className="hover:underline"
          activeClassName="text-yellow-500"
        >
          Sign Up
        </NavLink>

        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="hover:underline bg-red-500 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        )}

        <NavLink
          to="/cart"
          className="relative"
          activeClassName="text-yellow-500"
        >
          <FaShoppingCart onClick={handleCart} />

          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1 py-0.5">
              {cartItemCount}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
