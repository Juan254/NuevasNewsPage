import logo from './logo.svg';
import './App.css';
import React from "react";
import { Link, Route, Switch} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Home = () => (
  <div className="container">
    <h3>Bieenvenido</h3>
    <div className="row">
      <div className="col-4">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum tempora cupiditate similique facilis neque illum reiciendis? Quis, cupiditate iure possimus reprehenderit alias praesentium voluptatem optio temporibus minima quae quasi velit.</p>
      </div>
      <div className="col-4">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum tempora cupiditate similique facilis neque illum reiciendis? Quis, cupiditate iure possimus reprehenderit alias praesentium voluptatem optio temporibus minima quae quasi velit.</p>
      </div>
      <div className="col-4">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum tempora cupiditate similique facilis neque illum reiciendis? Quis, cupiditate iure possimus reprehenderit alias praesentium voluptatem optio temporibus minima quae quasi velit.</p>
      </div>
    </div>
  </div>
 );
 const AboutUs = () => (
<div className="container">
    <h3>Acerca de nosotros</h3>
    <div className="row">
      <div className="col-4">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum tempora cupiditate similique facilis neque illum reiciendis? Quis, cupiditate iure possimus reprehenderit alias praesentium voluptatem optio temporibus minima quae quasi velit.</p>
      </div>
      <div className="col-4">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum tempora cupiditate similique facilis neque illum reiciendis? Quis, cupiditate iure possimus reprehenderit alias praesentium voluptatem optio temporibus minima quae quasi velit.</p>
      </div>
      <div className="col-4">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum tempora cupiditate similique facilis neque illum reiciendis? Quis, cupiditate iure possimus reprehenderit alias praesentium voluptatem optio temporibus minima quae quasi velit.</p>
      </div>
    </div>
  </div>
 );
 const AdvancedSearch = () => (
  <div className="container">
    <h3>Búsqueda Avanzada</h3>
    <div className="row">
      <div className="col-4">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum tempora cupiditate similique facilis neque illum reiciendis? Quis, cupiditate iure possimus reprehenderit alias praesentium voluptatem optio temporibus minima quae quasi velit.</p>
      </div>
      <div className="col-4">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum tempora cupiditate similique facilis neque illum reiciendis? Quis, cupiditate iure possimus reprehenderit alias praesentium voluptatem optio temporibus minima quae quasi velit.</p>
      </div>
      <div className="col-4">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum tempora cupiditate similique facilis neque illum reiciendis? Quis, cupiditate iure possimus reprehenderit alias praesentium voluptatem optio temporibus minima quae quasi velit.</p>
      </div>
    </div>
  </div>
 );

 export default function App() {
  return (
    <div  className="App">
      <div>
          {/* componente usuario */}
          <div id="logo" className="row">
            <div className="col-9"></div>
            <div className="col-2 float-right">
              <p className="nombre-user"> bienvenido, (Nombre de usuario)</p>
            </div>
            <div className="col">
              <FontAwesomeIcon className="user-icon" icon={faUser} />
            </div>
          </div>
       
        <nav className="nav-home">  
        
          <ul className="nav nav-pills">
          <div className="col-6">
              <h3 id="title" className="">Nuevas News</h3>
            </div>
              <li className="flex-sm-fill text-sm-center nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="flex-sm-fill text-sm-center nav-item">
                <Link className="nav-link" to="/aboutUs">Sobre nosotros</Link>
              </li > 
              <li className="flex-sm-fill text-sm-center nav-item">
                <Link className="nav-link" to="/advancedSearch">Búsqueda Avanzada</Link>
              </li>
          </ul>
        </nav>

        <Route path="/Home"><Home /></Route>
        <Route path="/aboutUs"><AboutUs /></Route>
        <Route path="/advancedSearch"><AdvancedSearch /></Route>
      </div>

    </div>
  );
}
;
