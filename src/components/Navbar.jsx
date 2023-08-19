import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import './Navbar.css'

const Navbar = () => {
  
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if(!search){
      return //Se não tiver nada no search (lenth == 0), não faço nada
    }

     //Se tiver algo no search
     navigate(`/search?q=${search}`)
     setSearch("")
  }

  return (
    <nav id='navbar'>
        <h2>
        <Link to='/' ><BiCameraMovie/>Melhores Filmes</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder='Busque um filme...' 
              onChange={(event) => setSearch(event.target.value)}
              value={search} /> {/* Colocar o value como search vai nos ajudar a limpar o Input depois */}
            <button type='submit'><BiSearchAlt2/></button>
        </form>
    </nav>
  )
}

export default Navbar