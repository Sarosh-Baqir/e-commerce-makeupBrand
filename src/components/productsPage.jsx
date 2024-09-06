import { useState, useMemo, useCallback } from "react";
import {
  useLoaderData,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ProductsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { products } = useLoaderData();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allUsers = useSelector((state) => state.allUsers);
  const searchQuery = useSelector((state) => state.searchQuery);
  console.log("in products page", searchQuery);

  // Check if any user is authenticated
  const isAuthenticated = useMemo(
    () => allUsers.some((userObj) => userObj.isAuthenticated),
    [allUsers]
  );

  const categories = useMemo(
    () => [
      "All",
      "Foundation",
      "Blush",
      "Primer",
      "Lipstick",
      "Concealer",
      "Eyeliner",
      "Mascara",
      "Eyeshadow",
      "Powder",
      "Setting Spray",
      "Lip Gloss",
      "Highlighter",
      "Lip Balm",
    ],
    []
  );

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // apply category filter if a specific category is selected
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // apply search query filter if there's a search query
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [products, selectedCategory, searchQuery]);

  // Memoize handleCart to avoid re-creating it on every render
  const handleCart = useCallback(
    (product) => {
      if (!isAuthenticated) {
        navigate("/login", { state: { from: location.pathname, product } });
      } else {
        dispatch({ type: "addToCart", payload: product });
      }
    },
    [isAuthenticated, navigate, location.pathname, dispatch]
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* category filter */}
      <section className="py-10 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Filter by Category
          </h2>
          <div className="flex justify-center space-x-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded ${
                  selectedCategory === category
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* products list */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-gray-500">{product.price}</p>
                  <NavLink
                    to={`/product/${product.id}`}
                    className="text-yellow-500 hover:underline"
                  >
                    View Details
                  </NavLink>
                  <div className="mt-2">
                    <button
                      onClick={() => handleCart(product)}
                      className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
