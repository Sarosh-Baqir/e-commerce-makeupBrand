import { useMemo } from "react";
import { useSelector } from "react-redux";

// Function to get cart items
export const useCartItems = () => useSelector((state) => state.cartItems);

// Function to get cart item count
export const useCartItemCount = () =>
  useSelector((state) => state.cartItemCount);

// Function to get all users
export const useAllUsers = () => useSelector((state) => state.allUsers);

// Function to check authentication status
export const useIsAuthenticated = () => {
  const allUsers = useAllUsers();
  return useMemo(
    () => allUsers.some((userObj) => userObj.isAuthenticated),
    [allUsers]
  );
};

// Function to calculate total price
export const useTotalPrice = () => {
  const cartItems = useCartItems();
  return useMemo(
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
};
