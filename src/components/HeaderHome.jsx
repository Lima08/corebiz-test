import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import '../style/headerHome.css'
import { Link } from 'react-router-dom';

function HeaderHome() {
  const { totalProductsCart } = useContext(UserContext);

  return (
    <header className="header-homePage">
      <p className="Logo-corebiz">corebiz<span className="ponto-corebiz">.</span></p>
      <input className="search-homePage" type="text" placeholder="O que está procurando?"/>
      <nav>
        <Link to="/myAcount">
          <input
            type="button"
            value="Minha conta"
            className="navBtns btn btn-secundary"
          />
        </Link>
        <Link to="/cart">
          <button
            type="button"
            className="navBtns btn btn-secundary position-relative"
          >
            Carrinho
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalProductsCart}
            </span>
          </button>
        </Link>
      </nav>
      <hr/>
    </header>

  );
}

export default HeaderHome;
