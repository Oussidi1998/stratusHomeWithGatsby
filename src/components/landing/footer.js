import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./footer.css"
import fb from "../../images/fb.png"
import tw from "../../images/tw.png"
import insta from "../../images/insta.png"

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs="12" md="4" sm="6">
            <div className="widget-inner">
              <h3 className="widget-title">About Us</h3>
              <div className="textwidget">
                <p>
                  Stratus is a powerful WordPress theme designed for app, SaaS,
                  &amp; tech startups, including all the important features you
                  need to make your business successful.
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12" md="4" sm="6">
            <div className="widget-inner">
              <h3 className="widget-title">Contact Info</h3>
              <div className="th-contact-info-widget">
                <p>
                  <a target="_blank" href="mailto:contact@ourdomain.com">
                    <span className="material-icons">mail_outline</span>
                    <span>&nbsp;&nbsp;contact@themovation.com</span>
                  </a>
                </p>
                <p>
                  <a target="_blank" href="tel:800-222-4545">
                    <span className="material-icons">call</span>
                    <span>&nbsp;&nbsp;1-800-222-4545</span>
                  </a>
                </p>
                <p>
                  <a href="#">
                    <span className="material-icons">map</span>
                    <span>&nbsp;&nbsp;Location</span>
                  </a>
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12" md="4" sm="6">
            <div className="widget-inner">
              <h3 className="widget-title">Recent Posts</h3>
              <ol className="recent-posts">
                <li>
                  <a href="https://demo.themovation.com/stratus/blog/2018/09/10/banking-with-digital-currency/">
                    Banking With Digital Currency
                  </a>
                  <span className="post-date">September 10, 2018</span>
                </li>
                <li>
                  <a href="https://demo.themovation.com/stratus/blog/2018/08/22/can-i-mine-and-is-it-worth-it/">
                    Can I Mine And Is It Worth It?
                  </a>
                  <span className="post-date">August 22, 2018</span>
                </li>
                <li>
                  <a href="https://demo.themovation.com/stratus/blog/2018/08/18/how-blockchain-is-redefining-trust/">
                    How Blockchain Is Redefining Trust
                  </a>
                  <span className="post-date">August 18, 2018</span>
                </li>
                <li>
                  <a href="https://demo.themovation.com/stratus/blog/2018/07/16/effective-product-promo-videos/">
                    Effective Product Promo Videos
                  </a>
                  <span className="post-date">July 16, 2018</span>
                </li>
              </ol>
            </div>
          </Col>
          <Col xs="12" md="4" sm="6">
            <div className="widget-inner">
              <h3 className="widget-title">Payments Accepted</h3>
              <div className="textwidget">
                <p>
                  <a href="#" className="payMethod">
                    PayPal
                  </a>
                  &nbsp;&nbsp;
                  <a href="#" className="payMethod">
                    Visa
                  </a>
                  &nbsp;&nbsp;
                  <a href="#" className="payMethod">
                    MasterCard
                  </a>
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12" md="4" sm="6">
            <div className="widget-inner">
              <h3 className="widget-title">Socialize</h3>
              <div className="textwidget">
                <p>
                  <a href="#" className="socia-item">
                    <img src={fb} alt="Follow us on facebook" />
                  </a>
                  &nbsp;&nbsp;
                  <a href="#" className="socia-item">
                    <img src={tw} alt="Follow us on Twitter" />
                  </a>
                  &nbsp;&nbsp;
                  <a href="#" className="socia-item">
                    <img src={insta} alt="Follow us on Instagram" />
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright text-center">
        Made with <span className="material-icons">favorite_border</span> by
        &nbsp;
        <a href="https://themovation.com">Themovation</a>
      </div>
    </div>
  )
}

export default Footer
