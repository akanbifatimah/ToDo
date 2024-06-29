
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';


const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return (
        <Navigate
            to="/login"
            replace
        />
    );
}
return <Component {...rest} />;
};

export default ProtectedRoute;
