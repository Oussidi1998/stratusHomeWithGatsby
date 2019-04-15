import React from "react"
import { Container, Row, Col, Button, FormGroup, Form, Input } from "reactstrap"
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
              <div className="coverFirstRow">
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
                  <Form className="formGetStarted">
                    <FormGroup>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="emailInput"
                      />
                    </FormGroup>
                    <Button className="coverButton" color="primary">
                      Get Started
                    </Button>
                  </Form>
                </p>
              </div>
            </ReactWOW>
          </Col>
          <Col sm="12" md="6" className="d-none d-sm-block">
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
