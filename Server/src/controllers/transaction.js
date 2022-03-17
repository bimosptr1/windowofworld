const { transaction, user } = require('../../models')

exports.addTransaction = async (req, res) => {
    try {
        const { transferProof, userId } = req.body

        const createTrans = await transaction.create({
            transferProof: transferProof,
            userid: userId,
            remainingActive: 30,
            userStatus: "Active",
            paymentStatus: "Approved",
        })

        res.send({
            status: 'success',
            data: {
                transaction: { id: createTrans.id },
                transferProof: createTrans.remainingActive,
                userStatus: createTrans.userStatus,
                paymentStatus: createTrans.paymentStatus
            },
        })
    } catch (error) {
        res.status(400).send({
            status: 'Bad Request',
            message: error
        })
        console.log(error)
    }
}

exports.getTransaction = async (req, res) => {
    try {
        const allTrans = await transaction.findAll({
            include: [{
                model: user,
                as: "user",
                attributes: {
                    exclude: ["createdAt", "updatedAt", "password", "role", "id"],
                },
            },
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        })

        res.send({
            status: 'success',
            data: {
                allTrans,
            }
        })
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            massage: error
        })
    }
}

exports.getTransactionId = async (req, res) => {
    try {
        const id = req.params
        const trans = await transaction.findOne({
            include: [{
                model: user,
                as: "user",
                attributes: {
                    exclude: ["createdAt", "updatedAt", "password", "role", "id"],
                },
            },
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        }, { where: id });

        res.send({
            status: 'success',
            data: {
                trans
            }
        })
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            massage: error
        })
    }
}

exports.updateTransaction = async (req, res) => {
    try {
        const id = req.params
        const trans = req.body

        await transaction.update({
            transferProof: trans.transferProof,
            remainingActive: trans.remainingActive,
            userStatus: trans.userStatus,
            paymentStatus: trans.paymentStatus
        }, { where: id })

        const newTrans = await transaction.findOne({
            include: [{
                model: user,
                as: "user",
                attributes: {
                    exclude: ["createdAt", "updatedAt", "password", "role", "id"],
                },
            },
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        }, { where: id });
        res.send({
            status: 'success',
            data: {
                newTrans
            }
        })
    } catch (error) {
        res.status(400).send({
            status: 'Bad Request',
            message: error
        })
    }
}