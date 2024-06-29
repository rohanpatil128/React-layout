import { Col, Container, Row } from "react-bootstrap";

const App=()=>{
  return(
    <>
     <Container className="border p-5 mt-5 bg-warning ">
      <Row>
        <Col md={2} className="bg-danger p-5 text-center fs-4 p text-white">
           Hello World
        </Col>

        <Col md={2} className="bg-success p-5 text-center fs-4 p text-white">
        Hello World
        </Col>

        <Col md={2} className="bg-info p-5 text-center fs-4 p text-white">
             Hello World
        </Col>

        <Col md={6} className="bg-primary p-5 text-center fs-4 p text-white">
              Hello World
        </Col>
      
      </Row>
     </Container>
    </>
  )
}
export default App;