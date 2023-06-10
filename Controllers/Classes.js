const classes = require('../Data/Classes.json');

module.exports = class Classes {
    constructor(request) {
        this.request = request;
    }

    async get(reqData = this.request) {
        try {
            return result = {
                code: 200,
                data: classes
            }
        } catch (error) {
            return {
                code: 500,
                error: 'Internal Server Error'
            }
        }
    }

}
