import React from "react"
import './barraFerramentas.css'
import { Link } from 'react-router-dom'

import logo from './logo.png'
import perfil from '../../img/perfil.png'
import investimento from '../../img/investimento.png'
import organizacao from '../../img/organizacao.png'

function BarraFerramentas() {
    return (
        <div className="barra-ferramentas">
            <img src="{logo}" className="logo"> </img>     

            <div class="search-box">
                <input class="search-txt" type="text" name="" placeholder="Pesquisar"/>
                <a class="search-btn" href="#">
                    <i class="fas fa-search"></i>
                </a>
            </div>

             <img src={organizacao} className="b-icon"/> 
             <img src={investimento} className="b-icon"/> 
             <img src={perfil} className="b-icon"/> 


        </div>
    )
}
export default BarraFerramentas;