import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import pin from '../../images/misc/pin.png'


const Location1 = () => <img src={pin} />
const Location2 = () => <img src={pin} />

const Map = () => {

      
        return (
            <section className="location">
                <div className="location__overlay">
                    <div className="location__address">
                        <h2 className="head head--size">ENCONTRE A NACIONAL MAIS PRÓXIMA DE VOCÊ</h2>
                        <ul className="location__nav">
                            <li className="location__link" data-latitude="-3.7453358" data-longitude="-38.543054">Av. João Pessoa, 3461</li>
                            <li className="location__link" data-latitude="-3.761512" data-longitude="-38.4935142">Av. Rogaciano Leite, 333 - Salinas</li>
                        </ul>
                    </div>
                </div>

                <div className="location__maps" id="mapa" >

                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyD53P6HzQvzMs9vVJgBi79xQsxa5g3YTUU' }}
                        defaultCenter={{lat:-3.7620259,lng:-38.5189737}}
                        defaultZoom={11}                      
                    >                    
                    <Location1
                        lat={-3.7453358}
                        lng={-38.543054}
                        
                    />  
                    <Location2
                        lat={-3.761512}
                        lng={-38.4935142}
                        zoom={18}
                    />

                    </GoogleMapReact>

                </div>                
            </section>
                      
        );    
}
     
export default Map;