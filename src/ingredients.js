import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './App.css'

export default function Ingredients(props) {
    return (
        <>
        <InputGroup className="mb-3">
        <Form.Control aria-label="Text input with dropdown button" className="custom-w" size="sm"/>
            <Form.Select  size="sm" className="w-0">
                <option value=''>tsp</option>
                <option value=''>tbsp</option>
                <option value=''>cup</option>
                <option value=''>pints</option>
                <option value=''>quarts</option>
                <option value=''>fl oz</option>
                <option value=''>oz</option>
                <option value=''>lb</option>
                <option value=''>g</option>
                <option value=''>kg</option>
                <option value=''>mL</option>
                <option value=''>L</option>
                <option value=''>fl oz</option>
                <option value=''>clove</option>
                <option value=''>large</option>
                <option value=''>medium</option>
                <option value=''>small</option>
                <option value=''>dash</option>
                <option value=''>pinch</option>
                <option value=''>handfull</option>
                <option value=''>bunch</option>
                <option value=''>head</option>
                <option value=''>whole</option>
            </Form.Select>
            <Form.Control aria-label="Text input with dropdown button" className="w-0" size="sm"/>
            <Button variant="danger" id="button-addon2" onClick={() => props.deleteIngredient(props.id)}>
            <span className="material-symbols-outlined">delete</span>
            </Button>
        </InputGroup>
        </>
    )
}