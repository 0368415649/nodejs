const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courses = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    slug: { type: String },
    // createdAt: { type: Date, default: Date.now },
    // updateAt: { type: Date, default: Date.now },
}
,{
    timestamps: true,
});

module.exports = mongoose.model('courses', courses);
