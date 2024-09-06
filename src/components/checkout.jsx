import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });

  const cartItems = useSelector((state) => state.cartItems);
  const cartItemCount = useSelector((state) => state.cartItemCount);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const cleanPrice = item.price.replace(/[^0-9.-]+/g, "");
      const price = parseFloat(cleanPrice);
      const quantity = parseInt(item.quantity, 10);

      return total + price * quantity;
    }, 0);
  }, [cartItems]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("shipping information:", formData);
      navigate("/orderSummary");
    },
    [formData, navigate]
  );

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>

        {cartItemCount > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              <div className="border-b mb-4">
                {cartItems.map((item) => {
                  const cleanPrice = item.price.replace(/[^0-9.-]+/g, "");
                  const price = parseFloat(cleanPrice);
                  const quantity = parseInt(item.quantity, 10);

                  if (isNaN(price) || isNaN(quantity)) {
                    console.error("Invalid price or quantity:", item);
                    return null;
                  }

                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between mb-4"
                    >
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover mr-4"
                        />
                        <div>
                          <h3 className="text-lg font-bold">{item.name}</h3>
                          <p className="text-gray-600">
                            {quantity} x ${price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <p className="font-bold">
                        ${(price * quantity).toFixed(2)}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-gray-600">Shipping</span>
                <span className="font-bold">$5.00</span>
              </div>
              <div className="flex justify-between text-xl font-bold border-t pt-4">
                <span>Total</span>
                <span>${(totalPrice + 5).toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    ref={inputRef}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="address">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="city">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="state">
                    State
                  </label>
                  <input
                    id="state"
                    type="text"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="zip">
                    Zip Code
                  </label>
                  <input
                    id="zip"
                    type="text"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600">Your cart is empty.</p>
            <NavLink
              to="/products"
              className="inline-block mt-6 bg-yellow-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-yellow-600"
            >
              Continue Shopping
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
