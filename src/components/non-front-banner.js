import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import redhouse from "../../static/terms.png"
const NFBanner = (props) => {
  return (
    <div className="container-fluid main" id="nft">
      <Container fluid>
        <Row className="justify-content-evenly">
          <Col className="main__textbox"  id="nfb_title" xs={6} md={4} lg={4}>
            <h1 className="featured">{props.title}</h1>
          </Col>
          <Col className="d-flex align-items-center" xs={6} md={4} lg={4}>
            <img className="terms-img" src={redhouse} alt="illustration"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NFBanner
