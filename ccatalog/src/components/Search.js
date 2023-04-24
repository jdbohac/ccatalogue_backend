import { Box, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'

const Search = (props) => {

const getResults = (event) => {
  axios.get('https://cc-api.herokuapp.com/search.json?q=' + event.target.value).then((response) => {
    props.setTools(response.data)
    props.showList()
  })
}

  return (
    <Box m={2}>
    <TextField variant='outlined' placeholder='search tools' onChange={getResults}></TextField>
    </Box>
  )
}

export default Search