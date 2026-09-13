const express = require('express')
const router = express.Router()
const Note = require('../models/Note')
const fetchuser = require('../middleware/fetchUser')
const {body,validationResult}=require('express-validator')

// ROUTE 1: Get all the notes using: GET "api/notes/fetchallnotes". Login required.
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    try{
        const notes = await Note.find({user:req.user.id})
        res.json(notes)
    }catch(error){
        console.log(error.message);
        res.status(500).send('Internal Server Error occured')
    }
})

// ROUTE 2: Add a note note using: POST "api/notes/addnote". Login required.
router.post('/addnote',fetchuser,[
    body('title','Enter a valid title.').isLength({min:3}),
    body('description','Description should be of at least 5 characters.').isLength({min:5})
],async (req,res)=>{
    // If there are errors, return Bad request and the errors
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
        const {title,description,tag}=req.body;
        const note=new Note({
            title,description,tag,user:req.user.id
        })
        const savedNote=await note.save()
        res.json(savedNote)
    }catch(error){
        console.log(error.message);
        res.status(500).send('Internal Server Error occured')
    }
})

module.exports = router