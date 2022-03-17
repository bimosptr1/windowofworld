const { user } = require('../../models')

exports.getUser = async (req, res) => {
    try {
        // const {email, password, fullName, role} = req.body
        const findUser = await user.findAll()
        res.send({
            status: 'success',
            data: {
                user: findUser
            }
        })
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            massage: error
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params
        const delUser = await user.destroy({ where: id });

        res.send({
            status: 'success',
            data: {
                user: id
            }
        })
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            massage: error
        })
    }
}