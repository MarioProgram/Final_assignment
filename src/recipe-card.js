import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import clipArt from './foodpics/clipArt.png'
import { Link } from 'react-router-dom'


export default function RecipeCard(props) {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={clipArt} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.summary}
                    </Card.Text>
                    {/* links to recipe full_recipe_page compnent and adds the id of the recipe from CrudCrud to the end of the url so it can be used in the get request to pull up the info*/ }
                   <Link to={"recipe-page/" + props.id} >View Full Recipe</Link> 
                </Card.Body>
            </Card>

        </>
    )
}