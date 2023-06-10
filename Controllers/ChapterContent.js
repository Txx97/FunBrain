const chapterContents = require('../Data/Chapters-Content.json');

module.exports = class ChapterContents {
    constructor(request) {
        this.request = request;
    }

    async get(reqData = this.request) {
        try {
            let contentList;
            if (reqData.data.chapter) {
                contentList = chapterContents[reqData.data.chapter];
            } else {
                contentList = chapterContents;
            }
            return {
                code: contentList ? 200 : 404,
                data: contentList
            }
        } catch (error) {
            console.log(error)
            return {
                code: 500,
                error: 'Internal Server Error'
            }
        }
    }

}
