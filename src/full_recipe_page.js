import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import clipArt from './foodpics/clipArt.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import EditPage from './edit_page';
import { fetchDelete, fetchGet } from './fetch_requests';

export default function FullRecipePage(props) {

    const [update, setUpdate] = useState(false); //used with the useEffect so it can load in the current recipe everytime this state is changed
    const [edit, setEdit] = useState(false); //used with the modal on edit_page to open and close it
    const [recipeData, setRecipeData] = useState([]); // stores the recipe fecth GET imformation
    const { id } = useParams();  //uses the ID in the url to use for a get request on the chosen recipe

    useEffect(() => {
            fetchGet(id, setRecipeData);
    }, [update])

    function deleteRecipe() {
            fetchDelete(id);
            window.location.assign('http://localhost:3000/my_recipes'); //loads in the mt_recipes page to do another get request to update the current recipe cards
    }

   

    return (
        <>
        <Row> 
            <Row>

                <Col className='my-5 d-flex justify-content-center border-bottom border-dark border-4'>
                <h1 >{recipeData.name}</h1>
                </Col>
                
                <Col sm={2} className='my-5 d-flex justify-content-center border-bottom border-dark border-4 gap-5'>
               
                <Button onClick={() => setEdit(true)} className='btn-yellow h-75'> Edit</Button>
                {/* EditPage component is a modal that pops up when edit is true */}
               <EditPage show={edit} onHide={() => setEdit(false)} setuUpdate={setUpdate} update={update}ingredients={recipeData.ingredients} instructions={recipeData.instructions} key={recipeData._id} id={recipeData._id} editStatus={edit} name={recipeData.name} notes={recipeData.notes}/>

                <Button className='btn-red h-75' onClick={() => deleteRecipe()}> Delete</Button>
                
                </Col>
            </Row>
            <Col className='d-flex justify-content-center imgSizer' md={4}>
                <Image src={clipArt} className='mt-5 ps-5'/>
            </Col>
            <Col>
                <Row>
                    <Col className='border-bottom border-dark border-4'>
                        <h3>Ingridients</h3> 
                        <ListGroup>
                            {/*maps out each ingredient in the array */}
                             {recipeData.ingredients?.map((x, i) => (<ListGroup.Item key={i}>{x.amount} {x.fraction} {x.measurment} {x.item}</ListGroup.Item>))} 
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className='border-bottom border-dark border-4'>
                        <h3>Instructions</h3> 
                        <ListGroup>
                            {/*maps out each instruction in the array */}
                             {recipeData.instructions?.map((x, i) => (<ListGroup.Item key={i}>Step {i + 1}. {x}</ListGroup.Item>))} 
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className='border-bottom border-dark border-4'>
                        <h3>Notes</h3>
                        <p>{recipeData.notes}</p>
                    </Col>
                </Row>
            </Col>
        </Row>
 
        </>
    )

}