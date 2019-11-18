const nodeoutlook = require('nodejs-nodemailer-outlook')
const conf = require("./config")

exports.send = function (to, subject, content) {
    nodeoutlook.sendEmail({
        auth: {
            user: conf.EMAIL_ADDRESS,
            pass: conf.EMAIL_PASS
        },
        from: conf.EMAIL_ADDRESS,
        to: to,
        subject: subject,
        html: content,
        text: content,
        replyTo: conf.EMAIL_ADDRESS,
        attachments: [
        ],
        onError: (e) => console.log("error:" + e),
        onSuccess: (i) => console.log("success:" + i)
    });
}
