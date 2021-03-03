const http = require("http");
const url = require('url');

const generateRandomNumberArray = require("./randomNumberGenerator").generateRandomNumberArray;

const HTTP_OK = 200;
const HTTP_NOT_FOUND = 404;
const HTTP_BAD_REQUEST = 400;

const DEFAULT_PORT = 8081;

function randomNumberArrayController(req, res) {
    const size = req.parsedUrl.query.size;

    if (!size) {
        return respond(res, HTTP_BAD_REQUEST, {'message': 'size should be present and be greater than 0'});
    }

    const list = generateRandomNumberArray(size);
    return respond(res, HTTP_OK, list)
}

http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    req.parsedUrl = parsedUrl;

    if (parsedUrl.pathname === '/random') {
        return randomNumberArrayController(req, res);
    }

    return respond(res, HTTP_NOT_FOUND, {'message': `unknown path ${parsedUrl.pathname}`});
}).listen(DEFAULT_PORT);

function respond(res, status, json) {
    res.writeHead(
        status,
        {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    );
    res.write(JSON.stringify(json));
    res.end();
}
