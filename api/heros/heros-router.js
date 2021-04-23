const router = require('express').Router()
const Hero = require('./heros.model');

router.get('/:hero_id', (req, res, next) => {
    // Hero.getByHeroId(req.params.hero_id)
    // .then(resource => {
    //     res.status(200).json(resource)
    // })
    // .catch(next)
    next()
})


router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router