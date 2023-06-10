const parseRequest = require('../utils/parseRequest').parseRequest;

module.exports = {
    async afterMiddleware(req, res, result) {
        res.header['Access-Control-Allow-Origin'] = "no-cors"
        if (result.file) {
            res.status(result.code).sendFile(result.file, { root: __dirname });
        } else if (result.error) {
            res.status(result.code).json({ "error": result.error });
        } else {
            if (result.data) {
                res.status(result.code).json({ "data": result.data });
            } else {
                res.status(result.code).json({});
            }
        }
    },

    async beforeMiddleware(req, res, next) {
        let origin = req.headers.origin;
        const ALLOWED_URL = ["http://localhost:3000", "https://fun-brain-fe.vercel.app/"]
        res.header('Access-Control-Allow-Credentials', true);
        res.header("Access-Control-Allow-Origin", '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        if (ALLOWED_URL.includes(origin)) {
            let locals = {};
            locals.data = parseRequest(req);
            res.locals = locals;
            next();
        } else {
            module.exports.afterMiddleware(req, res, result = { code: 403, error: 'Access Denied' });
        }
    }
}