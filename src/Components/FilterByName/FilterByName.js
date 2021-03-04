import React from 'react'
import './FilterByName.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
const FilterByName = ({setInputSearch}) => {
    return (
        <div>
                <Form.Control type="text" placeholder="Ajouter movie title"
                className ="inputFilter"
                onChange={(e)=>setInputSearch(e.target.value)}
                />
                

        </div>
    )
}

export default FilterByName
