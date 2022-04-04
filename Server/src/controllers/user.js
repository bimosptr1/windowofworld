const { user } = require('../../models')

exports.getUser = async (req, res) => {
    try {
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

exports.getUserDetail = async (req, res) => {
    const id = req.user.id;

    try {
        const data = await user.findOne({
            where: { id: id, },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });

        if (!data) {
            return res.send({
                status: "failed",
                message: "data not found",
            });
        }

        res.status(200).send({
            status: "success",
            data: {
                user: data
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            massage: error
        });
    }
};

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