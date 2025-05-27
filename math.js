function add(a, b) {
    return a + b;
}
module.exports = add;

const mymail = require('nodemailer');
let transporter = mymail.createTransport({
    service: 'gmail',
    auth: {
        user: 'tasneembanu2005@gmail.com',
        pass: 'wpeu kqec rbkb tlbg'
    }
});

for (let i = 0; i < 5; i++) {
    let mailOptions = {
        from: 'tasneembanu2005@gmail.com',
        to: 'attuluripavanaprudulasri@gmail.com',
        subject: 'I\'m inviting you to my birthday party',
        text: `I kindly request you not to attend the party. This is message number ${i}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error:", error);
        } else {
            console.log(`Email ${i + 1} sent:`, info.response);
        }
    });
}
