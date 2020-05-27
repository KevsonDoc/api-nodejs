const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const { host, port, user, password } = require('../config/mail.json');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
});

transport.use('compile', hbs({
    viewEngine: 'hadleBars',
    viewPath: path.resolve('./src/resouces/mail'),
    extName: '.html',
}))

module.exports = transport;