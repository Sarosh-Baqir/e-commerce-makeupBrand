import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const cleanPrice = item.price.replace(/[^0-9.-]+/g, "");
      const price = parseFloat(cleanPrice);
      const quantity = parseInt(item.quantity, 10);

      return total + price * quantity;
    }, 0);
  }, [cartItems]);

  const handleContinueShopping = useCallback(() => {
    dispatch({ type: "clearCart" });
    navigate("/products");
  }, [dispatch, navigate]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Order Summary</h2>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Your Order</h3>
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
                  <p className="font-bold">${(price * quantity).toFixed(2)}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between text-xl font-bold border-t pt-4">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleContinueShopping}
            className="bg-yellow-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-yellow-600"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
