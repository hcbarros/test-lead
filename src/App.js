import React, { Component } from 'react';

import Cabecalho from './components/1 - cabecalho/cabecalho';
import Destaque from './components/2 - destaque/destaque';
import Form from './components/3 - form/form';
import Beneficio1 from './components/4 - beneficios/beneficio1';
import Beneficio2 from './components/4 - beneficios/beneficio2';
import Beneficio3 from './components/4 - beneficios/beneficio3';
import Beneficio4 from './components/4 - beneficios/beneficio4';
import Map from './components/rodape/map';
import Footer from './components/rodape/footer';


class App extends Component {
  
  
  render() {        
   
   
    return (
      
      <div>

        <Cabecalho/>
        <Destaque/>
        <Form/>
        <Beneficio1/>
        <Beneficio2/>
        <Beneficio3/>
        <Beneficio4/>
        <Map/>
        <Footer/>        

      </div>
    );
  }
}

export default App;
