import React from "react"
import { Link } from "gatsby"
import { Container, Col, Row } from "react-bootstrap"
import amazon from "../../static/amazon.png"
import bam from "../../static/bam1.png"
import ban from "../../static/barns.png"
import stratton from "../../static/stratton_ccexpress.png"

const Featured = () => {
  return (
    <div className="container-fluid featureds">
      <h1 className="display-3 text-center">Featured</h1>
      <p className="lead text-center">
        Nancy Armstrong has been featured numerous times on...
      </p>
      <Container fluid>
        <Row className="featureds__companylogo">
          <Col md={6} lg={3} className="amazonlogo">
            <img src={amazon} className="imagelogo" />
          </Col>
          <Col md={6} lg={3} className="logo">
            <img src={bam} className="imagelogo" />
          </Col>
          <Col md={6} lg={3} className="logo">
            <img src={ban} className="imagelogo" />
          </Col>
          <Col md={6} lg={3} className="logo">
            <img src={stratton} className="stratt" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Featured
