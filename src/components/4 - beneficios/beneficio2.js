import React from 'react';
import destaque01 from '../../images/carros/up/destaque01.jpg';
  

const Beneficio2 = () => {

    return (
        <section className="benefits">
            <div className="row">
                <div className="col-md-7">
                    <div className="destaque-beneficio">
                        <img src={destaque01} alt="imagem contem o Nacional Veículos" width="100%"/>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="info-destaque info-destaque-circulo">
                        <h1>Segurança</h1>
                        <p className="info-destaque-circulo"><span>Frenagens bruscas? Ele avisa.</span><br/>
                            ESS é o sinal de frenagem de emergência que é acionado quando o pedal de freio for pressionado de forma brusca. O sistema aciona as luzes de alerta como aviso a outros motoristas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Beneficio2;