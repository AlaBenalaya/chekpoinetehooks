import React from 'react'
import {Card } from 'react-bootstrap';
import './MovieCard.css'
import Rating from '../Rating/Rating'
const MovieCard = ({movie}) => {
    return (
        <div>
            <Card className ="movieCard">
  <Card.Img variant="top" className ="movieImg" src={movie.img} />
  <Card.Body>
    <Card.Title className ="movieTitle">{movie.title}</Card.Title>
    <Card.Text>
      <Rating filterRating ={false} movieRating={movie.rating}/>
    </Card.Text>
  
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard

