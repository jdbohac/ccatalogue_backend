import { Button, Box, Grid, Container, Paper, Card, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import AddConsumable from '../consumables/AddConsumable'
import EditConsumable from '../consumables/EditConsumable'
import EditTool from './EditTool'
const ShowTool = (props) => {
  const [showConsForm, setShowConsForm] = useState(false)
  const [showConsEdit, setShowConsEdit] = useState(false)
  const [showToolEdit, setShowToolEdit] = useState(false)

  const createConsumable = (addedConsumable) => {
    axios.post('https://cc-api.herokuapp.com/consumables', addedConsumable).then((response) => {
      console.log(response)
      props.getOneTool(props.tool.id)
    }).catch((error) => {
      console.log(error)
    })
  }
  const updateConsumable = (updatedConsumable) => {
    axios.put('https://cc-api.herokuapp.com/consumables/' + updatedConsumable.id, updatedConsumable).then((response) => {
      console.log(response)
      props.getOneTool(props.tool.id)
      toggleConsEdit()
    })
  }
  const updateTool = (updatedTool) => {
    axios.put('https://cc-api.herokuapp.com/tools/' + updatedTool.id, updatedTool).then((response) => {
      console.log(response)
      props.getOneTool(props.tool.id)
      toggleToolEdit()
    })
  }
  const toggleConsForm = () => {
    setShowConsForm(!showConsForm)
  }
  const toggleConsEdit = (consumable) => {
    if (showConsEdit !== false) {
      setShowConsEdit(false)
    } else {
      setShowConsEdit(consumable.id)
    }
  }
  const toggleToolEdit = () => {
    setShowToolEdit(!showToolEdit)
  }
  return (
    <>
      <Button variant='contained' onClick={props.showList}>Back</Button>
      <Grid m={2} container justifyContent="center">
        <Grid item md={10} xs={12}>
          <Card>
            <Box m={2} p={4}>
              <Button onClick={toggleToolEdit}>Edit</Button>
              {showToolEdit ?
                <EditTool tool={props.tool} getTools={props.getTools} showList={props.showList} updateTool={updateTool} toggleToolEdit={toggleToolEdit} />
                :
                <>
                  <Typography variant='h3'>{props.tool.name}</Typography>
                  <Typography variant="h5" color="secondary.light">Brand: {props.tool.brand}</Typography>
                  <Box textAlign="right">
                    <h5>Qty: {props.tool.qty}</h5>
                    <Button variant='outlined' target='blank' href={props.tool.link}>order more</Button>
                  </Box>
                </>
              }
            </Box>
          </Card >
          <Typography variant='h3' color="primary.dark">Consumables:</Typography>
          <Button variant='contained' onClick={toggleConsForm}>Add Consumable</Button>
          {showConsForm ?
            <AddConsumable showConsForm={showConsForm} toggleConsForm={toggleConsForm} tool={props.tool} createConsumable={createConsumable} />
            : null}
        </Grid>
      </Grid>
      {/* display tool consumables info */}
      {/* does the tool have consumables? if not ignore this map */}
      {props.tool.consumables ?
        props.tool.consumables.map((consumable, i) => {
          return (
            <Grid item md={4} xs={12} key={consumable.id}>
              <Paper>
                <Box m={2} p={3}>
                  <Button  onClick={() => toggleConsEdit(consumable)}>Edit</Button>
                  {showConsEdit === consumable.id ?
                    <EditConsumable toggleConsEdit={toggleConsEdit} getOneTool={props.getOneTool} tool={props.tool} consumable={consumable} updateConsumable={updateConsumable} />
                    :
                    <>
                      <Typography variant='h3'>{consumable.name}</Typography>
                      <Typography variant='h5' color="secondary.light">Brand: {consumable.brand}</Typography>
                      <Box textAlign="right">
                        <h5>Qty: {consumable.qty}</h5>
                        <Button variant='outlined' target='blank' href={consumable.link}>order more</Button>
                      </Box>
                    </>
                  }
                </Box>
              </Paper>
            </Grid>
          )
        })
        : null}
    </>
  )
}

export default ShowTool