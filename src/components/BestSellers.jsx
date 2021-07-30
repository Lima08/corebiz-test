import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import '../style/bestSellers.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


  function BestSellers() {
    const [indexToNotRender, setIndexToNotRender] = useState(4);
    const [onMouse, setOnMouse] = useState(true);
    const { productsApi, setProductsCart } = useContext(UserContext);
    
    function handleRenderBestSellers(operation) {
      if (operation === '>') {
        (indexToNotRender === 4) ? setIndexToNotRender(0) : setIndexToNotRender(indexToNotRender + 1);
      }
      if (operation === '<') {
        (indexToNotRender === 0) ? setIndexToNotRender(4) : setIndexToNotRender(indexToNotRender - 1);
      }
    }

    function cardItemCreator(productsApi) {
      const cartList = productsApi.map((product, index) => (
        (index === indexToNotRender) ? null : (
        <div
          className="item-BestSellers container-fluid"
          key={product.productId}
          onMouseEnter={() => setOnMouse(true)}
          onMouseLeave={() => setOnMouse(false)}
        >
          {(product.listPrice > product.price) ? <p className="off-bestSellers p-3 mb-2 bg-danger text-white">OFF</p> : null}
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

            <input
              type="button"
              value="Comprar"
              className="btn btn-dark buy-btn"
              onClick={ () => setProductsCart(product) }
            />
          </div>
        </div>)
      ))
      return (
        <div className="list-BestSellers">
          <input
            className="next-previous carousel-control-prev-icon btn btn-dark"
            type="button"
            value="<"

            onClick={({target: { value }}) => handleRenderBestSellers(value) }
          />
          {cartList} 
          <input
            className="next-previous carousel-control-next-icon btn btn-dark"
            type="button"
            value=">"
            onClick={({target: { value }}) => handleRenderBestSellers(value) }
          />
        </div>
      )
    }
  return (
    <section className="section-BestSellers">
      <h3 className="Title-bestSellers">Mais vendidos</h3>
      {cardItemCreator(productsApi)}
      </section>
  );
}

export default BestSellers;
