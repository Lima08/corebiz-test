import React from 'react';
import { Link } from 'react-router-dom';
// import '../style/heroHomePage.css';

function NotFoundPage() {
  return (
  <div className="NotFoundPage">
            <Link to="/">
          <button
            type="button"
            className="navBtns btn btn-secundary position-relative"
          >
            Voltar
          </button>
        </Link>
    <h1>Página não encontrada</h1>
  </div>
  );
}

export default NotFoundPage;
