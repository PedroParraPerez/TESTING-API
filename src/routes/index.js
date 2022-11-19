const { Router } = require('express')
const router = Router()

// DATA BASE

const DDBB = require('../../dataBase.json')

// ROUTES

router.get('/', (req, res) => {
    res.json(({ title: 'TESTING API' }))
})
router.get('/results', (req, res) => {
    res.json({ data: DDBB })
})
router.get(`/first_result/:key/:key_value`, (req, res) => {
    const { results } = DDBB
    console.log(req.params)
    const data = results.filter(result => result[req.params.key] == req.params.key_value)
    res.json({ data })
})

module.exports = router;
