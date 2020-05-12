//all routes handled here

const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const deleteCardController=require('../controllers/deleteCard')
const createCardController=require('../controllers/createCard')

console.log('router loaded');

//for fetching all the cards.This is the home page
router.get('/', homeController.home);
//when a user clicks deleteCard button
router.get('/delete-card',deleteCardController.deleteCard );
//for creating the card when a form is submitted
router.get('/create-card',createCardController.createCard)


//export router to index.js
module.exports = router;