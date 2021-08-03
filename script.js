const nodemailer = require("nodemailer")

async function main() {

    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "personality@bpn.ch", // generated ethereal user
            pass: "Ros61695", // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'personality@bpn.ch', // sender address
        to: "ten.djenia@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?",
        attachments: [{
            filename:"kek",
            path:"./script.js"
        }]
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);


function getItem() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("kek")
            res()
        }, 300)
    })
}

function test() {
    getItem()
    console.log("KEK")

}

test()