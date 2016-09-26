import Server from '../src'

describe("tests", () => {
    const host = "localhost";
    const port = 8086;
    const path = "/buka"
    const s = new Server(host, port, path);

    it("Server can be started and shut down.", () =>
        s.startUp()
            .then(() => s.tearDown())
    );
});
