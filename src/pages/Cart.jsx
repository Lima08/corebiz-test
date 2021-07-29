import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div >
      <Link to="/">
        <input
          type="button"
          value="Voltar"
          className="btn btn-outline-secondary"
        />
      </Link>
      <h1>Meu carrinho</h1>
    </div>
  );
}

export default Cart;
