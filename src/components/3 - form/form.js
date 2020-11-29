import React from 'react';
  

const Form = () => {

    return (
        <div className="proposal">
            <form method="post" className="form" id="form">
                <fieldset className="row">
                    <legend className="legend">Preencha o formulário e <strong>ganhe condições exclusivas</strong></legend>
                    <div className="col-sm-4 col-md-12">
                        <label className="label" for="nome">Nome</label>
                        <input type="text" name="name" id="nome" className="form-control required"/>
                    </div>
                    <div className="col-sm-4 col-md-12">
                        <label className="label" for="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control required"/>
                    </div>
                    <div className="col-sm-4 col-md-12">
                        <label className="label" for="telefone">Telefone</label>
                        <input type="tel" name="phone" id="telefone" minlength="14" className="form-control telefone required"/>
                    </div>
                    <input type="hidden" name="modelo" value="Up!"/>
                    <input type="hidden" name="cidade" value="Natal"/>
                    <input type="hidden" name="product_id" value="1" id="product"/>
                    <div className="col-sm-12 col-md-12">
                        <button type="button" className="btn btn-register">Enviar</button>
                    </div>
                </fieldset>
            </form>
            <div className="phone"><span className="phone__caption">OU LIGUE AGORA E SAIBA TUDO SOBRE O UP!</span> <a href="tel:00000000" className="phone__number">(84) 2021-0000</a></div>
        </div>
    );
}

export default Form;
