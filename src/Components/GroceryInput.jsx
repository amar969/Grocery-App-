import React from 'react'

function GroceryInput({ onClick }){

  const [title, setTitle] = React.useState("")
  
  

  return(
    <>
    <input 
      placeholder='Add something'
      value={title}
      onChange={(e)=> setTitle(e.target.value)}
    />
    <button onClick={() => onClick(title)} >ADD</button>
    </>
  )
}

export {GroceryInput}