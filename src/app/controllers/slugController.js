const courses = require('../models/courses');
const { MongooseObject } = require('../../util/mongoose');

class slugController {
    show(req, res, next) {
        courses
            .findOne({ slug: req.params.slug })
            .then((courses) => {
                res.render('partials/show.hbs', {
                    course: MongooseObject(courses),
                    id: req.params.slug,
                });
            })
            .catch(next);

        //  .then(course => res.render('home',{course}))
        //  .catch(error=> next(error))

        // res.render('home');
    }
}

module.exports = new slugController();
