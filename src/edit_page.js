import React, {useState, useEffect} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditIngredients from './edit_ingredients'
import EditInstructions from "./edit_instructions";
import { fetchPut } from "./fetch_requests";
import Form from 'react-bootstrap/Form'

export default function EditPage(props) {

  //used to hold the information for all the current values and is updated everytime something is changed
  let [editIngredientsUpdate, setEditIngredientsUpdate] = useState()
  let [editInstructionsUpdate, SetEditInstructionsUpdate] = useState()
  let [editNotesUpdate, setEditNotesUpdate] = useState()
  let [editNameUpdate, setEditNameUpdate] = useState()

  //used to pass down the component to get the information that was changed
 function updateIngredients(id, object) { 
  let adder = Object.assign(editIngredientsUpdate);  
  adder[id] = object;                                 
  setEditIngredientsUpdate(adder)
}

  //used to pass down the component to get the information that was changed
function updateInstructions(id, object) { 
  const newCopy = [...editInstructionsUpdate];
  newCopy[id] = object
      SetEditInstructionsUpdate(newCopy)
}

//loads in the information everytime the editStatus state in  is true in full_recipe_page to fix a bug
useEffect(() => {
  if (props.editStatus) {
   setEditIngredientsUpdate(props.ingredients)
   SetEditInstructionsUpdate(props.instructions)
   setEditNotesUpdate(props.notes)
   setEditNameUpdate(props.name)
  }
}, [props.editStatus]) 

//does a fetchPut to update CrudCrud
function saveRecipe() {
  props.onHide();
  fetchPut(editNameUpdate, editInstructionsUpdate, editIngredientsUpdate, editNotesUpdate, props.id)
  props.setUpdate(!props.update)
}

//uses the information in the states to set a default value in the forms
    return(

        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>Name</h1>
            <Form.Control defaultValue={props.name} onChange={(e) => {
                            let copy = e.target.value;
                            setEditNameUpdate(copy)
                            }}/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h1>Ingredients</h1>
        {/* maps each recipe into its own EditRecipe compnent and the compennt puts the values in to their own imput form as the default Value so it can be changed*/}
        {props.ingredients?.map((x, i) => (<EditIngredients amount={x.amount} fraction={x.fraction} measurment={x.measurment} item={x.item} key={i} updateIngredients={updateIngredients} id={i} > </EditIngredients>))}
          <h1>Instructions</h1>
          {/* maps each recipe into its own EditRecipe compnent and the compennt puts the values in to their own imput form as the default Value so it can be changed*/}
          {props.instructions?.map((x, i) => (<EditInstructions key={i} updateInstructions={updateInstructions} instructions={x} id={i}>{x}</EditInstructions>))}

          <h1>Notes</h1>
          <Form.Control as="textarea" aria-label="With textarea" defaultValue={props.notes} onChange={(e) => {
                            let copy = e.target.value;
                            setEditNotesUpdate(copy)
                            }} />
                        
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-green" onClick={() => saveRecipe()}>Save</Button>
        </Modal.Footer>
      </Modal>
        )
}