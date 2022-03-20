import React from 'react'

function GroceryList({title, id, status, handleDelete}){
    return (
        <>
        {title}
        <button onClick={() => handleDelete(id)}>Delete Item</button>
        </>
    )
}

export {GroceryList}