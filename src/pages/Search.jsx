import { useSearchParams } from 'react-router-dom';
import './Filmegrid.css';
import { useEffect, useState } from 'react';
import Cardfilme from '../componentes/cardfilme';
const procuraurl = process.env.REACT_APP_SEARCH;
const apikey = process.env.REACT_APP_API_KEY;


export default function Search() {
  const [buscaparams]= useSearchParams();
  const [filmes,setFilmes] =useState([]);
  const query = buscaparams.get("q");
  
  const filmespesquisados = async (url) =>{
    const res = await fetch(url);
    const data = await res.json();

    setFilmes(data.results);
  };

  useEffect(() => {

    const buscaqueryurl = `${procuraurl}?${apikey}&query=${query}`;
    filmespesquisados(buscaqueryurl);

  },[query]) ;


  
  return (
   
    <div className="container">
     <h2 className="title">Esta procurando por:<span className="query-text">{query}</span> </h2>
     <div className="filmes-container">
     {filmes.length > 0 && filmes.map((movie) => <Cardfilme key ={movie.id} movie={movie} />)}
      </div>       
    </div>
  )
}
