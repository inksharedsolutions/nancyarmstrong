import React from "react"
import { Link } from "gatsby"
import icon from "../../static/icon.png"
import {
  Container,
  Navbar,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap"
import companylogo from "../../static/companylogo.png"
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGoodreads,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <Container fluid>
        <Row className="d-flex align-items-center">
          <Col className="footer__description" lg={4} xs={12} md={4}>
            <Navbar.Brand href="#home">
              <img alt="" src={icon} width="50" height="50" />
              <span className="brand">The Little Red House</span>
            </Navbar.Brand>
            <p className="nancy">
              Nancy Armstrong loves to hear from readers. You can reach her via
              email. Feel free to send questions about writing, his works,
              interviews and other publicity matters.
            </p>
          </Col>
          <Col className="footer__navfooter" lg={4} xs={12} md={4}>
            <h5>Navigation</h5>
            <span>
              <a href="#home">Home</a>
            </span>
            <span>
              <a href="#author">About the author</a>
            </span>
            <span>
              <a href="#book">About the book</a>
            </span>
            <span>
              <a href="#contact">Contact</a>
            </span>
          </Col>
          <Col className="footer__connected" lg={4} xs={12} md={4}>
            <h5 className="text-start">STAY CONNECTED</h5>
            <p className="stayup">Stay up to date with the latest from me</p>
            <Form>
              <InputGroup className="mb-3 mt-3">
                <FormControl
                  placeholder="Username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className="me-2"
                />
                <Button variant="primary" id="button-addon2">
                  Submit
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>

        <Row className="footer__bottom">
          <Col className="footer__companylogo" lg={4} xs={12}>
            <Navbar.Brand>
              <img alt="" src={companylogo} width="60" height="60" />
              <span className="companyname">
                © Copyright 2022. Stratton Press.
              </span>
            </Navbar.Brand>
          </Col>
          <Col className="footer__policies" lg={4} xs={12}>
            <Link to="/TAC" className="tac">
              Terms and Conditions
            </Link>
            <a href="#">Privacy Policy</a>
          </Col>
          <Col className="footer__icons" lg={4} xs={12}>
            <Nav>
              <Nav.Link href="#home">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  className="fa-facebook"
                />
              </Nav.Link>
              <Nav.Link href="#features">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  className="fa-facebook"
                />
              </Nav.Link>
              <Nav.Link href="#pricing">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="fa-facebook"
                />
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <FontAwesomeIcon
                  icon={faGoodreads}
                  size="2x"
                  className="fa-facebook"
                />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
