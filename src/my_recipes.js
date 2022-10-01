import React, { useEffect, useRef, useState } from 'react'
import RecipeCard from './recipe-card'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import {fetchGetAll }from './fetch_requests'

 //sets all the recipes so i can map it into cards
export default function MyRecipes(props) {
    const [recipeData, setRecipeData] = useState([])

    useEffect(() => {
           
            fetchGetAll(setRecipeData)
            
    }, [])

  
    return (
        <>
        <Container className='mt-5'>
            <Row className='gap-5'>
               
       {recipeData.map(x => (<RecipeCard key={x._id} name={x.name} instructions={x.instructions} ingredients={x.ingredients} id={x._id} notes={x.notes} summary={x.summary}/>))}
                
            </Row>
        </Container>
    </>

    )
}