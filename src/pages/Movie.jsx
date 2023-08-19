import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";

import './Movie.css'

const moviesURL = import.meta.env.VITE_API //Forma de importar usando Vite
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {

  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url) //Pega os top filmes da API
    const data = await res.json() //Transforma os dados em JSON
    setMovie(data) //Não precisa do results porque só vem um movie (dá um console.log pra ver)
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(movieUrl)
  }, []) //Array de dependências vazio - só executa quando carrega a página

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }
  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false}/>
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>

          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>

          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
        )}
    
    </div>
  )
}

export default Movie