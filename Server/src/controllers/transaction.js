const { transaction, user } = require('../../models')

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

exports.addTransaction = async (req, res) => {
    try {
        const { phoneNumber } = req.body
        const idUser = req.user.id;

        const image = req.files.transferProof[0].filename;

        const createTrans = await transaction.create({
            phoneNumber: phoneNumber,
            transferProof: image,
            userid: idUser, //req ke user
            remainingActive: 30,
            userStatus: "Not Active",
            paymentStatus: "Pendding",
        })

        res.send({
            status: 'success',
            data: {
                transaction: { id: createTrans.id },
                transferProof: createTrans.transferProof,
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

exports.getTransactionId = async (req, res) => {
    try {
        const id = req.user.id
        console.log(id);
        const trans = await transaction.findOne({
            where: { userid: id },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
            include: [
                {
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password", "role", "id", "gender", "phone", "address"],
                    },
                }]
        });

        if (!trans) {
            return res.send({
                status: "failed",
                message: "data not found",
            });
        }

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

exports.patchApprove = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        // const trans = await transaction.findOne({
        //     where: { userid: id },
        //     attributes: {
        //         exclude: ["createdAt", "updatedAt"],
        //     },
        //     include: [
        //         {
        //             model: user,
        //             as: "user",
        //             attributes: {
        //                 exclude: ["createdAt", "updatedAt", "password", "role", "id", "gender", "phone", "address"],
        //             },
        //         }]
        // });

        // if (!trans) {
        //     return res.send({
        //         status: "failed",
        //         message: "data not found",
        //     });
        // }

        await transaction.update({
            userStatus: "Subscribed",
            paymentStatus: "Approved"
        }, { where: { userid: id } })

        res.send({
            status: 'success',
            data: {
                trans
            }
        })
    } catch (error) {
        res.status(400).send({
            status: 'Bad Request',
            message: error
        })
    }
}

exports.patchDecline = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        // const trans = await transaction.findOne({
        //     where: { userid: id },
        //     attributes: {
        //         exclude: ["createdAt", "updatedAt"],
        //     },
        //     include: [
        //         {
        //             model: user,
        //             as: "user",
        //             attributes: {
        //                 exclude: ["createdAt", "updatedAt", "password", "role", "id", "gender", "phone", "address"],
        //             },
        //         }]
        // });

        // if (!trans) {
        //     return res.send({
        //         status: "failed",
        //         message: "data not found",
        //     });
        // }

        await transaction.update({
            userStatus: "Not Subscribe",
            paymentStatus: "Decline"
        }, { where: { userid: id } })

        res.send({
            status: 'success',
            data: {
                trans
            }
        })
    } catch (error) {
        res.status(400).send({
            status: 'Bad Request',
            message: error
        })
    }
}