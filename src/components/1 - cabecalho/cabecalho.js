import React from 'react';
import logo from '../../images/misc/logo.png';
  

const Cabecalho = () => {

    return (
        <header className="header">
            <div className="header__logo"><img src={logo} alt="imagem contem a logo da Nacional Veículos"/></div>
        </header>
    );
}

export default Cabecalho;
