import React from 'react';
import { Link } from 'react-router-dom';

function UserAcount() {
  return (
    <div >
      <Link to="/">
        <input
          type="button"
          value="Voltar"
          className="btn btn-outline-secondary"
        />
      </Link>
      <h1>Minha conta</h1>
    </div>
  );
}

export default UserAcount;
