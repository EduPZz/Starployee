import logo from './logo.png';
import perfil from '../../img/perfil.png';
import investimento from '../../img/investimento.png';
import organizacao from '../../img/organizacao.png';

import './barraFerramentas.css'


function BarraFerramentas() {
    return (
        <div className="barra-ferramentas">
            <img src={logo} className="logo"></img>     

            <div class="search-box">
                <input class="search-txt" type="text" name="" placeholder="Pesquisar"/>
                <a class="search-btn" href="#">
                    <i class="fas fa-search"></i>
                </a>
            </div>

            <a href="#"> <img src={organizacao} className="b-icon"/> </a>
            <a href="#"> <img src={investimento} className="b-icon"/> </a>
            <a href="#"> <img src={perfil} className="b-icon"/> </a>


        </div>
    );
}
export default BarraFerramentas;