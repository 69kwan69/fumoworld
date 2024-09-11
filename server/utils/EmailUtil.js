const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});
const EmailUtil = {
  send(email, id, token) {
    const text =
      'Thanks for signing up, please input these informations to activate your account:\n\t .id: ' +
      id +
      '\n\t .token: ' +
      token;
    return new Promise(function (resolve, reject) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Signup | Verification',
        text: text,
      };
      transporter.sendMail(mailOptions, function (err, result) {
        if (err) reject(err);
        resolve(true);
      });
    });
  },
};
module.exports = EmailUtil;
