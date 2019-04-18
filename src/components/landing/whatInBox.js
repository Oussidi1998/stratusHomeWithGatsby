import React from "react"
import { Container } from "reactstrap"
import "./whatInBox.css"

const WhatInBox = () => {
  return (
    <Container className="what_in_box">
      <div className="section-title text-center">
        <h1>What's in the box</h1>
        <p>
          All your favourite things about Trello,plus extra fun <br />
          add functionality.Great for individual Trello users.
        </p>
      </div>
      <div className="boxItems">
        <div className="item">
          <div className="itemText">
            <p>
              <b>
                Reach customers through Text, audio and video chat directly from
                your website.
              </b>
            </p>
            <p>
              Sappien integrates to your website via a widget that floats on the
              bottom-right side of the screen
            </p>
          </div>
          <div className="checkImg">
            <span className="material-icons">done</span>
          </div>
        </div>
        <div className="item">
          <div className="itemText">
            <p>
              <b>Proactively engage customers using heads-up messages.</b>
            </p>
            <p>
              Send a message to customers who are dwelling on your pricing page.
            </p>
          </div>
          <div className="checkImg">
            <span className="material-icons">done</span>
          </div>
        </div>
        <div className="item">
          <div className="itemText">
            <p>
              <b>
                Know what customers need your assistance through our smart alert
                system.
              </b>
            </p>
            <p>Abandoned Checkout, Exit Intent, Pricing page drop-off etc.</p>
          </div>
          <div className="checkImg">
            <span className="material-icons">done</span>
          </div>
        </div>
        <div className="item">
          <div className="itemText">
            <p>
              <b>
                Get an overview of what customers are doing on your website.
              </b>
            </p>
            <p>
              What products they’re Looking at. Where are they in the conversion
              funnel, etc.
            </p>
          </div>
          <div className="checkImg">
            <span className="material-icons">done</span>
          </div>
        </div>
        <div className="item">
          <div className="itemText">
            <p>
              <b>
                Help your customers add products to their cart directly from
                chat.
              </b>
            </p>
            <p>
              Help customers who are looking for a specific product to add it to
              their cart
            </p>
          </div>
          <div className="checkImg">
            <span className="material-icons">done</span>
          </div>
        </div>
        <div className="item">
          <div className="itemText">
            <p>
              <b>
                Generate on-time coupons, Create Custom bundles for each
                customer
              </b>
            </p>
            <p>
              Convert price sensitive customers by generating coupons, or
              cross-sell using custom bundles
            </p>
          </div>
          <div className="checkImg">
            <span className="material-icons">done</span>
          </div>
        </div>
        <div className="item">
          <div className="itemText">
            <p>
              <b>Get customers to do specific tasks in exchange of rewards.</b>
            </p>
            <p>
              Give your users coupons in exchange for them answering questions,
              liking a page, etc.
            </p>
          </div>
          <div className="checkImg">
            <span className="material-icons">done</span>
          </div>
        </div>
        <div className="item">
          <div className="itemText">
            <p>
              <b>Quickly connect Sappien to your ecommerce engine</b>
            </p>
            <p>
              Whether you are using Shopify or Woocommerce, Sappien quickly
              integrates to your ecommerce website
            </p>
          </div>
          <div className="checkImg">
            <span className="material-icons">done</span>
          </div>
        </div>
        <div className="item">
          <div className="itemText">
            <p>
              <b>
                Get feedback from your customers about your sales performance
              </b>
            </p>
            <p>
              At the end of every call, your customers will be able to rate
              their sales experience
            </p>
          </div>
          <div className="checkImg">
            <span className="material-icons">done</span>
          </div>
        </div>
        <div className="item">
          <div className="itemText">
            <p>
              <b>
                Evaluate your overall sales performance through our dashboard
              </b>
            </p>
            <p>
              Sappien allows you to evaluate your ROI, track your overall sales
              performance and evaluate your sales reps
            </p>
          </div>
          <div className="checkImg">
            <span className="material-icons">done</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default WhatInBox
