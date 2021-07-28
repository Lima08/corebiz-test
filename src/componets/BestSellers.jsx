import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

  function BestSellers() {
    const { productsApi } = useContext(UserContext);
    function cardItemCreator(productsApi) {
      return (
        productsApi.map(({productName, imageUrl, stars, price, productId}) => (
          <div key={productId}>
            <img alt={`foto ${productName}`} src={imageUrl} />
            <div>
              <p>{productName}</p>
              <p>{`${stars} estrelas`}</p>
              <p>{`Valor: R$${price}`}</p>
              <p>Valor parcelado - fazer calculo simulado</p>
              <input
                type="button"
                value="Comprar"
                // onClick={ }
              />
            </div>
          </div>
        )) 
      )
    }
  return (
    <section>
      <hr/>
      <h3>Mais vendidos</h3>
      {cardItemCreator(productsApi)}
      </section>
  );
}

export default BestSellers;
