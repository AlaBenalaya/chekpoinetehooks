import React,{useState} from 'react'
import FilterByName from './FilterByName/FilterByName'
import Footer from './Footer/Footer'
import Rating from './Rating/Rating'
import { moviesData } from './MoviesData'
import MovieListe from './MovieListe/MovieListe'
const MovieApp = ()=> {
    const [movies,setMovies] = useState(moviesData)
    const [inputSearch,setInputSearch] = useState("")
    const [rating,setRating] = useState(1)
    return (
        <div>
            <div>
            <Rating filterRating = {true} rating={rating}setRating={setRating}/>
            <FilterByName setInputSearch={setInputSearch}/>
            
        </div>
        <MovieListe movies={movies} inputSearch={inputSearch} rating={rating}/>
            <Footer/>
        </div>
    )
}

export default MovieApp
