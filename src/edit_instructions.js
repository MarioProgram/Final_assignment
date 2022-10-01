import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//used with the edit_page component to use the updateInstructions function and sets the state each time something is changed each intruction is mapped to a new input and the value is put as the forms default value
export default function EditInstructions(props) {
    const[instructions, setInstructions] = useState(props.instructions)

    
    function update() {
        props.updateInstructions(props.id, instructions)
      }
    
    return (
        <InputGroup className='mb-2' onKeyUp={() => update()} >
        <InputGroup.Text>Step {props.id + 1}.</InputGroup.Text>
        <Form.Control aria-label="Text input with dropdown button" defaultValue={props.instructions} onChange={(e) => {
             const newTodos = e.target.value;
            
            setInstructions(newTodos)}}/>
        </InputGroup >
    )
}