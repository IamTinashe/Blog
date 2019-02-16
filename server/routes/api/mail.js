const express = require('express')
const sgMail = require('@sendgrid/mail')

const router = express.Router()
const sendGridKey = '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'
sgMail.setApiKey(sendGridKey);


//GetPost
router.post('/', async (req, res) => {
  var name = req.body.name
  var email = req.body.email
  var phone = req.body.phone
  var message = req.body.message
  const msg = {
    to: 'tinashe.zvihwati@gmail.com',
    from: name + '<' + email + '>',
    replyTo: email,
    subject: 'Email from ' + name,
    text: name + ' sent an email',
    html: '<p>Phone: ' + phone + '</p> <p>Email: ' + email + '</p><p>' + message + '</p>',
  }
  sgMail.send(msg)
  res.status(201).send()
})

module.exports = router;
