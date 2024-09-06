import { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const cartItemCount = useSelector((state) => state.cartItemCount);

  // Memoize the total price to avoid recalculating unless cartItems changes
  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total +
          (parseFloat(item.price.replace(/[^0-9.-]+/g, "")) || 0) *
            (Number(item.quantity) || 0),
        0
      ),
    [cartItems]
  );

  // memoize the handleRemoveFromCart function to prevent recreation on each render
  const handleRemoveFromCart = useCallback(
    (id) => {
      dispatch({ type: "removeFromCart", payload: id });
    },
    [dispatch]
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

        {cartItemCount > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* cart items */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-md rounded-lg p-6">
                {cartItems.map((item) => (
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
                          {item.quantity} x {item.price}
                        </p>
                      </div>
                    </div>
                    <p className="font-bold">
                      $
                      {(
                        parseFloat(item.price.replace(/[^0-9.-]+/g, "")) *
                        Number(item.quantity)
                      ).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* cart summary */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
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
              <NavLink
                to="/checkout"
                className="block mt-6 bg-yellow-500 text-white text-center py-3 rounded-lg font-bold hover:bg-yellow-600"
              >
                Proceed to Checkout
              </NavLink>
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

export default Cart;
