import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
import ReactWOW from "react-wow"
import cover from "../../images/cover.png"
import "./cover.css"

const Cover = () => {
  return (
    <div className="cover">
      <Container
        style={{
          padding: `2rem 0 2rem 0`,
          maxWidth: `85%`,
        }}
      >
        <Row>
          <Col sm="12" md="6">
            <ReactWOW animation="fadeInUp">
              <div className="section1Cover">
                <h1
                  style={{
                    fontFamily: `"lato", "roboto", "verdana", sans-serif`,
                    fontSize: `3rem`,
                  }}
                >
                  Project Management Reimagined
                </h1>
                <p>
                  We provide all the best features so you can stop focusing on
                  your project management and get back to your life’s work.
                </p>
                <p>
                  <Button className="coverButton" color="primary">
                    Get Started
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button className="coverButton" color="primary">
                    Learn More
                  </Button>
                </p>
              </div>
            </ReactWOW>
          </Col>
          <Col sm="12" md="6">
            <ReactWOW animation="fadeIn">
              <img src={cover} />
            </ReactWOW>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cover
