import React, { useState } from 'react'
import { Box, Button, Modal, TextField, Paper, Grid } from '@mui/material'
import axios from 'axios'


const AddTool = (props) => {
    const [tool, setTool] = useState(props.tool)
    const handleChange = (event) => {
        let newTool = { ...tool, [event.target.name]: event.target.value }
        setTool(newTool)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateTool(tool)
        props.toggleToolEdit()
    }
    const deleteTool = (event) => {
      axios.delete('https://cc-api.herokuapp.com/tools/' + event.target.value).then((response) => {
        console.log(response)
        props.getTools()
        props.showList()
      })
    }
    return (
        <>
            <Box
                p={5}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    value={tool.name}
                    label="Name of Tool"
                    name="name"
                    onChange={handleChange}
                />
                <TextField
                    value={tool.qty}
                    label="Quantity"
                    name="qty"
                    onChange={handleChange}
                />
                <br />
                <br />
                <TextField
                    value={tool.brand}
                    label="Brand"
                    name="brand"
                    onChange={handleChange}
                />
                <TextField
                    value={tool.link}
                    label="Purchase link"
                    name="link"
                    onChange={handleChange}
                />
                <br />
                <Button type='submit'>Submit</Button>
                <Box textAlign='right'>
                <Button variant='outlined' value={tool.id} onClick={deleteTool}>Delete</Button>
                </Box>
            </Box>

        </>
    )
}

export default AddTool