const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')
const { StatusCodes } = require('http-status-codes')

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount()
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })
  let info = await transporter.sendMail({
    from: `Abhishek Singh <abhisheksinghxix@gmail.com>`,
    to: 'abhisingh78896@gmail.com',
    subject: 'Hello',
    html: `<h2>Sending emails with nodejs</h2>`,
  })
  res.json({ info })
}

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: process.env.TARGET,
    from: process.env.SENDER,
    subject: 'Sending with sendgrid',
    text: 'easy work',
    html: '<strong>nodejs mail</strong>',
  }
  const info = await sgMail.send(msg)
  res.status(StatusCodes.OK).json({ info })
}

module.exports = sendEmail
