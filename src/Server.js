import { createServer } from "http";
import httpStatus from 'http-status';

export default class Server {
    constructor(host, port, path) {
        this._host = host;
        this._port = port;
        this._path = path;
        this._server = createServer(Server._handler);
    }

    startUp() {
        return new Promise((resolve) => {
            this._server.listen(this._port, this._host, () => {
                console.log(`Server running at http://${this._host}:${this._port}/`);
                resolve();
            });
        });
    }

    tearDown() {
        return new Promise((resolve) => {
            this._server.close(() => {
                console.log(`Server shutting down...`);
                resolve();
            });
        });
    }

    static _handler(req, res) {
        console.log('Sth handled.');
        if (req.path === this._path) {
            res.statusCode = httpStatus.OK;
        } else {
            res.statusCode = httpStatus.NOT_FOUND;
        }
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    }
}
