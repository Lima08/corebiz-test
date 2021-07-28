


function BestSellers() {

  function cardItem() {
    // Fazer um map aqqui com o retorno da API
    return (
      <div>
        <img alt="Foto do produto" src="Colocar retorno da API" />
        <div>
          <p>Colocar nome vindo da API</p>
          <p>colocar avaliação se tiver na api</p>
          <p>Valor</p>
          <p>Valor parcelado</p>
          <input type="button" value="Comprar"/>
        </div>
      </div>
    )
  }
  return (
    <>
      <hr/>
      <h3>Mais vendidos</h3>
      <img alt="Foto iteis da API" />
      {cardItem()}
    </>
  );
}

export default BestSellers;
