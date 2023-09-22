import { Link } from "react-router-dom";
import {BiMoviePlay , BiSearchAlt} from "react-icons/bi";


export default function Navbar() {
  return (
    <nav id="navbar">
    <h2>
     <Link to="/">
        <BiMoviePlay/>
        Filmes
        </Link>
    </h2>
     <form>
        <input type="text" placeholder="Procure por um filme"/>
        <button>
            <BiSearchAlt/>
        </button>

        
     </form>
 </nav>
  )
}
