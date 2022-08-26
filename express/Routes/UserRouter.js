const express = require('express')
const router = express.Router()
const {UserList} = require('../UserList')


router.get('/',(req,res)=>{
    res.json(UserList)
})

router.post('/',(req,res)=>{
    const addedUser = [...UserList, req.body] 
    res.json(addedUser)
})

router.put('/:id',(req,res)=>{
    const UpadatedUsers= UserList.map(user=> (user.id === +req.params.id)? {...user, ...req.body} : user)
    res.json(UpadatedUsers)
})

router.delete('/:id',(req,res)=>{
    const DeletedUser = UserList.filter(user=> user.id !== +req.params.id)
    res.json(DeletedUser)
})

module.exports = router