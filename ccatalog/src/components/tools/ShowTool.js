import { Button, Box, Grid, Container, Paper, Card } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import AddConsumable from '../consumables/AddConsumable'
import EditConsumable from '../consumables/EditConsumable'

const ShowTool = (props) => {
  const [showConsForm, setShowConsForm] = useState(false)
  const [showConsEdit, setShowConsEdit] = useState(false)
  const createConsumable = (addedConsumable) => {
    axios.post('https://cc-api.herokuapp.com/consumables', addedConsumable).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }
  const updateConsumable = (updatedConsumable) => {
    axios.put('https://cc-api.herokuapp.com/consumables/' + updatedConsumable.id, updatedConsumable).then((response) => {
      console.log(response)
      toggleConsEdit()
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
  return (
    <>
      <Button variant='contained' onClick={props.showList}>Back</Button>
      <Grid m={2} container justifyContent="center">
        <Grid item textAlign="center" md={6}>
          <Card>
          <Box p={4}>
          {/* Display tool info */}
          <h2>{props.tool.name}</h2>
          <h4>Brand: {props.tool.brand}</h4>
          <Button variant='outlined' target='blank' href={props.tool.link}>order more</Button>
              <h5>Qty: {props.tool.qty}</h5>
            </Box>
          </Card >
          <h2>Consumables:</h2>
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
            <Grid item md={5} key={consumable.id}>
              <Paper>
                <Box m={2} p={3}>
                  <Button variant='outlined' onClick={() => toggleConsEdit(consumable)}>Edit</Button>
                  {showConsEdit === consumable.id ?
                    <EditConsumable consumable={consumable} updateConsumable={updateConsumable} />
                    :
                    <>
                      <h3>{consumable.name}</h3>
                      <h4>Brand: {consumable.brand}</h4>
                      <Button variant='outlined' target='blank' href={consumable.link}>order more</Button>
                      <Box textAlign="right">
                        <h5>Qty: {consumable.qty}</h5>
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