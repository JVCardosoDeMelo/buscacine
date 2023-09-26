import { Link, useNavigate } from "react-router-dom";
import {BiMoviePlay , BiSearchAlt} from "react-icons/bi";
import './navbar.css'
import { useState } from "react";


export default function Navbar() {
  const [busca,setBusca] =useState("");
  const navegar = useNavigate();

  const submit = (evento) =>{
    evento.preventDefault();
    if(!busca) return;

    navegar(`/search?q=${busca}`,
    {replace: true});
    setBusca("");
   
  }
  return (
    <nav id="navbar">
    <h2>
     <Link to="/">
        <BiMoviePlay/>
        Filmes
        </Link>
    </h2>
     <form onSubmit={submit}>
        <input type="text"
         placeholder="Procure por um filme" 
        onChange={(e) => setBusca(e.target.value)}
        value={busca}/>
        <button>
            <BiSearchAlt/>
        </button>

        
     </form>
 </nav>
  )
}
