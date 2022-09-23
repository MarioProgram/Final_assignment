import React, {useState, useEffect} from "react";
import Ingredients from "./ingredients";
import Instructions from "./Instructions";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default function CreateRecipeHome() {

    let [addIngredient, setAddIngredient] = useState(0)
    let [addInstructions, setAddInstructions] = useState(0)
    let newRecipe = true
  
    function deleteIngredient(id) {
        
    }

    // let ingredientsAdder = addIngredient.map(() => <Instructions key={addIngredient.length}> </Instructions>)
    

    // useEffect(() => {
    //     createNewIngredientForm()  
    // }, [])

  
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center mt-5">
                    <Form.Group className=" border border-dark p-4 rounded border-3">
                        <Form.Label htmlFor="disabledTextInput" className="fs-2 d-flex justify-content-center">Recipe Name</Form.Label>
                        
                        <Form.Control id="disabledTextInput" placeholder="Recipe Name" className=""/>
                </Form.Group>
                </Col>
            </Row>
            <Row className="mt-5">

               
                        <Col className=" border border-dark p-4 rounded border-3">
                                {/* <h4>Ingredients</h4> <Button variant="success" size='sm' className="mb-3" onClick={() => setAddIngredient(addIngredient + 1)}>Add</Button>
                             <Row>
                                <Col>
                                { [...Array(addIngredient)].map((_, i) => <Ingredients key={i} deleteIngredient={deleteIngredient}/>) }
                                </Col>
                            </Row> */}
                            <h4>Ingredients</h4> <Button variant="success" size='sm' className="mb-3" onClick={() => setAddIngredient(addIngredient + 1)}>Add</Button>
                             <Row>
                                <Col>
                                { [...Array(addIngredient)].map((_, i) => <Ingredients key={i} deleteIngredient={deleteIngredient}/>) }
                                </Col>
                            </Row> 
                        </Col>
                        

                        <Col className=" border border-dark p-4 rounded border-3">
                            <h4>Instructions</h4> <Button variant="success" size='sm' className="mb-3"  onClick={() => setAddInstructions(addInstructions + 1)}>Add</Button>   
                            <Row>
                                <Col>
                                { [...Array(addInstructions)].map((_, i) => <Instructions key={i} step={i}/>) }
                                </Col>
                            </Row>
                        </Col>

            <Row className='mt-5  border border-dark p-4 rounded border-3'>
                <Col  md={2} >
                    <Form.Label htmlFor="basic-url" className="fs-3">Macros <span className="optional ">Optional</span></Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3" className='justify-content-center fs-4'>
                            Calories
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3"  />
                        <InputGroup.Text id="basic-addon3" className='justify-content-center fs-4 mt-3'>
                            Carbs
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" className=" mt-3" />
                        <InputGroup.Text id="basic-addon3" className='justify-content-center fs-4 mt-3'>
                            Protien
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" className=" mt-3" />
                        <InputGroup.Text id="basic-addon3" className='justify-content-center fs-3 mt-3'>
                            Fat
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" className=" mt-3" />
                    </InputGroup>
                    

                </Col>
                <Col className="mt-5">
                    <InputGroup className="mb-5">
                        <InputGroup.Text>Notes</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text>Summary</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>

                </Col>
            </Row>
                   
                

                
                
                

            </Row>
            
        </Container>
    )
}