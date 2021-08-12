import './App.css';
import BarraFerramentas from './components/layout/BarraFerramentas.js';

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
              
              <img src="#" className=""></img>
              
              <div>
                <p>Escala 10</p>
                <span>10 de agosto de 2021, 11:15 pm</span>
              </div>

            </div>
            
            <img src="" className="img-post"></img>{/*imagem do post*/}
            <p className="texto-post">Acerte a pontuação do Capitão para participar de um sorteio onde teremos 5 escolhidos para...</p>
          <div className="BTN-inf">
              <div className="buttons">
                <p>
                  <a class="like-btn" >
                    <i class="far fa-thumbs-up"></i>
                  </a>
                </p>
                <p> 1mil </p>
              </div>
              <div className="buttons">
                <p> BTN Coments </p>
                <p> 1mil </p>
              </div>
          </div>
          </div>
          
        <div className="section">
          <div className="seguindo">

            <div className="perfil-inf">
              <img src="#" alt="imagem" className="perfil-img"></img>
              <p className="perfil-name"> Nome do usuário </p>
            </div>

            <div className="stars">
              <h1>Seguindo</h1>
              <div className="list-stars">
                <img src="#" className="star-logo" />
                <p className="star-name"> Escala 10</p>
              </div>
              <div className="list-stars">
                <img src="#" className="star-logo" />
                <p className="star-name"> Deu Loop</p>
              </div>
              <div className="list-stars">
                <img src="#" className="star-logo" />
                <p className="star-name"> Nubank</p>
                </div>
            </div>
          </div>
          <p className="sobre-link">Starployee©</p>
          <a href="#" className="sobre-link">Sobre</a>
        </div>
      </div>
    </div>
    
  );
}
export default App;
