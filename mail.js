const mymail = require('nodemailer');
let transporter = mymail.createTransport({
    service: 'gmail',
    auth: {
        user: 'tasneembanu2005@gmail.com',
        pass: 'wpeu kqec rbkb tlbg'
    }
});

let mailArray = ["attuluripavanaprudulasri@gmail.com", "tasneembanu242k5@gmail.com", "machine.learning24k1@gmail.com"]

// email options
for (let i = 0; i < 5; i++) {

    let mailOptions = {
        from: 'tasneembanu2005@gmail.com',
        bcc: "attuluripavanaprudulasri@gmail.com,tasneembanu242k5@gmail.com,machine.learning24k1@gmail.com",
        subject: 'Im inviting you to my birthday party',
        text: 'I kindly request you not to attend the party.'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error:", error);
        }
        else {
            console.log("Email sent:", info.response);
        }
    })

}






//sending mail 

