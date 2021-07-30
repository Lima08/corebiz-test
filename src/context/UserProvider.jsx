import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';
import getCorebizProducts from '../services/requestCorebizApi';

function UserProvider({ children }) {
  const [productsApi, setProductsApi] = useState([]);
  const [userCart, handlePurchaseUserCart] = useState([]);
  const [totalProductsCart, setTotalProductsCart] = useState(0);

  useEffect(() => {
    const setProductsContext = async () => {
      const products = await getCorebizProducts();
      setProductsApi(products);
    };
    setProductsContext();
  }, []);

  useEffect(() => {
    if (localStorage.getItem('userCart')) {
      const userCartSaved = JSON.parse(localStorage.getItem('userCart'));
      handlePurchaseUserCart(userCartSaved)
    }
  }, []);

  useEffect(() => {
    setTotalProductsCart(Number(userCart.reduce((acc, { quantity }) => acc + quantity, 0)));
  }, [userCart]);

  function setProductsCart(newProduct) {
    if (userCart.length === 0) {
      const newCart = {...newProduct, quantity: 1}
      handlePurchaseUserCart([newCart]);
      localStorage.setItem('userCart', JSON.stringify(newCart))
      return;
    }
    if (userCart.some(({ productId }) => productId === newProduct.productId)) {
      const newCart = userCart.map((products) => (
        products.productId === newProduct.productId ? {...products, quantity: Number(products.quantity) + 1} : products
      ));
      handlePurchaseUserCart(newCart);
      localStorage.setItem('userCart', JSON.stringify(newCart))
      return;
    }
    handlePurchaseUserCart([...userCart, {...newProduct, quantity: 1}]);
    localStorage.setItem('userCart', JSON.stringify([...userCart, {...newProduct, quantity: 1}]))
  }

  const context = {
    productsApi,
    userCart,
    setProductsCart,
    totalProductsCart,
    setTotalProductsCart,
  };

  return (
    <UserContext.Provider value={ context }>
      {children}
    </UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;