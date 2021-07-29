// import React, { useContext, useState } from 'react';
// import UserContext from '../context/UserContext';
import '../style/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div >
        <h4 className="infos-header">Localização</h4>
        <p className="contact-infos">Avenida Andrômeda, 2000. Bloco 6 e 8</p>
        <p className="contact-infos">Alphavile SP</p>
        <p className="contact-infos">brasil@corebiz.ag</p>
        <p className="contact-infos"> +55 11 3090 1039</p>
      </div>
      <div className="contact-btns">
        <input
          className="footer-btn btn btn-light"
          type="button"
          value="Entrar em contato"
        />
        <input
          className="footer-btn btn btn-light"
          type="button"
          value="Fale com o nosso consultor online"
        />
      </div>
      <div className="logos">
        <div className="logo">
          <p className="contact-infos by">created by</p>
          <img alt="Logo corebiz" src="https://www.corebiz.ag/wp-content/uploads/2020/06/logo-corebiz-global.svg"/>
        </div>
        <div className="logo">
        <p className="contact-infos by">Powered by</p>
          <img alt="Logo Vtex" src="https://vtex.com/wp-content/themes/VTEXTheme/assets/imgs/base/logo-vtex.svg"/>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
