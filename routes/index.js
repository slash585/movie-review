const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send('İndex page')
})

module.exports = router