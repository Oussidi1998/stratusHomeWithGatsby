import React from "react"
import { Row, Col, Container, Button } from "reactstrap"
import "./buttomGreenCard.css"
import ReactWOW from "react-wow"

const ButtomGreenCard = () => {
  return (
    <div className="cardButtom">
      <ReactWOW animation="fadeInUp">
        <Container>
          <Row>
            <Col sm="12" md="7">
              <h1>Level up your productivity</h1>
              <p>Get started today and improve your workflow.</p>
            </Col>
            <Col sm="12" md="5">
              <Row>
                <Col>
                  <Button className="coverButton" color="primary">
                    Get Started
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="coverButton request_demo_btn"
                    color="primary"
                  >
                    Request Demo
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </ReactWOW>
    </div>
  )
}

export default ButtomGreenCard
