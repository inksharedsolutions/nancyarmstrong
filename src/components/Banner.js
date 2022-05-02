import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import redhouse from "../../static/bg-18.png"
const Banner = () => {
  return (
    <div className="container-fluid main" id="home">
      <Container fluid>
        <Row className="justify-content-evenly">
          <Col className="main__textbox" xs={12} md={6} lg={6}>
            <p className="read">Read, and learn in various formats</p>
            <h1 className="featured">Featured</h1>
            <h1 className="book">Book</h1>
            <p>
              This is a story about a little boy who learns that everything that
              is fun cannot always be found in a toy box, or even in a book. A
              story about a little red house with no windows, no doors, and a
              star inside.
            </p>
            <Button variant="outline-dark" href="#book">
              Read More
            </Button>
          </Col>
          <Col className="d-flex align-items-center" xs={12} md={6} lg={6}>
            <img className="house" src={redhouse} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
