const express=require('express');

const router=express.Router();

const uersController=require('../controllers/users_controller');

router.get('/profile',uersController.profile);

module.exports=router;