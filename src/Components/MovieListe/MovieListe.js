import React from 'react'
import './MovieListe.css'

import MovieCard from '../MovieCard/MovieCard'
const MovieListe = ({movies,inputSearch,rating}) => {
    return (
        <div className ="movieList">
            {movies
            .filter(movie => 
                movie.title.toLowerCase().includes(inputSearch.toLowerCase())
                &&
                movie.rating >=rating
                
            )
            
            .map(movie =>
                <MovieCard movie={movie} key ={movie.id}/>
                )}
        </div>
    )
}

export default MovieListe
