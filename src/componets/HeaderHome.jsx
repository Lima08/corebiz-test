import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import '../style/headerHome.css'

function HeaderHome() {
  const { totalProductsCart } = useContext(UserContext);

  return (
    <header className="header-homePage">
      <p className="Logo-corebiz">corebiz<span className="ponto-corebiz">.</span></p>
      <input className="search-homePage" type="text" placeholder="O que está procurando?"/>
      <nav className="navBtns-homePage">
        <input type="button" name="Será um link para minha conta" value="Minha conta" />
        <input
          type="button"
          name="Será um link para o carrinho"
          value="carrinho - adicionar link"
          // onClick={}
        />
        <span> qtd carrinho{totalProductsCart}</span>
      </nav>
      <hr/>
    </header>

  );
}

export default HeaderHome;
