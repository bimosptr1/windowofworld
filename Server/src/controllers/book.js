const { books } = require('../../models')

exports.addBook = async (req, res) => {
    try {
        const dataBook = req.body

        const createBook = await books.create({
            title: dataBook.title,
            publicationDate: dataBook.publicationDate,
            pages: dataBook.pages,
            author: dataBook.author,
            isbn: dataBook.isbn,
            about: dataBook.about,
            bookFile: dataBook.bookFile,
        })

        res.send({
            status: 'success',
            data: {
                createBook
            }
        })
    } catch (error) {
        res.status(400).send({
            status: 'Bad Request',
            message: error
        })
    }
}

exports.getBooks = async (req, res) => {
    try {
        const allBook = await books.findAll()

        res.send({
            status: 'success',
            data: {
                allBook
            }
        })
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            massage: error
        })
    }
}

exports.getBookId = async (req, res) => {
    try {
        const id = req.params
        const book = await books.findOne({ where: id });

        res.send({
            status: 'success',
            data: {
                book
            }
        })
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            massage: error
        })
    }
}

exports.updateBook = async (req, res) => {
    try {
        const id = req.params
        const dataBook = req.body

        await books.update({
            title: dataBook.title,
            publicationDate: dataBook.publicationDate,
            pages: dataBook.pages,
            author: dataBook.author,
            isbn: dataBook.isbn,
            about: dataBook.about,
            bookFile: dataBook.bookFile
        }, { where: id })

        const book = await books.findOne({ where: id });
        res.send({
            status: 'success',
            data: {
                book
            }
        })
    } catch (error) {
        res.status(400).send({
            status: 'Bad Request',
            message: error
        })
    }
}

exports.delBook = async (req, res) => {
    try {
        const id = req.params
        const book = await books.destroy({ where: id });

        res.send({
            status: 'success',
            data: {
                book
            }
        })
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            massage: error
        })
    }
}