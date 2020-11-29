import React from 'react';
import destaque03 from '../../images/carros/up/destaque03.jpg';
import detalhe from '../../images/carros/up/detalhe.png';
  

const Beneficio4 = () => {

    return (
        <section className="benefits">
            <div className="row">
                <div className="col-md-9">
                    <div className="destaque-beneficio-3">
                        <img src={destaque03} alt="imagem contem o Nacional Veículos"/>
                    </div>
                     <div className="info-destaque-3">
                        <div>
                        <h1>Interior</h1>
                        </div>
                        <div className="flutuar-esquerda">
                        <p>Para o seu conforto e pensando na praticidade, o up! vem com suporte para celular com entrada USB de série. Assim, suas mãos ficam concentradas onde são mais importantes: no volante.</p>
                        </div>

                        <div className="complemento">
                        <h1>Deixe o up! do seu jeito</h1>
                        <p>O banco do motorista com ajuste de altura foi desenvolvido para que cada um deixe o carro do seu jeito. No banco traseiro, também há novidades: além do ajuste de altura, vem com três apoios de cabeça, para maior conforto e segurança dos passageiros.</p>
                        </div>
                        </div>
                </div>
                <div className="col-md-3 ">
                    <div className="detalhe">
                        <img src={detalhe} alt="imagem contem o Nacional Veículos"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Beneficio4;