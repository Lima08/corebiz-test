import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';
import getCorebizProducts from '../services/requestCorebizApi';

function UserProvider({ children }) {
  const [productsApi, setProductsApi] = useState([])
  const [purchase, addPurchaseUserCart] = useState({userCart: []})
  const [totalProductsCart, handleTotalProductsCart] = useState({totalProducts: 0})

  useEffect(() => {
    const setProductsContext = async () => {
      const products = await getCorebizProducts();
      setProductsApi(products);
    };
    setProductsContext();
  }, []);

  // Criar uma função para lidar com a adição de produtos. Pode ser um hook personalizado em
  // Essa função atualiza o total de produtos e tbm atualiza o carrinho de compras
  function setProductsCart(product) {

  }

  // Pensar no formato do contexto. Como vou acessar nas outras paginas o cart? Quais funções vou utilizar? Quais paginas Home, login? 
  const context = {
    productsApi,
    purchase,
    addPurchaseUserCart,
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