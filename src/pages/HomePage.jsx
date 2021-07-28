import React from 'react';
import HeroHomePage from '../componets/HeroHomePage';
import BestSellers from '../componets/BestSellers';
import UserProvider from '../context/UserProvider';
import HeaderHome from '../componets/HeaderHome';
import Footer from '../componets/Footer';

function HomePage() {
  // Criar função para header
  // Arrumar logo tirando 1 h do src
  // Span qtd será um link
  return (
    <UserProvider>
      <HeaderHome/>
      <HeroHomePage/>
      <BestSellers/>
      <Footer/>
    </UserProvider>

  );
}

export default HomePage;
