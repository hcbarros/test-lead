import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import del from '../../images/delete.png';
import edit from '../../images/edit.png';
import loader from '../../images/loader.gif';


const Leads = () => {


    const [showTable, setShowTable] = useState(false);
    const [leads, setLeads] = useState([]);    

    const handleSubmit = async () => {
   
        axios.get("https://test-lead-api.herokuapp.com/test-lead/lead")
             .then((response) => {
         
                 setLeads(response.data);
                 setShowTable(true);
              })
             .catch((error) =>  {
             
                 alert(error)}
             )                             
    }

    handleSubmit();


        return (        

            <div>

                <div id={!showTable ? 'loader-leads' : 'img-hide'}>
                    <img src={loader} className="img-loader" alt="loader"></img>
                </div>     

                <div id="container-table">

                    <div>

                    {showTable && 
                        <table className="tableLeads">
                            <caption>Leads</caption>                    
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
                                    <td className="tableLeads">${item.email}</td>
                                    <td className="tableLeads">{item.telefone}</td>
                                    <td className="tableLeads">{item.criadoEm}</td>
                                    <td className="tableLeads">{item.atualizadoEm}</td>
                                    <td className="tableLeads">
                                        <a>
                                            <img className="imgLeads" src={edit} alt="Imagem de editar"/>
                                        </a>
                                    </td>
                                    <td className="tableLeads">
                                        <a>
                                            <img className="imgLeads" src={del} alt="Imagem da lixeira"/>
                                        </a>
                                    </td>                             
                                </tr>
                                ))}                                                   

                            {/* <button
                                    type="button"
                                    onClick={() => handleSubmit()}                        
                                    >
                                    Telefone
                                    </button>         */}

                        </table>}

                        </div>    

                    </div>
                                
            </div>
        );    
}

export default Leads;