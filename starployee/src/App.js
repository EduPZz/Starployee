import './App.css'
import { Link } from 'react-router-dom'

import escala from './img/escala.png'
import post from './img/post.png'
import perfil from './img/perfil.png'
import deuloop from './img/deuloop.png'
import nubank from './img/nubank.png'

import BarraFerramentas from './components/layout/BarraFerramentas.jsx'

function App() {
  return (
          /*Barra de ferramentas */
    <div className="App">
      
      <header>
        <BarraFerramentas />
      </header>
      
      {/* post timeline*/}
      <div className="inf">
          
          <div className="post">
           
            <div className="user-profile">{/*foto do perfil*/}
              
              <img src={escala} className="feed-img"></img>
              
              <div>
                <p>Escala 10</p>
                <span>10 de agosto de 2021, 11:15 pm</span>
              </div>

            </div>
            
            <img src={post} className="img-post"></img>{/*imagem do post*/}
            <p className="texto-post">Acerte a pontuação do Capitão para participar de um sorteio onde teremos 5 escolhidos para...</p>
            <div className="BTN-inf">
                <div className="buttons">
                  <p>
                    <a class="like-btn" >
                      <i class="far fa-thumbs-up"></i>
                    </a>
                  </p>
                  <span> 1mil </span>
                </div>
                <div className="buttons">
                  <p>
                    <a class="like-btn" >
                      <i class="far fa-comment"></i>
                    </a>
                  </p>
                  <span> 1mil </span>
                </div>
            </div>
          </div>
          
        <div className="section">
          <div className="seguindo">

            <div className="perfil-inf">
              <img src={perfil} alt="imagem" className="perfil-img"></img>
              <p className="perfil-name"> Nome do usuário </p>
            </div>

            <div className="stars">
              <h1>Seguindo</h1>
              <div className="list-stars">
                <img src={escala} className="star-logo" />
                <p className="star-name"> Escala 10</p>
              </div>
              <div className="list-stars">
                <img src={deuloop} className="star-logo" />
                <p className="star-name"> Deu Loop</p>
              </div>
              <div className="list-stars">
                <img src={nubank} className="star-logo" />
                <p className="star-name"> Nubank</p>
                </div>
            </div>
          </div>
          <p className="sobre-link">Starployee©</p>
          <Link to="/About" className="sobre-link">Sobre</Link>
        </div>
      </div>
    </div>
    
  );
}
export default App;
