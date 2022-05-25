import React, { useState } from "react";
import { Button, Col, Form, Row, InputGroup, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useForm, ValidationError } from '@formspree/react';
import Inputs from "../components/Inputs/inputs";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';


const Contact = () => {
  const [validated, setValidated] = useState(false)

  function OnSubmitForm(e) {

    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            Swal.fire(
              'Thank you!',
              'Email has been sent!',
              'success'
            );
        } else {
            console.log('something went wrong')
        } 
    };

    xhr.send(data);
}
  return (
    <div className="contactus container-fluid bg-light" id="contact">
      <Container fluid>
        <Row>
          <Col xs={12} md={6} lg={6}>
            
                    <form
                            onSubmit={OnSubmitForm}
                            action="https://formspree.io/f/mbjqoneo"
                            method="POST">

                          <div className="Row">
                          <h1>Send us an Email!</h1>
                            <div className="columns" id="form-wrapper">
                               
                              <div className="textPadding">
                                    <input
                                    type="hidden" 
                                    name= "author"
                                    value="Nancy Armstrong"/>

                                    <Inputs
                                        name="fullname"
                                        type="text" />
                              </div>
                              <div className="textPadding">
                                    <Inputs
                                        name="phone"
                                        type="text" />
                              </div>

 
                                <div className="textPadding">

                                    <Inputs
                                        name="email"
                                        type="email" />
                                </div>
                                <div className="textPadding">
                                    <Inputs
                                        name="address"
                                        type="text" />

                                </div>
                            </div>
                          

                            <div className="columns">
                                <div className="column is-full" id="textAreaContainer">
                                    <textarea type="text" name='message'
                                        className="textareaform"
                                        placeholder='Message'
                                        required />
                                  

                                    <div className="buttonContainer">
                                        <input
                                            className="abtiaryButton"
                                            value="Submit"
                                            type="submit" />
                                    </div>
                                </div>
                            </div>
                            </div>
                        </form>
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
