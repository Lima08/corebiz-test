import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

  function BestSellers() {
    const { productsApi, setProductsCart } = useContext(UserContext);
    function cardItemCreator(productsApi) {
      return (
        productsApi.map((product) => (
          <div key={product.productId}>
            <img alt={`foto ${product.productName}`} src={product.imageUrl} />
            <div>
              <p>{product.productName}</p>
              <p>{`${product.stars} estrelas`}</p>
              <p>{`Valor: R$${Number(product.price)}`}</p>
              <p>Valor parcelado - fazer calculo simulado</p>
              <input
                type="button"
                value="Comprar"
                onClick={ () => setProductsCart(product) }
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
      <hr/>
      </section>
  );
}

export default BestSellers;
