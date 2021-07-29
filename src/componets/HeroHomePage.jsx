import React from 'react';
import '../style/heroHomePage.css';

function HeroHomePage() {
  // Criar função para header
  // Colocar uma imagem no backogroup da div
  /* <img alt="imagem propaganda" width="200px" src='https://source.unsplash.com/1600x900/?computer'/> */
  return (
    <>
      <div className="heroHomePage">
        <div className="hero-texts">
          <p>Olá, o que você está buscando?</p>
          <h2>Criar ou migrar seu e-commerce?</h2>
        </div>
      </div>

    </>
  );
}

export default HeroHomePage;
