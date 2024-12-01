
import "bulma/css/bulma.css";
import React from 'react';
import NavBar from './components/NavBar'; 
import './App.css';
import ImageWithText from './components/ImageWithText';
import cortana from './img/cortana.png';
import alexa from './img/alexa.png';
import siri from './img/siri.png';

function App() 
 { return ( 
     <div className="App">
       <NavBar />
       <div className="container mt-4"> 
         <ImageWithText src={cortana} alt="Cortana" text="hola soy Cortana" />
         <ImageWithText src={alexa} alt="Alexa" text="hola soy Alexa" /> 
         <ImageWithText src={siri} alt="Siri" text="hola soy Siri" /> 
       </div> 
     </div> 

    ); 
 }
 export default App;