import React from "react"
import { Container, Row, Col, Button, FormGroup, Form, Input } from "reactstrap"
import cover from "../../images/cover.png"
import "./cover.css"

class Cover extends React.Component {
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
      send: false,
    })
  }
  changeHandler(e) {
    this.setState({
      email: e.target.value,
    })
  }
  render() {
    return (
      <div className="cover">
        <Container
          style={{
            padding: `2rem 0 2rem 0`,
            maxWidth: `85%`,
          }}
        >
          <Row id="cover">
            <Col sm="12" md="6">
              <div className="coverFirstRow">
                <h1
                  style={{
                    fontFamily: `"lato", "roboto", "verdana", sans-serif`,
                    fontSize: `3rem`,
                  }}
                >
                  A new, better and more personal way to sell online!
                </h1>
                <p>
                  Bring the best of in-real-life sales online. Establish real
                  connections with your visitors and convert more customers!
                </p>
                {this.state.send ? (
                  <p>Thanks for Contacting us</p>
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
              </div>
            </Col>
            <Col sm="12" md="6" className="d-none d-sm-block">
              <img src={cover} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Cover
