'use strict';
const router = require('express').Router();
const Student = require('../model');


router.get('/stuff', (req, res, next) => {
    res.json([{
        name: 'nitin',
        age: 34
    },
    {
        name: 'suresh',
        age: 45
    }
    ]);
});

router.get('/stuff1', (req, res, next) => {
    res.json([{
        name: 'amit',
        age: 25
    }, {
        name: 'nitin',
        age: 34
    }]);
});

/*
please start mongo db to get the data
*/
router.get('/student', (req, res, next) => {
    Student.find(function (err, students) {
            if (err){
                console.log('error in find');
                res.send(err);
            }
            res.json(students);
        });

});
    
router.get('/', (req, res, next) => {
    res.render('index');
});
module.exports = {
    router: router
}