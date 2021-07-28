var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

// Fazer tratativa try cath
const getCorebizProducts = async () => {
  const URL = 'https://corebiz-test.herokuapp.com/api/v1/products';
  const products = await fetch(URL, requestOptions);
  const response = products.json();
  return response;
}

export default getCorebizProducts;
