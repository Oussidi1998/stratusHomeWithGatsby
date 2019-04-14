import React from "react"
import { Row, Col, Container } from "reactstrap"
import ReactWOW from "react-wow"
import "./sections.css"
import tina from "../../images/tina.jpeg"
import kim from "../../images/kim.jpeg"
import jake from "../../images/jake.jpeg"

const Section_two = () => {
  return (
    <section className="section-two">
      <div className="section-title text-center">
        <ReactWOW animation="fadeIn">
          <h1>What customers are saying</h1>
          <p>
            Quisque ut eros eget odio accumsan mattis nec ac neque. Integer
            ornare velit a <br /> dante scelerisque, ac porttitor ornare lorem
            purus auctor.
          </p>
        </ReactWOW>
      </div>
      <div className="customersCards">
        <Container>
          <Row>
            <Col xs="12" md="4">
              <ReactWOW animation="fadeInLeft">
                <div className="card">
                  <p>
                    “Sed facilisis mauris eu felis efficitur, in scelerisque
                    lorem faucibus. Cras sit amet mi neque. Porta eu nisl sed
                    facilisis. Nunc nibh et quam viverra.”
                  </p>
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src={tina} wdith="60" height="60" />
                    </div>
                    <div className="testimonial-details">
                      <div className="testimonial-name">Tina Jones</div>
                      <div className="testimonial-job">Customer</div>
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </Col>
            <Col xs="12" md="4">
              <ReactWOW animation="fadeInUp">
                <div className="card">
                  <p>
                    “Sed facilisis mauris eu felis efficitur, in scelerisque
                    lorem faucibus. Cras sit amet mi neque. Porta eu nisl sed
                    facilisis. Nunc nibh et quam viverra.”
                  </p>
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img wdith="60" height="60" src={jake} />
                    </div>
                    <div className="testimonial-details">
                      <div className="testimonial-name">jake warren</div>
                      <div className="testimonial-job">Customer</div>
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </Col>
            <Col xs="12" md="4">
              <ReactWOW animation="fadeInRight">
                <div className="card">
                  <p>
                    “Sed facilisis mauris eu felis efficitur, in scelerisque
                    lorem faucibus. Cras sit amet mi neque. Porta eu nisl sed
                    facilisis. Nunc nibh et quam viverra.”
                  </p>
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img wdith="60" height="60" src={kim} />
                    </div>
                    <div className="testimonial-details">
                      <div className="testimonial-name">Kim Smith</div>
                      <div className="testimonial-job">Customer</div>
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Section_two
