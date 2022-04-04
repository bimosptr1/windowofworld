const { user, mybooks, books } = require("../../models");

exports.getmybook = async (req, res) => {
    try {
        let data = await mybooks.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
            include: [{ all: true, nested: true }]
        });

        res.send({
            status: "success",
            data: {
                mylistbook: data,
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: error
        });
    }
};

exports.getmybookid = async (req, res) => {
    try {
        const iduser = req.user.id;

        let allBook = await mybooks.findAll({
            where: { userId: iduser },
            attributes: {
                exclude: ["createdAt", "updatedAt", "booksId"],
            },
            include: [{
                model: books,
                as: "books",
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
            }]
        });

        res.send({
            status: "success",
            data: {
                allBook
            }
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: error
        });
    }
};

exports.addmybook = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params

        console.log(22222222222, id);

        const test = await mybooks.create({
            userId: userId,
            booksId: id,
        });

        console.log(3333333, test);


        res.send({
            status: "success",
            message: "Add my book finished",
            data: test
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: error
        });
    }
};
