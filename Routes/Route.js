const routes = require('express').Router();
const afterMiddleware = require('../Middleware/Middleware').afterMiddleware;
const Classes = require("../Controllers/Classes");
const Subjects = require("../Controllers/Subjects");
const Chapters = require("../Controllers/Chapters");
const ChapterContents = require("../Controllers/ChapterContent");

//All class routes
routes.get("/classes", async(req,res) => {
    let classController = new Classes(res.locals);
    result = await classController.get();
    afterMiddleware(req, res, result);
})

//All subjects routes
routes.get("/subjects", async(req,res) => {
    let subjectController = new Subjects(res.locals);
    result = await subjectController.get();
    afterMiddleware(req, res, result);
})

//All chapters routes
routes.get("/chapters", async(req,res) => {
    let chapterController = new Chapters(res.locals);
    result = await chapterController.get();
    afterMiddleware(req, res, result);
})

//All chapters routes
routes.get("/contents", async(req,res) => {
    let contentController = new ChapterContents(res.locals);
    result = await contentController.get();
    afterMiddleware(req, res, result);
})

//All default routes
routes.get('*', async (req, res) => {
    let result = {
        'code': 404,
        'error': 'GET Api for this path does not exist'
    }
    afterMiddleware(req, res, result);
});

routes.post('*', async (req, res) => {
    let result = {
        'code': 404,
        'error': 'POST Api for this path does not exist'
    }
    afterMiddleware(req, res, result);
});

routes.put('*', async (req, res) => {
    let result = {
        'code': 404,
        'error': 'PUT Api for this path does not exist'
    }
    afterMiddleware(req, res, result);
});

routes.delete('*', async (req, res) => {
    let result = {
        'code': 404,
        'error': 'DELETE Api for this path does not exist'
    }
    afterMiddleware(req, res, result);
});

module.exports = routes;