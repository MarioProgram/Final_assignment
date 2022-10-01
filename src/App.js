import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CreateRecipeHome from './create_receipe_home';
import MyRecipes from './my_recipes';
import { Route, Routes } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import FullRecipePage from './full_recipe_page' 
import EditRecipe from './edit_page.js'



function App() {
  return (
    <>
    

    <Navbar>
        <Container className='justify-content-center'>
          <Navbar.Brand className='fs-1'>InCRUDible Recipe Keeper</Navbar.Brand>
        </Container>  
      </Navbar>
    <Nav justify variant="tabs" defaultActiveKey="/home">

      <Nav.Item>
        <LinkContainer to="/"><Nav.Link href="/home" className='bkg-tabs'>Create Recipes</Nav.Link></LinkContainer>
      </Nav.Item>
      <Nav.Item>
      <LinkContainer to="/my_recipes"><Nav.Link href="/home"  className='bkg'>My Recipes</Nav.Link></LinkContainer>
      </Nav.Item>
    </Nav>
    
    <Routes>
      <Route path="/" element={<CreateRecipeHome />}/>
      <Route path="/my_recipes"> 
        <Route index element={<MyRecipes />} />
        {/* each one is added an ID to be used to add to a get request with useParams function */}
        <Route path='recipe-page/:id' element={<FullRecipePage />}/>
        <Route path='edit-recipe/:id' element={<EditRecipe/>} />
      </Route>
    </Routes>

    </>
  );
}

export default App;
