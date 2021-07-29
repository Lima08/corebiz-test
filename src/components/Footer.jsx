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
      <div>
        <input tibe="button" value="Entrar em contato" />
        <input tibe="button" value="Fale com o nosso consultor online" />
      </div>
      <div>
        <img alt="Logo corebiz" />
        <img alt="Logo Vtex" />
      </div>
    </footer>
  );
}

export default Footer;
