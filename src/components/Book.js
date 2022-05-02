import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Samplebook from "../../static/sample4.png"
import barnes from "../../static/barns.png"
import amazon from "../../static/amaz1.png"
import bam from "../../static/bam1.png"
import goodreads from "../../static/goodreads1.png"
import Seo from "./Seo"
const Book = () => {
  return (
    <div className="container-fluid Authorbook" id="book">
      <Container fluid>
        <Row>
          <Col sm={12} md={6} lg={6} className="Authorbook__Bookdesc">
            <img src={Samplebook} className="samplebook" />
          </Col>
          <Col sm={12} md={6} lg={6} className="Authorbook__Samplebook">
            <h1 className="Aboutbookheader">About the book</h1>
            <p className="Aboutbook">
              This is a story about a little boy who learns that everything that
              is fun cannot always be found in a toy box, or even in a book. A
              story about a little red house with no windows, no doors, and a
              star inside. Jimmy starts out on an adventure that takes him many
              places, meets many people, and learns to trust in others as well
              as himself. This is a wonderful story about the love and trust a
              mother has for her son. Also, a story about always believing in
              yourself and anything is possible.
            </p>
            <div className="store container-fluid">
              {/* <h3>Book Available in</h3> */}

              <div className="container ebook">
                <h2 className="headings">Ebook</h2>
                <Link
                  to="https://www.amazon.com/Little-Red-House-Nancy-Armstrong-ebook/dp/B08Q6HWZWQ/ref=sr_1_1?crid=2Q3QYE4YSJ1XC&keywords=little+red+house+nancy+armstrong&qid=1650529582&sprefix=little+red+house+nancy+armstrong%2Caps%2C319&sr=8-1"
                  target="_blank"
                >
                  <img className="logos" src={amazon} />
                </Link>

                <Link
                  to="https://www.barnesandnoble.com/w/the-little-red-house-nancy-armstrong/1138446333?ean=9781648952975"
                  target="_blank"
                >
                  <img className="logos" src={barnes} />
                </Link>
              </div>
              {/* line */}
              <h2 className="headings">Paperback</h2>
              <Link
                to="https://www.amazon.com/Little-Red-House-Nancy-Armstrong/dp/1648952968/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1614719041&sr=8-1"
                target="_blank"
              >
                <img className="logos" src={amazon} />
              </Link>

              <Link
                to="https://www.barnesandnoble.com/w/the-little-red-house-nancy-armstrong/1138446333?ean=9781648952968"
                target="_blank"
              >
                <img className="logos" src={barnes} />
              </Link>
              <Link
                to="https://www.booksamillion.com/p/Little-Red-House/Nancy-Armstrong/9781648952968?id=8158356429268"
                target="_blank"
              >
                <img className="logos" src={bam} />
              </Link>
              <Link
                to="https://www.goodreads.com/book/show/56362404-the-little-red-house?from_search=true&from_srp=true&qid=zbZqftJFcS&rank=1"
                target="_blank"
              >
                <img className="logos" src={goodreads} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Book
