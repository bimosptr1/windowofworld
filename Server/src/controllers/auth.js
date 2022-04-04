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
        })

        const { error } = schema.validate(data)

        if (error) {
            return res.status(200).send({
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
            role: "user",
            gender: "-",
            phone: "-",
            address: "-"
        })

        const secretKey = "myCustomPassword";
        const token = jwt.sign({ id: createUser.id }, secretKey);

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
        return res.status(200).send({
            status: "Bad Request",
            error: {
                message: error.details[0].message,
            },
        });

    try {
        const userExist = await user.findOne({ where: { email: req.body.email } });
        const isValid = await bcrypt.compare(req.body.password, userExist.password);

        if (!isValid) {
            return res.status(200).send({
                status: "Bad Request",
                message: error.details[0].message,
            });
        }

        const secretKey = "myCustomPassword";
        const token = jwt.sign({ id: userExist.id }, secretKey);

        res.status(200).send({
            status: "success",
            data: {
                fullName: userExist.fullName,
                email: userExist.email,
                role: userExist.role,
                gender: userExist.gender,
                phone: userExist.phone,
                address: userExist.address,
                token
            }
        })

    } catch (error) {
        res.status(400).send({
            status: "Bad Request",
            message: "Invalid data"
        })
    }
}

exports.editProfile = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body;

        await user.update({
            gender: data.gender,
            phone: data.phone,
            address: data.address
        }, { where: { id: id } })

        const newuser = await user.findOne({ where: { id: id } });
        res.send({
            status: 'success',
            data: {
                newuser
            }
        })

    } catch (error) {
        res.status(400).send({
            status: 'Bad Request',
            message: error,
        })
    }
}
