import React, { useState } from "react";
import '../style/promotionForm.css';

function PromotionForm() {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [userName, setName] = useState('');

  function handleChangeInput({ name, value }) {
    const patterns = {
      nameRegex: /\w+/ig,
      emailRegex: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    };
    if (name === "email") {
      setDisabled(!(patterns.emailRegex.test(value) && patterns.nameRegex.test(userName)));
      setEmail(value)
    }

    if (name === "name") {
      setDisabled(!(patterns.emailRegex.test(email) && patterns.nameRegex.test(value)));

      setName(value)
    }
  }

  function submitForm() {
    // console.log(patterns.nameRegex.test(name))
    // console.log(name)
    // console.log(patterns.emailRegex.test(email))
    // console.log(email)
  }

  return (
    <section className="promotion-section">
      <h4 className="promotion-title">Participe de nossas news com promoções e novidades!</h4>
      <form className="promotion-form">
        <input onChange={({target}) => handleChangeInput(target)} className="promotion-input" name="name" type="text"placeholder="Digite seu nome"/>
        <input onChange={({target}) => handleChangeInput(target)} className="promotion-input" name="email" type="email"placeholder="Digite seu email"/>
        <input onClick={() => submitForm()} disabled={ disabled } className="promotion-input btn btn-dark" type="button" value="Eu quero!"/>
      </form>
    </section>
  );
}

export default PromotionForm;
