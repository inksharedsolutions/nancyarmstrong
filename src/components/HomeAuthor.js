import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import authorimg from "../../static/nancy.png"
const HomeAuthor = () => {
  return (
    <div className="container-fluid homeauth" id="author">
      <Container fluid>
        <Row>
          <Col md={6} className="homeauth__colauthor">
            <img className="homeauth__authorimg" src={authorimg} />
          </Col>
          <Col md={6} className="homeauth__coldesc">
            <h1 className="authorName">Author</h1>
            <p className="authordesc">
              Nancy Armstrong has been an educator for over 20 years. Raised on
              a farm in Kansas, she enjoyed and experienced many beautiful days
              roaming the countryside exploring and learning about nature. When
              she started teaching in a city school, she used her experiences in
              her classroom as a tool to teach children about many life skills,
              about farming and country life. The biggest thing she wants her
              students to know is how simple learning is, and asking questions
              along the way is a great way to gather the information that will
              help you become successful in life.
            </p>
            <figure>
              <blockquote class="blockquote">
                <p>Life is an adventure, never stop exploring!</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                <cite title="Source Title">Nancy Armstrong</cite>
              </figcaption>
            </figure>
            {/* <Button variant="outline-light">Read More</Button> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeAuthor
