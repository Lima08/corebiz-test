import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import UserContext from './UsersContext';
import getCorebizProducts from '../services/requestCorebizApi';

function UserProvider({ children }) {
  const [productsApi, setProductsApi] = useState([])

  useEffect(() => {
    const setProductsContext = async () => {
      const products = await getCorebizProducts();
      setProductsApi(products);
    };
    setProductsContext();
  }, []);



  const context = {productsApi, setProductsApi};

  return (
    <UserContext.Provider value={ context }>
      {children}
    </UserContext.Provider>
  );
}

// PlanetsProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default UserProvider;