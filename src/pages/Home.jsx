import { useState,useEffect } from "react";
import Cardfilme from "../componentes/cardfilme";

const filmesurl = process.env.REACT_APP_API;
const apikey = process.env.REACT_APP_API_KEY;



export default function Home() {
  const [melhorFilmes, setmelhorFilmes] = useState([]);

  const pegarmelhoresfilmes = async (url) =>{
    const res = await fetch(url);
    const data = await res.json();

    setmelhorFilmes(data.results);
  };

  useEffect(() => {

    const melhorurl = `${filmesurl}top_rated?${apikey}`;

    console.log(melhorurl);
    pegarmelhoresfilmes(melhorurl);

  }, []) ;

  return (
    <div className="container">
     <h2 className="title">Filmes melhores avaliados: </h2>
     <div className="filmes-container">
     {melhorFilmes.length > 0 && melhorFilmes.map((movie) => <Cardfilme key ={movie.id} movie={movie} />)}
      </div>       
    </div>
  )
    
  
}
