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

  // function atualizeTotalProducts() {
  //   setTotalProductsCart(userCart.reduce(((acc, { quantity }) => acc + quantity), 0));
  // } APAGAR?

  // userEffect(() => setTotalProductsCart(userCart.reduce(((acc, { quantity }) => acc + quantity), 0)), [userCart]);

  // Criar uma função para lidar com a adição de produtos. Pode ser um hook personalizado em
  // Essa função atualiza o carrinho de compras
  function setProductsCart(newProduct) {
    if (userCart.length === 0) {
      console.log('Rodou length');
      const newCart = {...newProduct, quantity: 1}
      handlePurchaseUserCart([newCart]);
      return;
    }
    if (userCart.some(({ productId }) => productId === newProduct.productId)) {
      console.log('Rodou some');
      const newCart = userCart.map((products) => (
        products.productId === newProduct.productId ? {...products, quantity: Number(products.quantity) + 1} : products
      ));
      handlePurchaseUserCart(newCart);
      return;
    }
    console.log('Rodou fora do if');
    handlePurchaseUserCart([...userCart, {...newProduct, quantity: 1}]);

    // const {productName, imageUrl, stars, price, productId} = newProduct;
    // Montar um novo objeto produtos com quantity
  }

  // Pensar no formato do contexto. Como vou acessar nas outras paginas o cart? Quais funções vou utilizar? Quais paginas Home, login? 
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
 // Criar função para a pagina carrinho. Função de adc item, remover um, remover todos e limpar carrinho. Função valor total compra.
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;