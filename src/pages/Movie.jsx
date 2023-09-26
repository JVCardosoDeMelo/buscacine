import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import Cardfilme from "../componentes/cardfilme";
import "./filme.css";
const filmesurl = process.env.REACT_APP_API;
const apikey = process.env.REACT_APP_API_KEY;


export default function Movie() {
  const {id} = useParams();
  const[filme,setFilme] = useState(null);

  const pegafilme = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setFilme(data);
  }
  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const filmeurl = `${filmesurl}${id}?${apikey}`;
    pegafilme(filmeurl);
  } , [])
  return (
    <div className="filme-page">
      {filme && <>
    <Cardfilme movie={filme} showLink={false} />
    <p className="tagline">{filme.tagline}</p>
    <div className="info">
      <h3>
        <BsWallet2/>Orçamento:
      </h3>
      <p>{formatCurrency(filme.budget)}</p>
    </div>
    <div className="info">
      <h3>
        <BsGraphUp/>Bilheteria:
      </h3>
      <p>{formatCurrency(filme.revenue)}</p>
    </div>
    <div className="info">
      <h3>
        <BsHourglassSplit/>Duração:
      </h3>
      <p>{filme.runtime} minutos </p>
    </div>
    <div className="info sinopse">
      <h3>
        <BsFillFileEarmarkTextFill/>Sinopse:
      </h3>
      <p>{filme.overview}</p>
    </div>
    </>}</div>
  )
}
