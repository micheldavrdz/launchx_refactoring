const Reader = require("../../../lib/utils/Reader");

describe("Unit test for Reader class", () => {
    test("Test case 1 - Check if explorers is defined", () => {
        const explorers = Reader.readJsonfile("explorers.json");
        expect(explorers).toBeDefined();
    });
});