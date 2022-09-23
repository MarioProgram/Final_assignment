import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';

import CreateRecipeHome from './create_receipe_home';

function App() {
  return (
    <>
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Recipes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Create Recipes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">My Receipes</Nav.Link>
      </Nav.Item>
    </Nav>
    <CreateRecipeHome />
    </>
  );
}

export default App;
