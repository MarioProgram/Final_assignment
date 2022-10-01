const url = 'https://crudcrud.com/api/3a51d875fb524893b53f49ad6ae56d04/recipes';

//stores all my fetch request so only one URl has to be updated
export {fetchGet, fetchPost, fetchPut, fetchDelete, fetchGetAll}

function fetchGetAll(func) {
    fetch(`${url}`)
            .then(res => res.json())
            .then(jsonRes => {
                func(jsonRes)
            })
}

function fetchGet(id, func) {
    fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(jsonRes => {
        func(jsonRes)
    })
}

function fetchPost(recipeName, recipeInstructions, recipeIngredients, recipeNotes, recipeSummary) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: recipeName,
            instructions: recipeInstructions,
            ingredients: recipeIngredients,
            notes: recipeNotes,
            summary: recipeSummary
        })
    })
}

function fetchPut(recipeName, recipeInstructions, recipeIngredients, recipeNotes, id) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: recipeName,
            instructions: recipeInstructions,
            ingredients: recipeIngredients,
            notes: recipeNotes
        })
    })
}


function fetchDelete(id) {
        fetch(`${url}/${id}`, {
            method: 'DELETE'})
            .then(() => 
            console.log('Delete Successful')
            )
}

