import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Materials = () => {
const [materials, setMaterials] = useState([])
const getMaterials = () => {
  axios.get('https://cc-api.herokuapp.com/materials').then((response) => {
    setMaterials(response.data)
  })
}
useEffect(() => {
  getMaterials()
}, [])
  return (
    <div>Materials</div>
  )
}

export default Materials