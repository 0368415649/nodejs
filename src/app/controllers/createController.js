const courses = require('../models/courses');
const { MongooseObject } = require('../../util/mongoose');
const { mutipleMongooseObject } = require('../../util/mongoose');

// const { json } = require('express/lib/response');

class createController {
    create(req, res, next) {
        res.render('partials/create');
    }

    createData(req, res, next){

        const  course =  new courses(req.body)
        course.save()
        .then(()=> res.redirect('/'))
        .catch(next)
        // res.json(req.body)
    }

    show(req, res, next) {
        courses.find({})
            .then((courses) =>
                res.render('partials/show_data', {
                    courses: mutipleMongooseObject(courses),
                }),
            )
            .catch(next);
        // res.render("partials/show_data")
    }

    update(req, res, next) {
        // console.log(req.params.id)
        courses.findById(req.params.id)
            .then((courses) =>
                res.render('partials/update', {
                    courses: MongooseObject(courses),
                }),
            )
            .catch(next);
    }

    update_change(req, res, next) {
        // console.log(req.params.id);
        //  console.log(req.body);
        // res.render('partials/update_data')
        courses.updateOne({_id : req.params.id },req.body)
            .then( () =>  res.redirect('/course/show') )
           
            .catch(next);
      }

    destroy(req, res, next) {
    

        courses.deleteOne({_id : req.params.id })
            .then( () =>  res.redirect('back') )
           
            .catch(next);
      }

}

module.exports = new createController();
