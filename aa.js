var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kriarpana8757@gmail.com',
    pass: 'Kumari@2002'
  }
});

var mailOptions = {
  from: 'kriarpana8757@gmail.com',
  to: 'nishiy613@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


