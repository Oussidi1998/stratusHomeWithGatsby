import React from "react"
import { Row, Col, Container } from "reactstrap"
import "./sections.css"
import setup_quickly from "../../images/setup_quickly.png"
import build_coll from "../../images/build_coll.png"
import accessible from "../../images/accessible.png"
import backed_team from "../../images/backed_team.png"

const Section_one = () => {
  return (
    <section className="section-one">
      <div className="section-title text-center">
        <h1>The world’s first skeuomorphic sales platform</h1>
        <p>
          More than a simple messaging platform - We built Sappien to offfer
          online salespeople <br />
          everything that they need to engage, convert and retain their
          customers.
        </p>
      </div>
      <div className="item d-sm-none d-none d-md-block">
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
              <h4>Personalized Sales</h4>
              <h2>Adapt your online sales to each customer</h2>
              <p>
                Sappien gives you all the tools that you need to adapt your
                sales approach to each customer. Direct your customers to the
                right product, Generate one-time coupons, Build Custom bundles
                on the fly, and more... directly from chat.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="item d-block d-md-none">
        <Container>
          <Row
            style={{
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <Col xs="12" md="6">
              <h4>Personalized Sales</h4>
              <h2>Adapt your online sales to each customer</h2>
              <p>
                Sappien gives you all the tools that you need to adapt your
                sales approach to each customer. Direct your customers to the
                right product, Generate one-time coupons, Build Custom bundles
                on the fly, and more... directly from chat.
              </p>
            </Col>
            <Col xs="12" md="6">
              <img src={setup_quickly} alt="Get setup quickly" />
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
              <h4>Personalized Sales</h4>
              <h2>Adapt your online sales to each customer</h2>
              <p>
                Sappien gives you all the tools that you need to adapt your
                sales approach to each customer. Direct your customers to the
                right product, Generate one-time coupons, Build Custom bundles
                on the fly, and more... directly from chat.
              </p>
            </Col>
            <Col xs="12" md="6">
              <img src={build_coll} alt="Build With Collaboration" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="item d-sm-none d-none d-md-block">
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
              <h4>Improved targeting</h4>
              <h2>Never lose an interested customer again!</h2>
              <p>
                Get a global overview of what your visitors are doing on your
                website. Know what customers are most interested in what you
                offer. Get informed you when the time is right to approach a
                customer.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="item d-block d-md-none">
        <Container>
          <Row
            style={{
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <Col xs="12" md="6">
              <h4>Improved targeting</h4>
              <h2>Never lose an interested customer again!</h2>
              <p>
                Get a global overview of what your visitors are doing on your
                website. Know what customers are most interested in what you
                offer. Get informed you when the time is right to approach a
                customer.
              </p>
            </Col>
            <Col xs="12" md="6">
              <img src={accessible} alt="Accessible on all your devices" />
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
              <h4>Detailed reporting</h4>
              <h2>All the data that you need to improve your sales</h2>
              <p>
                Give a voice to your customers and let them rate your sales
                reps. Evaluate the ROI of your online sales, identify your best
                performing sales reps and determining your most effective sales
                strategies.
              </p>
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
