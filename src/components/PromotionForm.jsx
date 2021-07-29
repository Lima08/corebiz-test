import React, { useState } from "react";
import '../style/promotionForm.css';

function PromotionForm() {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const patterns = {
    nameRegex: /\d/,
    emailRegex: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  };
  
  function validate() {
    return patterns.nameRegex.test(name) &&  patterns.emailRegex.test(email)
  }

  function handleChangeInput({ name, value }) {
    if (name === "enail") setEmail(value)
    if (name === "name") setName(value);
    console.log(!validate())
    setDisabled(!validate());
  }

  function submitForm() {
    console.log(patterns.nameRegex.test('1'))
    console.log(patterns.emailRegex.test('joaopaulo.gomeslima8@gmailcom'))
  }

  return (
    <section className="promotion-section">
      <h4 className="promotion-title">Participe de nossas news com promoções e novidades!</h4>
      <form className="promotion-form">
        <input onChange={({target}) => handleChangeInput(target)} className="promotion-input" name="name" type="text"placeholder="Digite seu nome"/>
        <input onChange={({target}) => handleChangeInput(target)} className="promotion-input" name="email" type="email"placeholder="Digite seu email"/>
        <input onClick={() => submitForm()} disabled={ false } className="promotion-input btn btn-dark" type="button" value="Eu quero!"/>
      </form>
    </section>
  );
}

export default PromotionForm;
