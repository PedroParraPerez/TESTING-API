const { Router } = require('express')
const router = Router()

// DATA BASE

const DDBB = require('../../dataBase.json')

// ROUTES

router.get('/', (req, res) => {
    res.json(({title: 'TESTING API'}))
})
router.get('/notifications', (req, res) => {
    res.json( {data: DDBB})
})
router.post('/notifications', (req, res) => {
    const { dale } = req.body
    console.log(dale)
    console.log(req.body)
    res.send('recibido')
})

module.exports = router;