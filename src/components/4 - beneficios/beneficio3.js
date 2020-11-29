import React from 'react';
import destaque02 from '../../images/carros/up/destaque02.jpg';
  

const Beneficio3 = () => {

    return (
        <section className="benefits">
            <div className="row">
                <div className="col-md-4">
                    <div className="destaque-beneficio-2">
                        <img src={destaque02} alt="imagem contem o Nacional Veículos" width="100%"/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="info-destaque-2">
                        <h1>Segurança para toda família</h1>
                        <p>O novo up! possui dois airbags frontais que inflam imediatamente em caso de colisão.  O modelo ainda conta com um sistema ABS/EBD que impede o travamento total das rodas nas frenagens e distribui eletronicamente a força empregada pelos freios. Assim, ele evita derrapagens e oferece mais confiança ao motorista.</p>
                    </div>
                </div>
                <div className="col-lg-4 flutuar">
                    <div className="destaque-beneficio-redondo col-sm-12 col-md-5 col-lg-12">
                        <img src={destaque02} alt="imagem contem o Nacional Veículos"/>
                    </div>
                    <div className="info-destaque-2 central col-sm-12 col-md-6 col-lg-12">
                        <h1>Farol de Neblina</h1>
                        <p>Pensando na sua segurança, o farol de neblina amplia a área iluminada quando o carro está em velocidade igual ou inferior a 40 km/h. Ele é acionado automaticamente durante uma conversão.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Beneficio3;