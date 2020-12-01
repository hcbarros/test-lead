import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import del from '../../images/delete.png';
import edit from '../../images/edit.png';
import loader from '../../images/loader.gif';
import jogga from '../../images/svg/jogga-amarelo.svg';


const Leads = () => {


    const [redirect, setRedirect] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [imgShow, setImgShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [leads, setLeads] = useState([]);    
    const nome = useRef(null);
    const email = useRef(null);
    const telefone = useRef(null);
    const id = useRef(null);


    const handleSubmit = async (event) => {
        event.preventDefault();


        if(!/\S/.test(nome.current.value)) {
            alert("O nome deve conter algum valor!")
            return;
        }

        if(telefone.current.value.length < 14) {
            alert("Informe um telefone no formato correto!")
            return;
        }

        if(email.current.value.length > 100 || nome.current.value.length > 100) {
            alert("Nome e email devem possuir menos de 100 caracteres!")
            return;
        }

        const filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if(!filter.test(email.current.value)) {
            alert("Informe um email válido!");     
            return;
        }    

       
       setImgShow(true); 
              
       await axios.put("https://test-lead-api.herokuapp.com/lead/"+id.current.value, 
                        {nome: nome.current.value,
                        email: email.current.value,
                        telefone: telefone.current.value}   
                      )
                  .then(resp => carregarDados())
                  .catch(error =>  alert(error));                                 
    }


    const alterar = ({item}) => {

        nome.current.value = item.nome;
        email.current.value = item.email;
        telefone.current.value = item.telefone;
        id.current.value = item.id;
        setShowModal(true);
    }


    const excluir = async (id) => {
   
        setShowTable(false);
        
           await axios.delete(`https://test-lead-api.herokuapp.com/lead/${id}`)

                      .then(resp => carregarDados())
                      .catch(error =>  alert(error));                          
    }


    const carregarDados = () => {

        axios.get("https://test-lead-api.herokuapp.com/lead")
             .then((response) => {
         
                 setLeads(response.data);
                 setShowTable(true);
                 setImgShow(false);
                 setShowModal(false);    
              })
             .catch(error =>  alert(error));                                         
    }

    const getData = (d) => {        
        return new Date(new Date(d[0], d[1]-1, d[2], d[3], d[4], d[5]).getTime() - 10800000)
        .toLocaleString();         
    }


    useEffect(() => carregarDados(), []);


        return (        

            <div>

                {redirect && <Redirect to='/'/>}

                <div id={!showTable ? 'loader-leads' : 'img-hide'}>
                    <img src={loader} className="img-loader" alt="loader"/>
                </div>     

                <div id="headerLeads">
                    <a href="https://www.jogga.com.br"><img src={jogga} alt="logo da Jogga"/></a>
                  
                    <button onClick={() => setRedirect(true)}>Voltar</button>
                </div>

                <div id="container-table">                   

                    {showTable && 
                        <table className="tableLeads">

                            <caption id="caption">Leads</caption>      
                                          
                                <tr className="tableLeads">
                                    <th className="tableLeads">Id</th>
                                    <th className="tableLeads">Nome</th>
                                    <th className="tableLeads">Email</th>
                                    <th className="tableLeads">Telefone</th> 
                                    <th className="tableLeads">Criado em</th>
                                    <th className="tableLeads">Alterado em</th>
                                    <th className="tableLeads"></th> 
                                    <th className="tableLeads"></th>                   
                                </tr>                    
                            
                                {leads.map((item) => (
                                <tr key={item.id} className="tableLeads">
                                    <td className="tableLeads">{item.id}</td>
                                    <td className="tableLeads">{item.nome}</td>
                                    <td className="tableLeads">{item.email}</td>
                                    <td className="tableLeads">{item.telefone}</td>
                                    <td className="tableLeads">
                                        {getData(item.criadoEm)}
                                    </td>
                                    <td className="tableLeads">
                                        {item.atualizadoEm != null ? getData(item.atualizadoEm) : null}
                                    </td>
                                    <td className="tableLeads">
                                        <a onClick={() => alterar({item})}>
                                            <img className="imgLeads" src={edit} alt="Imagem de editar"/>
                                        </a>
                                    </td>
                                    <td className="tableLeads">
                                        <a onClick={() => excluir(item.id)}>
                                            <img className="imgLeads" src={del} alt="Imagem da lixeira"/>
                                        </a>
                                    </td>                             
                                </tr>
                                ))}            

                        </table>}                                   

                   </div>

                   <div className="container-fluid" id={showModal ? 'modal-show' : 'modal-hide'} >
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <div className="modal-whatsapp-wrapper">
                                    <div className="modal-header">
                                        <h3>Alterar dados<br/><span>Formulário</span></h3>
                                        <div id="modal-close" onClick={() => setShowModal(false)} >&times;</div>
                                    </div>
                                    <div className="modal-body">
                                        <form id="form-whatsapp" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input placeholder="Nome" maxLength="100" className="form-control required" ref={nome} type="text" name="name" id="nome"/>
                                            </div>
                                            <div class="form-group">
                                                <input placeholder="E-mail" maxLength="100" className="form-control required" ref={email} type="email" name="email" id="email"/>
                                            </div>
                                            <div class="form-group">
                                                <input placeholder="Telefone" maxLength="15" className="form-control telefone required" ref={telefone} type="tel" name="phone" id="telefone"/>
                                            </div>

                                            <input ref={id} type="hidden" name="id" id="id"/>

                                            <button id="send" style={{visibility: imgShow ? 'hidden' : 'visible'}}>Enviar</button>                                    
                                        </form>                                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id={imgShow ? 'img-show' : 'img-hide'}>
                        <img src={loader} alt="loader"></img>
                    </div>
                                
            </div>
        );    
}

export default Leads;