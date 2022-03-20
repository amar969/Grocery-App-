import React from 'react'
import { GroceryInput } from './GroceryInput'
import { GroceryList } from './GroceryList'
import {v4 as uuid} from "uuid"

function Grocery(){

    const [data, setData] = React.useState([]);

    const handleAdd = (title) => {
        const payload = {
            title,
            status: false,
            id: uuid()
        }
        setData([...data, payload])
    }

    const handleDelete = (id) => {
        const updatedData = data.filter((item) => item.id !== id)
        setData(updatedData)
    }

    return(
        <>
            <h1>Grocery List</h1>
            <GroceryInput onClick={ handleAdd}/> 
            {data.map((item) => (
                <p><GroceryList key={item.id} 
                  handleDelete = {handleDelete}  
                 {...item}/></p>
            ))}
             
        </>
    )
}

export {Grocery}