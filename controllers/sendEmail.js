const nodemailer = require('nodemailer')

const sendEmail = async (req, res) => {
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

module.exports = sendEmail
