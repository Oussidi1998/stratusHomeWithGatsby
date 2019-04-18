import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./footer.css"

const Footer = () => {
  return (
    <div className="copyright text-center">
      Made with <span className="material-icons">favorite_border</span> by
      &nbsp;
      <a href="https://themovation.com">Themovation</a>
    </div>
  )
}

export default Footer
