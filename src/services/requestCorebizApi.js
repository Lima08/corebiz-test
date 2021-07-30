const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const getCorebizProducts = () => {
  const URL = 'https://corebiz-test.herokuapp.com/api/v1/products';
  return fetch(URL, requestOptions)
    .then(products => products.json())
    .then(response => response)
    .then(response => response)
    .catch(error =>  console.log('error na postagem:', error));
}

export default getCorebizProducts;
