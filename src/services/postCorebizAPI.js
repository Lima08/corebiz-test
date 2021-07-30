const sendCorebizProducts = (requestOptions) => {
  const URL = 'https://corebiz-test.herokuapp.com/api/v1/newsletter';
  return fetch(URL, requestOptions)
    .then(products => products.text())
    .then(response => console.log('REsposta postagem de sucesso:',response))
    .catch(error => console.log('error na postagem:', error));
  }

  export default sendCorebizProducts;

