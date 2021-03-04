import './Rating.css'
import React from 'react'
import { Rate } from 'antd'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rating = ({filterRating,MovieRating,setRating,rating}) => {

 
 const handleChange = value => {
    setRating( value );
  };

  
    return (
      
      <div>
        {filterRating ?
         <span>
         <Rate tooltips={desc} onChange={handleChange} value={rating} />
       </span>
       :
       <span>
         <Rate disabled value={MovieRating} />
       </span>
        }
        

      </div>
        
    );
  }


export default Rating