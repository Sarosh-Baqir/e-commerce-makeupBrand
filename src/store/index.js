import { createStore } from "redux";

const authenticationReducer = (
  state = {
    allUsers: [{ isAuthenticated: false, user: null, error: null }],
    cartItemCount: 0,
    cartItems: [],
    searchQuery: "",
  },
  action
) => {
  switch (action.type) {
    case "loginSuccess":
      return {
        ...state,
        allUsers: state.allUsers.map((userObj) =>
          userObj.user && userObj.user.email === action.payload.email
            ? { ...userObj, isAuthenticated: true, error: null }
            : userObj
        ),
      };

    case "loginFailure":
      return {
        ...state,
        allUsers: state.allUsers.map((userObj) => ({
          ...userObj,
          error: action.payload,
        })),
      };

    case "logout":
      return {
        ...state,
        allUsers: state.allUsers.map((userObj) => ({
          ...userObj,
          isAuthenticated: false,
          error: null,
        })),
      };

    case "addUser":
      return {
        ...state,
        allUsers: [
          ...state.allUsers,
          {
            isAuthenticated: false,
            user: action.payload.user,
            error: null,
          },
        ],
      };

    case "addUserFailure":
      return {
        ...state,
        allUsers: [
          ...state.allUsers,
          {
            isAuthenticated: false,
            user: null,
            error: action.payload.error,
          },
        ],
      };

    case "addToCart":
      // check if the item already exists in the cart
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          cartItemCount: state.cartItemCount + 1,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          cartItemCount: state.cartItemCount + 1,
        };
      }

    case "removeFromCart":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        cartItemCount: state.cartItemCount - 1,
      };

    case "clearCart":
      return {
        ...state,
        cartItems: [],
        cartItemCount: 0,
      };

    case "searchProduct":
      return {
        ...state,
        searchQuery: action.payload,
      };

    case "resetSearch":
      return {
        ...state,
        searchQuery: "",
      };

    default:
      return state;
  }
};

const store = createStore(authenticationReducer);

export default store;
