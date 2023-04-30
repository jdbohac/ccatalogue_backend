import { Box, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'

const Search = (props) => {

const getResults = (event) => {
  axios.get('https://cc-api.herokuapp.com/search.json?tool=' + event.target.value).then((response) => {
    props.setTools(response.data)
    props.showList()
  })
}

  return (
  <div>
    <Box m={2}>
    <TextField variant='outlined' label='search: "tools"' onChange={getResults}></TextField>
    </Box>
    </div>
  )
}

export default Search