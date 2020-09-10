import React from 'react';
import './App.css';

class NavBar extends React.Component {
   render () {
       return (
           <nav>
               <ul>
                   <li>Home</li>
                   <li>Sobre</li>
                   <li>Comprar</li>
               </ul>
           </nav>
       )
   }
}

export default NavBar;