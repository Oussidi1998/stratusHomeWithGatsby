import React from "react"
import { Row, Col, Container, Button, Form, FormGroup, Input } from "reactstrap"
import "./buttomGreenCard.css"

class ButtomGreenCard extends React.Component {
  state = {
    send: false,
    email: "",
  }

  async SendMsg(e) {
    e.preventDefault()
    const email = this.state.email
    fetch(`http://127.0.0.1:8001/send?email=${email}`).catch(err =>
      console.log(err)
    )
    this.setState({
      send: true,
    })
  }
  changeHandler(e) {
    this.setState({
      email: e.target.value,
    })
  }
  render() {
    return (
      <div className="cardButtom">
        <Container>
          <Row>
            <Col sm="12" md="7">
              <h1>
                What are you waiting for - x10 your conversion rates today
              </h1>
              <p>
                Join our closed beta to get a live demo of our tool and a free 3
                months trial!
              </p>
            </Col>
            <Col sm="12" md="5">
              {this.state.send ? (
                <h3 className="sayThanks">Thanks for Contacting us</h3>
              ) : (
                <p>
                  <Form
                    name="joinBeta"
                    method="post"
                    className="formGetStarted"
                    onSubmit={this.SendMsg.bind(this)}
                  >
                    <FormGroup>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="emailInput"
                        required
                        value={this.state.email}
                        onChange={this.changeHandler.bind(this)}
                      />
                    </FormGroup>
                    <Button
                      className="coverButton"
                      color="primary"
                      type="submit"
                    >
                      Join Our Beta
                    </Button>
                  </Form>
                </p>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default ButtomGreenCard
