import React, {useState} from "react";
import Ingredients from "./ingredients";
import Instructions from "./Instructions";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { fetchPost } from "./fetch_requests";
import Alert from 'react-bootstrap/Alert';

export default function CreateRecipeHome() {
    
    //stores all the information to upload to CrudCrud
    let [addIngredient, setAddIngredient] = useState(0)  //used to add an input form on for ingrediants and one for insructions 
    let [addInstructions, setAddInstructions] = useState(0)
    let [recipeIngredients, setRecipeIngredients] = useState([])
    let [recipeInstructions, setRecipeInstructions] = useState([])
    let [recipeName, setRecipeName] = useState('')
    let [recipeNotes, SetRecipeNotes] = useState('')
    let [recipeSummary, setRecipeSummary] = useState('')
    let [saveConfirm, setSaveConfirm] = useState(false) //used with the alert bootstrap component
  

    //minuses one from the addIngredients/instructions state to remove one imput from the page. also removes the last array from the recipeIngredients/recipeInstructions 
    function deleteIngredient() {
        if(addIngredient === 0) {
            return
        } else {
            setAddIngredient(addIngredient - 1);
            let copy = recipeIngredients.slice()
            copy.pop()
            setRecipeIngredients(copy)
        }
            
    }

    function deleteInstructions() {
        if(addInstructions === 0) {
            return
        } else {
            setAddInstructions(addInstructions - 1);
            let copy = recipeInstructions.slice()
            copy.pop()
            setRecipeInstructions(copy)

        }
            
    }

    //adds a new empty array string to be able to be updated with an onChange event on the component
    function ingredientsStateAdder(id, result) {
        const newCopy = [...recipeIngredients];
        newCopy[id] = result
            setRecipeIngredients(newCopy)
 
    }
     
    function instructionsStateAdder(id, result) {
        const newCopy = [...recipeInstructions];
        newCopy[id] = result
            setRecipeInstructions(newCopy)
       console.log(id, result)
    }
//makes the POSt request and changes saveConfirm state to load an alert
function saveRecipe() {  
    
    fetchPost(recipeName, recipeInstructions, recipeIngredients, recipeNotes, recipeSummary)
    setSaveConfirm(true)

    }
    //used to make alert bootstrap component work
function alert(){
   if(saveConfirm) {
    return (<Alert className="d-flex justify-content-center" variant="success" onClose={() => setSaveConfirm(false)} dismissible>
        <Alert.Heading>Recipe saved!</Alert.Heading>
      </Alert>)
   }
}
    

    return (
        <>
            <Row>  
                {alert()}
                <Col className="d-flex justify-content-center mt-5">
                    <Form.Group className=" border border-dark p-4 rounded border-3 w-25">
                        <Form.Label htmlFor="disabledTextInput" className="fs-2 d-flex justify-content-center ">Recipe Name</Form.Label>
                        <Form.Control id="disabledTextInput" placeholder="Recipe Name" className="w-100 " onChange={(e) => {
                            let copy = e.target.value;
                            setRecipeName(copy)
                            }}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center mx-5">
                <Col className=" border border-dark p-4 rounded border-3 my-5 mx-5" md={12} lg={12}>
                    <h4>Ingredients</h4> 
                    <Button className="mb-3 me-3 btn-green" onClick={() => setAddIngredient(addIngredient + 1)}>Add</Button>
                    <Button size='sm' className="mb-3 btn-red" id="button-addon2" onClick={() => deleteIngredient()}>
                        <span className="material-symbols-outlined">delete</span>
                    </Button>
                    <Row>
                        <Col>
                            {/* uses thenumber in the state in addIngredient to make a new Ingredient component */}
                            { [...Array(addIngredient)].map((_, i) => <Ingredients key={i} id={i} ingredientsStateAdder={ingredientsStateAdder}/>) }
                            
                        </Col>
                    </Row>
                    <h4 className="mt-5">Instructions</h4>
                    <Button className="mb-3 me-3 btn-green"  onClick={() => setAddInstructions(addInstructions + 1)}>Add</Button>  
                    <Button size='sm' className="mb-3 btn-red" id="button-addon2" onClick={() => deleteInstructions()}>
                        <span className="material-symbols-outlined">delete</span>
                    </Button>
                    <Row>
                        <Col>
                        {/* uses thenumber in the state in addIngredient to make a new Ingredient component */}
                            { [...Array(addInstructions)].map((_, i) => <Instructions key={i} step={i} instructionsStateAdder={instructionsStateAdder}/>) }
                        </Col>
                    </Row>


                </Col>
                <Col className=" border border-dark p-4 rounded border-3"  md={12} lg={12}>
                    <InputGroup className="mb-5">
                            <InputGroup.Text>Notes</InputGroup.Text>
                            <Form.Control as="textarea" aria-label="With textarea"  onChange={(e) => {
                            let copy = e.target.value;
                            SetRecipeNotes(copy)
                            }}/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text>Summary</InputGroup.Text>
                            <Form.Control as="textarea" aria-label="With textarea"  onChange={(e) => {
                            let copy = e.target.value;
                            setRecipeSummary(copy)
                            }}/>
                        </InputGroup>
                        <Button className="float-end mt-5" onClick={() => saveRecipe()}> Submit </Button>
                </Col>
                </Row>             
    </>
    )
}