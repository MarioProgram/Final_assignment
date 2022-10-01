import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//the form used when add instructions button is clicked
export default function Instructions(props) {
    const[instructions, setInstructions] = useState([''])

    useEffect(() => {
        props.instructionsStateAdder(props.step, `${instructions[0]}`)
    }, [instructions])

    
    return (
        <InputGroup className='mb-2' >
        <InputGroup.Text>Step {props.step + 1}</InputGroup.Text>
        <Form.Control  as="textarea"  aria-label="Text input with dropdown button" onChange={(e) => {
             const newTodos = [...instructions];
             newTodos[0] = e.target.value;
            setInstructions(newTodos)}}/>
        </InputGroup >
    )
}