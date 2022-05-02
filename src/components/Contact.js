import React, { useState } from "react"
import { Button, Col, Form, Row, InputGroup, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
    <div className="contactus container-fluid bg-light" id="contact">
      <Container fluid>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="form container-fluid">
              <h1>Send us an Email!</h1>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {/* firstname */}
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control required type="text" placeholder="First name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                {/* lastname */}
                <Form.Group as={Col} controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control required type="text" placeholder="Last name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                {/* Email */}
                <Form.Group as={Col} controlId="validationCustomUsername">
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                {/* address */}
                <Form.Group as={Col} controlId="validationCustom03">
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="Address" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message:</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button type="submit">Submit</Button>
              </Form>
            </div>
          </Col>

          <Col className="social container-fluid" xs={12} md={6} lg={6}>
            <div className="phone">
              <a href="tel:8883237009">
                <FontAwesomeIcon icon={faPhone} size="2x" className="faphone" />
              </a>
              <h3 className="detail">Phone:</h3>
              <p className="detail">888-323-7009</p>
            </div>
            <div className="at">
              <a href="mailto:publish@stratton-press.com">
                <FontAwesomeIcon icon={faAt} size="2x" className="faat" />
              </a>
              <h3 className="detail">Email:</h3>
              <p className="detail">publish@stratton-press.com</p>
            </div>
            <div className="location">
              <FontAwesomeIcon icon={faLocationDot} size="2x" />
              <h3 className="detail">Address:</h3>
              <p className="detail">
                831 N Tatnall Street, Suite M #188, Wilmington, DE 19801
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
