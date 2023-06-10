const subjects = require('../Data/Subjects.json');

module.exports = class Subjects {
    constructor(request) {
        this.request = request;
    }

    async get(reqData = this.request) {
        try {
            let subjectList;
            console.log(reqData.data)
            if (reqData.data.class) {
                subjectList = subjects[reqData.data.class];
            } else {
                subjectList = subjects;
            }
            console.log(subjectList)
            return result = {
                code: subjectList ? 200 : 404,
                data: subjectList
            }
        } catch (error) {
            return {
                code: 500,
                error: 'Internal Server Error'
            }
        }
    }

}
