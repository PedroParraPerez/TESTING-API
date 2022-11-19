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
router.get(`/first_result/:id_result`, (req, res) => {
    const { results } = DDBB
    const data = results.filter(result => result.id == req.params.id_result)
    res.json({ data })
})

module.exports = router;

console.log('test')
console.log('test2')


