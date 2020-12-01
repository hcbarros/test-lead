import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import logo from '../../images/misc/logo.png';
import whatsapp from '../../images/svg/whatsapp.svg';  
import loader from '../../images/loader.gif';


export default class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {          
            showResults: false,
            imgShow: false,
            redirect: false
        }       

        this.formNome = React.createRef();
        this.formEmail = React.createRef();
        this.formPhone = React.createRef();
    
        this.clickBtn = this.clickBtn.bind(this);
    }
   
    clickBtn = () => {
        const result = this.state.showResults;
        this.setState({showResults:!result})    
    }    

        
    handleSubmit = async (event) => {
        event.preventDefault();

        if(!/\S/.test(this.formNome.current.value)) {
            alert("O nome deve conter algum valor!")
            return;
        }

        if(this.formPhone.current.value.length < 14) {
            alert("Informe um telefone no formato correto!")
            return;
        }

        if(this.formNome.current.value.length > 100 || this.formEmail.current.value.length > 100) {
            alert("Nome e email devem possuir menos de 100 caracteres!")
            return;
        }

        const filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if(!filter.test(this.formEmail.current.value)) {
            alert("Informe um email válido!");     
            return;
        }    


       this.setState({imgShow: true}); 
              
       axios.post("https://test-lead-api.herokuapp.com/lead", 
                {nome: this.formNome.current.value,
                 email: this.formEmail.current.value,
                 telefone: this.formPhone.current.value}   
             )
            .then((response) => {
                
                this.setState({imgShow: false, redirect: true});                
             })
            .catch((error) =>  {
            
                this.setState({imgShow: false});
                alert("Erro no servidor!");
            });                             
     }

         
    render() {
        
        return (        

            <div>

            {this.state.redirect && <Redirect to='/leads'/>}

            <footer className="footer">
                <div className="footer__logo"><img src={logo} alt="imagem contem a logo da Nacional"/></div>
                <div className="footer__copy">Todos os direitos reservados, 2018.</div>
                <ul className="footer__social">
                    <li className="item">
                        <a href="https://www.facebook.com/NacionalVW/" target="_blank">
                            <svg className="icon">
                                <use xlinkHref="../../images/svg/svg.svg#face"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
                <a href="tel:20210000" className="footer__phone">
                    <svg className="icon--phone">
                        <use xlinkHref="images/svg/svg.svg#phone"></use>
                    </svg> <span className="number">(84) 2021-0000</span>
                    <svg className="icon--arrow">
                        <use xlinkHref="../../images/svg/svg.svg#arrow"></use>
                    </svg>
                </a>

                <a className="btn-whatsapp whatsapp-flat-button" onClick={this.clickBtn}>
                    <img src={whatsapp} alt="whatsapp logo"></img>
                </a>            

            </footer>
            
            <div className="container-fluid" id={this.state.showResults ? 'modal-show' : 'modal-hide'} >
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="modal-whatsapp-wrapper">
                            <div className="modal-header">
                                <h3>Deixe uma mensagem pelo<br/><span>Whatsapp</span></h3>
                                <div id="modal-close" onClick={this.clickBtn} >&times;</div>
                            </div>
                            <div className="modal-body">
                                <form id="form-whatsapp" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input placeholder="Nome" maxLength="100" className="form-control required" ref={this.formNome} type="text" name="name" id="nome"/>
                                    </div>
                                    <div class="form-group">
                                        <input placeholder="E-mail" maxLength="100" className="form-control required" ref={this.formEmail} type="email" name="email" id="email"/>
                                    </div>
                                    <div class="form-group">
                                        <input placeholder="Telefone" maxLength="15" className="form-control telefone required" ref={this.formPhone} type="tel" name="phone" id="telefone"/>
                                    </div>
                                    <button id="send" style={{visibility: this.state.imgShow ? 'hidden' : 'visible'}}>Enviar</button>                                    
                                </form>                                                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id={this.state.imgShow ? 'img-show' : 'img-hide'}>
                <img src={loader} alt="loader"></img>
            </div>

            </div>

        );
    }
}

