import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import '../style/bestSellers.css';

  function BestSellers() {
    const { productsApi, setProductsCart } = useContext(UserContext);
    // para as avaliaçõe em estrelas fazer um icone e renderiza-lo de acorod com a quantidade. Google foonts ou bootstrap
    function cardItemCreator(productsApi) {
      return (
        <div className="list-BestSellers">
          <input type="button" value="<"/>
          {productsApi.map((product) => (
            <div className="item-BestSellers container-fluid"key={product.productId}>
              <img alt={`foto ${product.productName}`} src={product.imageUrl} />
              <div className="infos-item">
                <p className="product-name">{product.productName}</p>
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
          ))} 
          <input type="button" value=">"/>
        </div>
      )
    }
  return (
    <section className="section-BestSellers">
      <hr/>
      <h3>Mais vendidos</h3>
      {cardItemCreator(productsApi)}
      <hr/>
      </section>
  );
}

export default BestSellers;
