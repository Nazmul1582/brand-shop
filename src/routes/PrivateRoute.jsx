import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-[80vh] grid place-items-center">
        <span className="loading loading-spinner text-info loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  } else return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
