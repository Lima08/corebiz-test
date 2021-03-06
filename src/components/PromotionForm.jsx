import React, { useState } from "react";
import sendCorebizProducts from '../services/postCorebizAPI';
import '../style/promotionForm.css';

function PromotionForm() {
  const [disabled, setDisabled] = useState(true);
  const [userEmail, setEmail] = useState('');
  const [userName, setName] = useState('');
  const [renderNoRegister, setRenderNoRegister] = useState('');

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
      setDisabled(!(patterns.emailRegex.test(userEmail) && patterns.nameRegex.test(value)));

      setName(value)
    }
  }

  const submitForm = () => {
  
    const infosToSend = {
      "email": userEmail,
      "name": userName
    };

    let requestOptions = {
      method: 'POST',
      body: infosToSend,
      redirect: 'follow'
    };

    sendCorebizProducts(requestOptions);
    setRenderNoRegister(true);
  }

  return (
    renderNoRegister ? (
      <section className=" promotion-section promotion-title">
        <p className="sucess-msg">Seu e-mail foi cadastrado com sucesso!</p>
        <p className="sucess-msg shot-top">A partir de agora você receberá as novidades e ofertas exclusivas.</p>
        <input
          onClick={() => {
            setRenderNoRegister(false)
            setDisabled(true);
            setEmail('');
            setName('');
          }}
          className="promotion-btn btn btn-dark"
          type="button"
          value="Cadastrar novo e-mail"
        />
      </section>
    ) : (
    <section className="promotion-section">
      <h4 className="promotion-title">Participe de nossas news com promoções e novidades!</h4>
      <form className="promotion-form">
        <input onChange={({target}) => handleChangeInput(target)} className="promotion-input" name="name" type="text"placeholder="Digite seu nome"/>
        <input onChange={({target}) => handleChangeInput(target)} className="promotion-input" name="email" type="email"placeholder="Digite seu email"/>
        <input onClick={() => submitForm()} disabled={ disabled } className="promotion-input btn btn-dark" type="button" value="Eu quero!"/>
      </form>
    </section>)
  );
}

export default PromotionForm;
