import React from "react"
import { Row, Col, Container } from "reactstrap"
import ReactWOW from "react-wow"
import "./sections.css"
import setup_quickly from "../../images/setup_quickly.png"
import build_coll from "../../images/build_coll.png"
import accessible from "../../images/accessible.png"
import backed_team from "../../images/backed_team.png"

const Section_one = () => {
  return (
    <section className="section-one">
      <div className="section-title text-center">
        <ReactWOW animation="fadeIn">
          <h1>Powerful, yet simple</h1>
          <p>
            Everything has been intentionally designed to include the features
            you want,
            <br /> right where you need them - without being overly complicated.
          </p>
        </ReactWOW>
      </div>
      <div className="item">
        <Container>
          <Row
            style={{
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <Col xs="12" md="6">
              <img src={setup_quickly} alt="Get setup quickly" />
            </Col>
            <Col xs="12" md="6">
              <ReactWOW animation="fadeInRight">
                <h4>INTUITIVE</h4>
                <h2>Get setup quickly</h2>
                <p>
                  Vestibulum fringilla mauris ipsum, vel tristique libero
                  pellentesque.
                </p>
              </ReactWOW>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="item">
        <Container>
          <Row
            style={{
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <Col xs="12" md="6">
              <ReactWOW animation="fadeInLeft">
                <h4>WORK TOGETHER</h4>
                <h2>Built for collaboration</h2>
                <p>
                  Quisque vehicula, massa vel finibus gravida, velit dolor
                  ultrices turpis at.
                </p>
              </ReactWOW>
            </Col>
            <Col xs="12" md="6">
              <img src={build_coll} alt="Build With Collaboration" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="item">
        <Container>
          <Row
            style={{
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <Col xs="12" md="6">
              <img src={accessible} alt="Accessible on all your devices" />
            </Col>
            <Col xs="12" md="6">
              <ReactWOW animation="fadeInRight">
                <h4>WEB AND APPS</h4>
                <h2>Accessible on all your devices</h2>
                <p>
                  Fusce non metus et sem malesuada imper diet ac eget odio
                  nulla.
                </p>
              </ReactWOW>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="item">
        <Container>
          <Row
            style={{
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <Col xs="12" md="6">
              <ReactWOW animation="fadeInLeft">
                <h4>AVAILABLE 24/7</h4>
                <h2>Backed by an amazing support team</h2>
                <p>
                  Sed iaculis eleifend posuere. In mattis luctus cursus duis
                  lacus risus gravida.
                </p>
              </ReactWOW>
            </Col>
            <Col xs="12" md="6">
              <img src={backed_team} alt="Backed by an amazing support team" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Section_one
