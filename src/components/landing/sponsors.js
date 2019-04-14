import React from "react"
import Carousel from "nuka-carousel"
import ReactWOW from "react-wow"
import "./sponsors.css"
import spo1 from "../../images/sponsor1.png"
import spo2 from "../../images/sponsor2.png"
import spo3 from "../../images/sponsor3.png"
import spo4 from "../../images/sponsor4.png"

class Sponsors extends React.Component {
  render() {
    return (
      <ReactWOW animation="fadeIn">
        <Carousel
          className="sponsors"
          autoplay="true"
          slidesToShow="3"
          withoutControls="true"
          cellAlign="center"
          wrapAround="true"
        >
          <img src={spo1} />
          <img src={spo2} />
          <img src={spo3} />
          <img src={spo4} />
        </Carousel>
      </ReactWOW>
    )
  }
}

export default Sponsors
