const express = require("express")
const bodyParser = require("body-parser")
const sgMail = require("@sendgrid/mail")

const app = express()

sgMail.setApiKey(
  "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"
)

app.use(bodyParser.json())

app.get("/send", (req, res) => {
  const msg = {
    to: "osidi1998@gmail.com",
    from: req.query.email,
    subject: "Join Our Beta",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  }
  sgMail.send(msg)
})

const PORT = process.env.PORT || 8001

app.listen(PORT, () => {
  console.log("server listening on port " + PORT)
})
