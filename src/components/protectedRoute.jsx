import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.allUsers);

  // Check if any user is authenticated
  const isAuthenticated = allUsers.some((userObj) => userObj.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? element : null;
};

export default ProtectedRoute;
