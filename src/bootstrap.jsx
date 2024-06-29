import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


const App=()=>{
    return(
        <>
         <Container>
 
 <h1>Welcome to Cybrom </h1>

 <Alert variant="info" dismissible>
  This is a alert—check it out!
</Alert>

<Alert variant="danger" dismissible>
  This alert—check it out!
</Alert>

<div>
<h1>
Example heading <Badge bg="secondary">New</Badge>
</h1>
<h2>
Example heading <Badge bg="secondary">New</Badge>
</h2>
<h3>
Example heading <Badge bg="secondary">New</Badge>
</h3>
<h4>
Example heading <Badge bg="secondary">New</Badge>
</h4>
<h5>
Example heading <Badge bg="secondary">New</Badge>
</h5>
<h6>
Example heading <Badge bg="secondary">New</Badge>
</h6>
</div>

<ButtonGroup aria-label="Basic example">
<Button variant="success">Left</Button>
<Button variant="danger">Middle</Button>
<Button variant="info">Right</Button>
</ButtonGroup>
<br />
<br />


<Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
Dropdown Button
</Dropdown.Toggle>

<Dropdown.Menu>
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>


  

 </Container>
  

        
        </>
    )
}
export default App;




import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Spinner from 'react-bootstrap/Spinner';


const App=()=>{
    return(
        <>
         
         {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#" >Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
      
            <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>


          </Container>
        </Navbar>
      ))}

        
        </>
    )
}
export default App;