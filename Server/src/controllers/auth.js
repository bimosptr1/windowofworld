const { user } = require('../../models')
const Joi = require('joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {
        const data = req.body

        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            fullName: Joi.string().min(4).required(),
            role: Joi.string().required()
        })

        const { error } = schema.validate(data)

        if (error) {
            return res.status(400).send({
                status: 'Bad Request',
                message: error.details[0].message
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hasedPassword = await bcrypt.hash(data.password, salt)

        const createUser = await user.create({
            email: data.email,
            password: hasedPassword,
            fullName: data.fullName,
            role: data.role
        })
        const secretKey = "myCustomPassword";
        const token = jwt.sign({ id: createUser.id, role: createUser.role }, secretKey);

        res.status(200).send({
            status: 'success',
            data: {
                email: createUser.email,
                fullName: createUser.fullName,
                token
            }
        })

    } catch (error) {
        res.status(400).send({
            status: 'Bad Request',
            message: error.details[0].message
        })
    }
}

exports.login = async (req, res) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);

    if (error)
        return res.status(400).send({
            error: {
                message: error.details[0].message,
            },
        });

    try {
        const userExist = await user.findOne({ where: { email: req.body.email } });
        const isValid = await bcrypt.compare(req.body.password, userExist.password);

        if (!isValid) {
            return res.status(400).send({
                status: "failed",
                message: "credential is invalid",
            });
        }

        const secretKey = "myCustomPassword";
        const token = jwt.sign({ id: userExist.id, role: userExist.role }, secretKey);

        res.status(200).send({
            status: 'success',
            data: {
                fullName: userExist.fullName,
                email: userExist.email,
                token
            }
        })

    } catch (error) {
        res.status(500).send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}