const core = require('@actions/core');
const nodemailer = require('nodemailer');

async function run() {
  try {
    // Get inputs from the action
    const server_address = core.getInput('server_address');
    const server_port = core.getInput('server_port');
    const username = core.getInput('username');
    const password = core.getInput('password');
    const subject = core.getInput('subject');
    const body = core.getInput('body');
    const to = core.getInput('to');
    const from = core.getInput('from');

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: server_address,
      port: server_port,
      secure: true, // true for 465, false for other ports
      auth: {
        user: username,
        pass: password
      }
    });

    // Set up email data
    let mailOptions = {
      from, // sender address
      to, // list of receivers
      subject, // Subject line
      html: body // HTML body
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);

    console.log(`Message sent: ${info.messageId}`);
  } catch (error) {
    core.setFailed(error.message);
  } finally {
    // Close the connection to the SMTP server
    if (transporter) {
      transporter.close();
      console.log('SMTP connection closed');
    }
  }
}

run();
