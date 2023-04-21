import { Button } from '@mui/material'
import React from 'react'

const ListTools = (props) => {

  return (
    <div>
    {props.tools.map(tool => {
      return(
      <div key={tool.id} onClick={() => props.showTool(tool.id)}>
        <h2>{tool.name}</h2>
        <h4>Brand: {tool.brand}</h4>
        <Button target='blank' href={tool.link}>order more</Button>
        <p>Qty: {tool.qty}</p>
      </div>
      )
      })}
    </div>
  )
}

export default ListTools