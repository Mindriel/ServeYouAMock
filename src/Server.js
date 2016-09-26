import { createServer } from "http";

export default class Server {
    constructor(host, port, path) {
        this._host = host;
        this._port = port;
        this._path = path;
        this._server = createServer(Server._handler);
    }

    startUp() {
        return Promise.resolve();
    }

    tearDown() {
        return Promise.resolve();
    }

    static _handler() {
        ;
    }
}
