const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name,) => {
    sgMail.send({
        to: email,
        from: 'hiteshdhameliya32@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }).then(() => {
        
    }).catch((error) => {
        console.log(error)
    })
}

const sendCancelEmail = (email, name,) => {
    sgMail.send({
        to: email,
        from: 'hiteshdhameliya32@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}, I hope to see you back in sometime soon.`
    }).then(() => {
        
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}