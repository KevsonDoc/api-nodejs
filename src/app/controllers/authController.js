const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');
const crypto = require('crypto');
const mailer = require('../../mudules/mailer');

const router = express.Router();

function generateToken(pasrams = {}) {
    return jwt.sign(pasrams, authConfig.secret, {
        expiresIn: 86400,
    });
}

/*==================================== | REGISTRO | ===============================================*/

router.post('/register', async(req, res) => { //Rota de registro

    const { email } = req.body;

    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'User already exist' });

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({
            user,
            token: generateToken({ id: user.id }),
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Registration falied' });
    }
});

/*==================================== | AUTENTICAÇÃO | ==========================================*/

router.post('/authenticate', async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user)
        return res.status(400).send({ error: 'User not found' });
    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid password' });
    user.password = undefined;

    const token = res.send({
        user,
        token: generateToken({ id: user.id }),
    });
});

/*================================= | RECUPERAÇÃO DE SENHA| =======================================*/

router.post('/forgot_password', async(req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user)
            return res.status(400).send({ error: 'User not found' });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(User.id, {
            passwordResetToken: token,
            passwordResetExpires: now
        });

        mailer.sendMail({
            to: email,
            from: 'kevsonfilipesantos@gmail.com',
            template: 'forgot_password',
            context: { token },
        }, (err) => {
            if (err)
                return res.status(400).send({ error: 'Cannot send forgot passsword email' }), console.log(err);
            res.send();
        })

    } catch (err) {
        console.log(err)
        res.status(400).send({ error: 'Erro on forgot password, try again' });
    }
});

module.exports = app => app.use('/auth', router);