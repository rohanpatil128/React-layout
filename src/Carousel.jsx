import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const App=()=>{
  return(
    <>
     
       <Carousel style={{marginTop:"20px"}}>
      <Carousel.Item>
     <img src="public/Mobile.jpg" alt="" width="100%" height="400"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
      <img src="public/Aesthetics.jpg" alt="" width="100%"height="400" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="public/ac.jpg" alt="" width="100%" height="400"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      

      <Container>


     <Row>
      <Col>
         
      <Card style={{ width: '18rem' }}>
      <img src="public/Aesthetics.jpg" alt=""height="200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      


      </Col>
      <Col>
         
      <Card style={{ width: '18rem' }}>
      <img src="public/Aesthetics.jpg" alt=""height="200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      


      </Col>
      <Col>
         
      <Card style={{ width: '18rem' }}>
      <img src="public/Aesthetics.jpg" alt=""height="200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      


      </Col>
      <Col>
         
      <Card style={{ width: '18rem' }}>
      <img src="public/Aesthetics.jpg" alt=""height="200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      


      </Col>
      </Row>

      </Container>
   
   

    </>
  )
}
export default App;