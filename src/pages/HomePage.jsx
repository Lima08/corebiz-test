import React from 'react';
import HeroHomePage from '../components/HeroHomePage';
import BestSellers from '../components/BestSellers';
import UserProvider from '../context/UserProvider';
import HeaderHome from '../components/HeaderHome';
import Footer from '../components/Footer';
import PromotionForm from '../components/PromotionForm';

function HomePage() {
  // Criar função para header
  // Arrumar logo tirando 1 h do src
  // Span qtd será um link
  return (
    <UserProvider>
      <HeaderHome/>
      <HeroHomePage/>
      <BestSellers/>
      <PromotionForm/>
      <Footer/>
    </UserProvider>

  );
}

export default HomePage;
