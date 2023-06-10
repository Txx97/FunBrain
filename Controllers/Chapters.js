const chapters = require('../Data/Chapters.json');

module.exports = class Chapters {
    constructor(request) {
        this.request = request;
    }

    async get(reqData = this.request) {
        try {
            let chapterList;
            if (reqData.data.subject) {
                chapterList = chapters[reqData.data.subject];
            } else {
                chapterList = chapters;
            }
            return {
                code: chapterList ? 200 : 404,
                data: chapterList
            }
        } catch (error) {
            return {
                code: 500,
                error: 'Internal Server Error'
            }
        }
    }

}
