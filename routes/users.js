var express = require('express');
var nodemailer = require('nodemailer')
var smtptransport = require('nodemailer-smtp-transport')
var router = express.Router();

var transpoter = nodemailer.createTransport(smtptransport({
  service : 'gmail',
  host:'smtp.gmail.com',
  Port: 25,
  secure : false,
  requireTLS :true, 
    auth:{
    user:'saifaligsa41@gmail.com',
    pass:'19196gsa$@!('
  }
}));



/* GET users listing. */
router.post('/mail', function(req, res, next) {
 console.log(req.body);
   res.send("Thank's  to give a feedback" )
    // res.status(200,{ message:'mailed succesfully'})
   var mailOptions = {
    from : 'saifaligsa41@gmail.com',
    to : req.body.email,
    subject : req.body.subject,
    text : `<h3>Hi</h3> ${req.body.name}
             <p>thank you visit our website and </p>
             <p>Thank to give a feedback  to us </p>
             <p>we have seen  your feedback and analyse</p>
             <p>orur team working on this they will contact to him </p>
             <p> to this number <a> ${req.body.phone}</a>  please update it</p>
              

              <h3>Thank's<h3/>
              <p>Regad Md Saif<p/>
             `,
  } 
  
  transpoter.sendMail( mailOptions , (error, info) =>{
  if(error){
    console.log(error)
  }
  else{
    console.log('Email sent',info)
  }
  })
  
});


module.exports = router;