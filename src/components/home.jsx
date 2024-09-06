import React from "react";
import { useLoaderData, NavLink } from "react-router-dom";
import Footer from "./footer";

const HomePage = () => {
  // Get the products data from the loader
  const { products } = useLoaderData();

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-gray-800 text-white py-20 mt-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Discover Your Perfect Look
          </h1>
          <p className="text-xl mb-8">
            Explore our premium collection of makeup products.
          </p>
          <NavLink
            to="/products"
            className="bg-yellow-500 text-gray-800 font-bold py-2 px-6 rounded hover:bg-yellow-600"
          >
            Shop Now
          </NavLink>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Featured Makeup Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
