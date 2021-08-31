const express = require('express');
const router = express.Router();

const pool = require('../database');

const {isLoggedIn} = require('../lib/auth');

router.get('/add', isLoggedIn, (req,res)=>{
    res.render('links/add');
});

router.post('/add', isLoggedIn, async (req,res) => {
    const {title, url, description} = req.body;
    const created_at = new Date();
    const newLink = {
        title, url, description,created_at,
        user_id: req.user.id
    };
    console.log(newLink);
    await pool.query('INSERT INTO links set ?',[newLink]);
    req.flash('success', 'Links saved successfully');
    res.redirect('/links');
});

router.get('/', isLoggedIn, async (req,res) => {
     const links = await pool.query('SELECT * FROM links WHERE user_id = ?',[req.user.id]);
     res.render('links/list',{links});
});

router.get('/delete/:id', isLoggedIn, async(req,res) => {
    const {id} = req.params;
    await pool.query('DELETE FROM links WHERE id = ?',[id]);
    req.flash('success','Link deleted successfully');
    res.redirect('/links');
});

router.get('/edit/:id', isLoggedIn, async(req,res)=>{
    const {id} = req.params;
    const links = await pool.query('SELECT * FROM links WHERE id= ?',[id]);
    res.render('links/edit', {link: links[0]});
});

router.post('/edit/:id', isLoggedIn, async (req,res)=>{
    const {id} = req.params;
    const {title, description, url} = req.body;
    const updatedLink = {
        title,
        description,
        url
    };
    await pool.query('UPDATE links SET ? WHERE id = ?', [updatedLink, id]);
    req.flash('success','Link saved successfully');
    res.redirect('/links');
});

module.exports = router;