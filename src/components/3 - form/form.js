import React, {useState, useRef} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import loader from '../../images/loader.gif';

const Form = () => {

    const [redirect, setRedirect] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [imgShow, setImgShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const nome = useRef(null);
    const email = useRef(null);
    const telefone = useRef(null);
    

    const handleSubmit = async (event) => {
        event.preventDefault();

       setImgShow(true); 
              
       axios.post("https://test-lead-api.herokuapp.com/lead", 
                {nome: nome.current.value,
                 email: email.current.value,
                 telefone: telefone.current.value}   
             )
            .then((response) => {
                
                setRedirect(true);
                setImgShow(false);                
             })
            .catch((error) =>  {
            
                setImgShow(false);
                alert("Erro no servidor!");
            });                             
     }


    return (
        <div className="proposal">
            <form onSubmit={handleSubmit} className="form" id="form">
                <fieldset className="row">
                    <legend className="legend">Preencha o formulário e <strong>ganhe condições exclusivas</strong></legend>
                    <div className="col-sm-4 col-md-12">
                        <label className="label" for="nome">Nome</label>
                        <input type="text" ref={nome} name="name" id="nome" className="form-control required"/>
                    </div>
                    <div className="col-sm-4 col-md-12">
                        <label className="label" for="email">Email</label>
                        <input type="email" ref={email} name="email" id="email" className="form-control required"/>
                    </div>
                    <div className="col-sm-4 col-md-12">
                        <label className="label" for="telefone">Telefone</label>
                        <input type="tel" ref={telefone} name="phone" id="telefone" minlength="14" className="form-control telefone required"/>
                    </div>
                    <input type="hidden" name="modelo" value="Up!"/>
                    <input type="hidden" name="cidade" value="Natal"/>
                    <input type="hidden" name="product_id" value="1" id="product"/>
                    <div className="col-sm-12 col-md-12">
                        <button style={{visibility: imgShow ? 'hidden' : 'visible'}} className="btn btn-register">Enviar</button>
                        <div id={imgShow ? 'img-show' : 'img-hide'}>
                            <img src={loader} alt="loader"></img>
                        </div>

                    </div>
                </fieldset>
            </form>

            {redirect && <Redirect to='/leads'/>}

            <div className="phone"><span className="phone__caption">OU LIGUE AGORA E SAIBA TUDO SOBRE O UP!</span> <a href="tel:00000000" className="phone__number">(84) 2021-0000</a></div>
        </div>
    );
}

export default Form;
