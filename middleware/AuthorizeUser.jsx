import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { verifyUser } from '../src/services/api';
import { useEffect, useState } from 'react';

export const AuthorizeUser = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const verify = async () => {
      try {
        const result = await verifyUser();
        setIsAuthorized(result);
      } catch (error) {
        setIsAuthorized(false);
      }
    };

    verify();
  }, []);

  if (isAuthorized === null) {
    // Show a loading spinner or placeholder while verifying
    return <p>Loading...</p>;
  }

  if (!isAuthorized) {
    return <Navigate to="/login" />;
  }

  return children;
};

AuthorizeUser.propTypes = {
  children: PropTypes.node.isRequired,
};
