import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import AddConsumable from '../consumables/AddConsumable'

const ShowTool = (props) => {
const [showConsForm, setShowConsForm] = useState(false)
const createConsumable = (addedConsumable) => {
  axios.post('https://cc-api.herokuapp.com/consumables', addedConsumable).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  })
}
const toggleConsForm = () => {
  setShowConsForm(!showConsForm)
}

  return (
    <div>
      <Button onClick={props.showList}>Back</Button>
      
      {/* Display tool info */}
      <h2>{props.tool.name}</h2>
        <h4>Brand: {props.tool.brand}</h4>
        <Button target='blank' href={props.tool.link}>order more</Button>
        <h5>Qty: {props.tool.qty}</h5>
        <h2>Consumables:</h2>
        <Button onClick={toggleConsForm}>Add Consumable</Button>
        {showConsForm ? 
        <AddConsumable tool={props.tool} createConsumable={createConsumable} />
        : null}
        {/* display tool consumables info */}
        {/* does the tool have consumables? if not ignore this map */}
        {props.tool.consumables ?
      props.tool.consumables.map((consumable, i) =>{
      return(
      <div key={i}>
        <h3>{consumable.name}</h3>
        <h4>Brand: {consumable.brand}</h4>
        <Button target='blank' href={consumable.link}>order more</Button>
        <h5>Qty: {consumable.qty}</h5>
      </div>
      )
      })
      : null}
    </div>
  )
}

export default ShowTool