const express = require("express");
const router = express.Router();

const { register, login, editProfile } = require('../controllers/auth')
const { getUser, deleteUser, getUserDetail } = require('../controllers/user')
const { addBook, getBooks, getBookId, delBook, updateBook } = require('../controllers/book')
const { addTransaction, getTransaction, getTransactionId, patchApprove, patchDecline } = require('../controllers/transaction')
const { getmybook, addmybook, getmybookid } = require('../controllers/mylistbook')

const { auth } = require("../middlewares/auth");
const { uploadFile } = require("../middlewares/uploadFile");

router.post('/register', register)
router.post('/login', login)
router.patch('/editprofile/:id', editProfile)

router.get('/users', getUser)
router.get('/user', auth, getUserDetail)
router.delete('/users/:id', auth, deleteUser)

router.post('/addBook', uploadFile("bookFile"), addBook)
router.get('/books', getBooks)
router.get('/book/:id', getBookId)
router.delete('/book/:id', auth, delBook)
router.patch('/book/:id', auth, updateBook)

router.post('/transaction', auth, uploadFile("transferProof"), addTransaction)
router.get('/transaction', getTransaction)
router.get('/transactionid', auth, getTransactionId)
router.patch("/transaction/approve/:id", patchApprove);
router.patch("/transaction/decline/:id", patchDecline)

router.get('/mylistbook', getmybook)
router.get('/mylistbookid', auth, getmybookid)
router.post('/mylistbook/:id', auth, addmybook)


module.exports = router;