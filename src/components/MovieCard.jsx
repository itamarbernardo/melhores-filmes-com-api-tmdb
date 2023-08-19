import { Link } from "react-router-dom"
import { FaStar } from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG  //URL da API para buscar imagens no .env

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movie-card">
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>} {/* No CSS estilizamos com a tag "a", pois o Link no HTML se transforma em "a"*/}
    </div>
  )
}

export default MovieCard