const express=require('express');

const router=express.Router();

const homeController=require('../controllers/home_controller')
console.log('router loaded');

router.get('/',homeController.home);
router.use('./user',require('./user'));

//for any other further routes
//router.use('./routername,require('routerfile'));

module.exports=router;