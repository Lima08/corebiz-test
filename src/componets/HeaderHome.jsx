import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function HeaderHome() {
  const { totalProductsCart } = useContext(UserContext);

  return (
    <header>
      <span>corebiz R</span>
      <input type="text" placeholder="O que está procurando?"/>
      <input type="button" name="Será um link para minha conta" value="Minha conta" />
      <input
        type="button"
        name="Será um link para o carrinho"
        value="carrinho - adicionar link"
        // onClick={}
      />
      <span> qtd carrinho{totalProductsCart}</span>
      <hr/>
    </header>

  );
}

export default HeaderHome;
