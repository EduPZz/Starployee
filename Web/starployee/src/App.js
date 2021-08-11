import './App.css';

function App() {
  return (

          /*Barra de ferramentas */

    <div className="App">
      <header className="barra-ferramentas">

        <img src="./logo.png" className="logo"></img>     
      
        <div class="search-box">
          <input class="search-txt" type="text" name="" placeholder="Pesquisar"/>
          <a class="search-btn" href="#">
              <i class="fas fa-search"></i>
          </a>
        </div>
     
        <a href="#"> criar organização </a>
        <a href="#"> investir </a>
        <a href="#"> perfil </a>

      </header>
      
{/* post timeline*/}


        <div className="post">
          <div class="user-profile">{/*foto do perfil*/}
            <img src="#" alt=""></img>
            <div>
              <p>Escala 10</p>
              <span>10 de agosto de 2021, 11:15 pm</span>
            </div>
          </div>
          <img src="" class="img-post"></img>{/*imagem do post*/}
          <p class="texto-post">Acerte a pontuação do Capitão para participar de um sorteio onde teremos 5 escolhidos para...</p>
        
        <div className="butons">
          <p> BTN likes</p>
          <p> num </p>
          <p> BTN Coments </p>
          <p> num </p>
        </div>
      
      </div>
      <div className="section">
        <div className="seguindo">

          <div className="perfil-inf">
            <img src="#" className="perfil-img"></img>
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
        <a href="#" className="sobre-link">Starployee©</a>
        <br/>
        <a href="#" className="sobre-link">Sobre</a>
      </div>
    </div>
    
  );
}
export default App;
