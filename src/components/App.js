import React, { Component } from 'react';

import Cabecalho from './1 - cabecalho/cabecalho';
import Destaque from './2 - destaque/destaque';
import Form from './3 - form/form';
import Beneficio1 from './4 - beneficios/beneficio1';
import Beneficio2 from './4 - beneficios/beneficio2';
import Beneficio3 from './4 - beneficios/beneficio3';
import Beneficio4 from './4 - beneficios/beneficio4';
import Map from './5 - rodape/map';
import Footer from './5 - rodape/footer';

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
