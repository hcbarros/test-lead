import React from 'react';
import detalhe02 from '../../images/carros/up/detalhe02.png';
  

const Beneficio1 = () => {

    return (
        <section className="benefits">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="beneficio-circulo">
                        <h1>Tecnologia</h1>
                        <p>O compacto mais moderno da categoria</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 bg-beneficio backGroundDetalhe01">
                    
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="col-lg-12 col-md-6 box-azul">
                        <h1>INFOTRIP<br/>Computador de Bordo</h1>
                        <p>Pensando em sempre melhorar sua experiência, o I-System (opcional) concentra informações de rádio, status do telefone e todos os dados do computador de bordo. Já este último avisa sobre consumo de combustível, quilômetros rodados e muito mais. </p>
                    </div>
                    <div className="col-lg-12 col-md-6">
                        <div className="col-sm-6 col-md-12 col-lg-6">
                            <img src={detalhe02} alt="imagem contem a logo da Nacional Veículos" width="100%"/>
                        </div>
                        <div className="col-sm-6 col-md-12 col-lg-6 box-detalhe">
                            <h1>Sistema de som "Composition Phone"</h1>
                            <p>Com tela colorida de 5”, o sistema “Composition Phone” permite conectar celular, carro e rádio após instalação do aplicativo “maps + more” (gratuito para Android e iOS). Além disso, conta com entrada auxiliar e SD-Card.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Beneficio1;