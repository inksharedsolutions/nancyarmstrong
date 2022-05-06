import React, { useState } from "react"
import { Button, Col, Form, Row, InputGroup, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [validated, setValidated] = useState(false)

  const [state, handleSubmit] = useForm("mknkvenn");
  if (state.succeeded) {
      return alert("Successfully Sent!");
  }

  // const handleSubmit = event => {
  //   const form = event.currentTarget
  //   if (form.checkValidity() === false) {
  //     event.preventDefault()
  //     event.stopPropagation()
  //   }

  //   setValidated(true)
  // }
  return (
    <div className="contactus container-fluid bg-light" id="contact">
      <Container fluid>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="form container-fluid">
              <h1>Send us an Email!</h1>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <input type="hidden" name="author" value="Nancy Armstrong" />
                {/* firstname */}
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label></Form.Label>
                  <Form.Control required type="text" placeholder="Fullname" name="fullname"/>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                {/* lastname */}
                <Form.Group as={Col} controlId="validationCustom02">
                  <Form.Label></Form.Label>
                  <Form.Control required type="text" placeholder="Phone" name="phone"/>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                {/* Email */}
                <Form.Group as={Col} controlId="validationCustomUsername">
                  <Form.Label></Form.Label>
                    
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      aria-describedby="inputGroupPrepend"
                      required
                      name="email"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                </Form.Group>

                {/* address */}
                <Form.Group as={Col} controlId="validationCustom03">
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="Address" required name="address"/>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label></Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Message" name="message" required/>
                </Form.Group>

                <Button type="submit" disabled={state.submitting}>Submit</Button>
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
