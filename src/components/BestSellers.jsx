import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import '../style/bestSellers.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


  function BestSellers() {
    // const [indexLimit, setIndexLimit] = useState(3);
    const [indexToNotRender, setIndexToNotRender] = useState(4);
    const [onMouse, SetOnMouse] = useState(true);
    const { productsApi, setProductsCart } = useContext(UserContext);
    // para as avaliaçõe em estrelas fazer um icone e renderiza-lo de acorod com a quantidade. Google foonts ou bootstrap
    
    function handleRenderBestSellers(operation) {
      if (operation === '>') {
        (indexToNotRender === 4) ? setIndexToNotRender(0) : setIndexToNotRender(indexToNotRender + 1);
      }
      if (operation === '<') {
        (indexToNotRender === 0) ? setIndexToNotRender(4) : setIndexToNotRender(indexToNotRender - 1);
      }
    }

    function cardItemCreator(productsApi) {
      // Faço um arrei com todos os item a serem renderizados.
      const cartList = productsApi.map((product, index) => (
        (index === indexToNotRender) ? null : (
        <div
          className="item-BestSellers container-fluid"
          key={product.productId}
          onMouseEnter={() => SetOnMouse(true)}
          onMouseLeave={() => SetOnMouse(false)}
        >
          <img alt={`foto ${product.productName}`} src={product.imageUrl} />

          <div className={onMouse ? 'infos-item' : null}>
            <p className="product-name">{product.productName}</p>
            <Rater rating={Number(product.stars)} total={5} interactive={false} />

            { (product.listPrice !== null) ? (
              <p className="listPrice">
                {`de R$ ${Number(product.listPrice / 100).toFixed(2)}`}
              </p>
            ) : null }
            <p className="value">{`por R$ ${Number(product.price / 100).toFixed(2)}`}</p>

            { (product.installments.length > 0) ? (
              <p className="installments">
                {`ou em ${product.installments[0].quantity}x de R$ ${Number(product.installments[0].value / 100).toFixed(2)}`}
              </p>
            ) : null }

            { onMouse ? (<input
              type="button"
              value="Comprar"
              className="btn btn-dark buy-btn"
              onClick={ () => setProductsCart(product) }
            />) : null }
          </div>
        </div>)
      ))
      return (
        <div className="list-BestSellers">
          <input
            type="button"
            value="<"
            onClick={({target: { value }}) => handleRenderBestSellers(value) }
          />
          {cartList} 
          <input
            type="button"
            value=">"
            onClick={({target: { value }}) => handleRenderBestSellers(value) }
          />
        </div>
      )
    }
  return (
    <section className="section-BestSellers">
      <hr/>
      <h3 className="Title-bestSellers">Mais vendidos</h3>
      {cardItemCreator(productsApi)}
      <hr/>
      </section>
  );
}

export default BestSellers;
