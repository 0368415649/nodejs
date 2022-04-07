class NewsController {
    index(req, res) {
        res.render('new');
    }
    show(req, res) {
        res.send('hi');
    }
}
// module.exports = new NewsController();
module.exports = new NewsController();
