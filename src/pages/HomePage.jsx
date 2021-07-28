import React from 'react';
import HeroHomePage from '../componets/HeroHomePage';
import BestSellers from '../componets/BestSellers';
import UserProvider from './context/UserProvider';

function HomePage() {
  // Criar função para header
  // Arrumar logo tirando 1 h do src
  return (
    <UserProvider>
      <main>
        <header>
          <span>corebiz R</span>
          <input type="text" placeholder="O que está procurando?"/>
          <input type="button" name="Será um link para minha conta" value="Minha conta" />
          <input type="button" name="Será um link para o carrinho" value="carrinho - adicionar link" />
        </header>
        <HeroHomePage/>
        <h1>Home page</h1>
        <BestSellers/>
      </main>
    </UserProvider>

  );
}

export default HomePage;
