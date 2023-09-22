import {AiTwotoneStar} from "react-icons/ai";
import { Link } from "react-router-dom";

const imagemurl = process.env.REACT_APP_IMG;

export default function Cardfilme({movie , showLink = true})  {
  return (
    <div className="filmecard">
        <img src={imagemurl + movie.poster_path} alt ={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <AiTwotoneStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Informações</Link>}
    </div>
  )
}
