const express = require('express');
const router = express.Router();
const passport = require('passport');
const {isLoggedIn} = require('../lib/auth');
const {isNotLoggedIn} = require('../lib/auth');

router.get('/signup', isNotLoggedIn, (req,res) => {
    res.render('auth/signup');
});

router.post('/signup', isNotLoggedIn, passport.authenticate('local.signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
}));

router.get('/signin', isNotLoggedIn, (req,res) => {
    res.render('auth/signin');
});

router.post('/signin', isNotLoggedIn, (req,res, next) => {
    passport.authenticate('local.signin',{
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req,res,next);
});

router.get('/profile', isLoggedIn, (req,res) => {
    res.render('profile');
});

router.get('/logout', isLoggedIn, (req,res) => {
    req.logOut();
    res.redirect('/signin');
});

router.get('/home', isNotLoggedIn, (req,res) => {
    res.render('home');
});

router.get('/products', isNotLoggedIn, (req,res) => {
    res.render('products');
});

router.get('/contact', isNotLoggedIn, (req,res) => {
    res.render('contact');
});

module.exports = router;