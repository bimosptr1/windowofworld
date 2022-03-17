const express = require("express");
const router = express.Router();

const { register, login } = require('../controllers/auth')
const { getUser, deleteUser } = require('../controllers/user')
const { addBook, getBooks, getBookId, delBook, updateBook } = require('../controllers/book')
const { addTransaction, getTransaction, getTransactionId, updateTransaction } = require('../controllers/transaction')

const { auth } = require("../middlewares/auth");

router.post('/register', register)
router.post('/login', login)
router.get('/users', getUser)
router.delete('/users/:id', auth, deleteUser)
router.post('/addBook', auth, addBook)
router.get('/books', getBooks)
router.get('/book/:id', getBookId)
router.delete('/book/:id', auth, delBook)
router.patch('/book/:id', auth, updateBook)
router.post('/transaction', addTransaction)
router.get('/transaction', getTransaction)
router.get('/transaction/:id', getTransactionId)
router.patch('/transaction/:id', updateTransaction)

module.exports = router;