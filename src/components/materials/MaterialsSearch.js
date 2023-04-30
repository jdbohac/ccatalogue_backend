import { Box, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'

const MaterialsSearch = (props) => {

    const getResults = (event) => {
        axios.get('https://cc-api.herokuapp.com/search.json?material=' + event.target.value).then((response) => {
            props.setMaterials(response.data)
            props.showList()
        })
    }

    return (
        <div>
            <Box m={2}>
                <TextField variant='outlined' label='search: "materials"' onChange={getResults}></TextField>
            </Box>
        </div>
    )
}

export default MaterialsSearch