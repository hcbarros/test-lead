import React from 'react';
import banner from '../../images/carros/up/banner.png';
  

const Destaque = () => {

    return (
        <section className="featured">
            <div>
                <h1 className="featured__head"><span>UP!</span><br/>Feito de novas ideias. <small></small></h1>
            </div>
            <header className="featured__heading">
                <figure className="featured__img"><img src={banner} alt="Imagem contem a foto de um UP"/></figure>
            </header>
            <div className="featured__img-back circles" ></div>
        </section>
    );
}

export default Destaque;
