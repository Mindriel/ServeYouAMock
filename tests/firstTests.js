import Server from '../src'

describe("tests", () => {
    const s = new Server;

    it("test", () =>
        s.startUp()
            .then(() => s.tearDown())
    );
});
