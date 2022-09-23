import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Instructions(props) {
    return (
        <InputGroup className='mb-2' >
        <InputGroup.Text>Step {props.step + 1}</InputGroup.Text>
        <Form.Control aria-label="Text input with dropdown button"/>
        </InputGroup >
    )
}