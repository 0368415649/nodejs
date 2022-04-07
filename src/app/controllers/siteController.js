const courses = require('../models/courses');
const { mutipleMongooseObject } = require('../../util/mongoose');
class siteController {
    index(req, res) {
        // courses.find({}, function (err, course) {
        //     if(!err){
        //     res.json(course);
        //     }else{
        //         res.status(400).json({ error: 'message' })
        //     }
        //   });

        courses
            .find({})
            .then((courses) => {
                res.render('home', {
                    course: mutipleMongooseObject(courses),
                });
            })
            .catch((error) => next(error));

        //  .then(course => res.render('home',{course}))
        //  .catch(error=> next(error))

        // res.render('home');
    }
    show(req, res) {
        res.render('search');
    }
}
module.exports = new siteController();
// module.exports = new siteController();
