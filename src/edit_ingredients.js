import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './App.css'


//used with the edit_page component to use the updateInstructions function and sets the state each time something is changed each ingredient is mapped to a new input and the value is put as the forms default value
export default function EditIngredients(props) {
    const[ingredients, setIngredients] = useState({
        amount: props.amount,
        fraction: props.fraction,
        measurment: props.measurment,
        item: props.item

    })
    function update() {
        console.log('tester')
        props.updateIngredients(props.id, ingredients)
      }

    
    return (
        <>
        <InputGroup className="mb-3" onChange={() => update()}>
        <Form.Control aria-label="Text input with dropdown button" type="number" defaultValue={props.amount} className="custom-w" size="sm" id='amount' onChange={(e) => {
             let adder = Object.assign(ingredients);  
             adder.amount = e.target.value;                                 
             setIngredients(adder)
             ;
             }}/>
            
            <select className="form-select fraction" defaultValue={props.fraction} onChange={(e)=> {
                let adder = Object.assign(ingredients);  
                adder.fraction = e.target.value;                                 
                setIngredients(adder)}}>
                    <option>0</option>
                    <option value='1/8'>1/8</option>
                    <option value='1/4'>1/4</option>
                    <option value='1/3'>1/3</option>
                    <option value='1/2'>1/2</option>
                    <option value='2/3'>2/3</option>
                    <option value='3/4'>3/4</option>
            </select>
            
            <Form.Select  size="sm" className="custom-w" id='measurement' defaultValue={props.measurment} onChange={(e) => {
             let adder = Object.assign(ingredients);  
             adder.measurment = e.target.value;                                 
             setIngredients(adder)}}>
                <option value='tsp'>tsp</option>
                <option value='tbsp'>tbsp</option>
                <option value='cup'>cup</option>
                <option value='pints'>pints</option>
                <option value='quarts'>quarts</option>
                <option value='fl oz'>fl oz</option>
                <option value='oz'>oz</option>
                <option value='lb'>lb</option>
                <option value='g'>g</option>
                <option value='kg'>kg</option>
                <option value='mL'>mL</option>
                <option value='L'>L</option>
                <option value='clove'>clove</option>
                <option value='large'>large</option>
                <option value='mediun'>medium</option>
                <option value='small'>small</option>
                <option value='dash'>dash</option>
                <option value='pinch'>pinch</option>
                <option value='handfull'>handfull</option>
                <option value='bunch'>bunch</option>
                <option value='head'>head</option>
                <option value='whole'>whole</option>
                <option value='piece'>piece</option>
            </Form.Select>
            <Form.Control aria-label="Text input with dropdown button" className="w-0" size="sm" id='item' defaultValue={props.item} onChange={(e) => {
             let adder = Object.assign(ingredients);  
             adder.item = e.target.value;                                 
             setIngredients(adder)}}/>
        </InputGroup>
        </>
    )
}