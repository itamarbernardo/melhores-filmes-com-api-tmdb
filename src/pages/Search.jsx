import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import './MoviesGrid.css'

const Search = () => {

  const [movies, setMovies] = useState([])

  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')

  const getSearchedMovies = async (url) => {
    const res = await fetch(url) //Pega os top filmes da API

    const data = await res.json() //Transforma os dados em JSON
    
    setMovies(data.results)

  }

  useEffect(() => {
      const moviesSearchUrl = `${searchUrl}?${apiKey}&query=${query}`

      getSearchedMovies(moviesSearchUrl)
  }, [query]) //Toda vez que o query mudar, ele executa novamente

  console.log(movies)

  return (
    <div className="container">
    <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
    <div className="movies-container">
      {movies.length == 0 && <p>Carregando...</p>}
      {movies.length > 0 &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie}/> )}
    </div>
  </div>
  )
}

export default Search