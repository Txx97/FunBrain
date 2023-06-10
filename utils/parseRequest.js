module.exports = {
    parseRequest(req) {
        let data = {};
        // console.log('body',req.body,typeof req.body);
        // console.log('query',req.query,typeof req.query.data);
        try {
            if (req.body && Object.keys(req.body).length > 0) {
                data = (req.body && req.body.data) ? ((typeof req.body.data == 'object') ? req.body.data : JSON.parse(req.body.data)) : ((typeof req.body == 'object') ? req.body : JSON.parse(req.body));
            } else if (req.query && Object.keys(req.query).length > 0) {
                data = (req.query && req.query.data) ? ((typeof req.query.data == 'object') ? req.query.data : JSON.parse(req.query.data)) : ((typeof req.query == 'object') ? req.query : JSON.parse(req.query));
            } else {
                data = {};
            }
            if (req.method == "POST") {
                data.createdOn = Date(Date.now()).toString();
                data.updatedOn = Date(Date.now()).toString();
            } else if (req.method == "PUT" || req.method == "DELETE") {
                data.updatedOn = Date(Date.now()).toString();
            } else {
            }
            delete (data._);
        } catch (e) {
            data = {};
        }
        //console.log(JSON.parse(data),typeof data)
        return data;
    }
}