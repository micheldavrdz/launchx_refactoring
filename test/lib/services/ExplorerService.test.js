const Reader = require('../../../lib/utils/Reader');
const ExplorerService = require('../../../lib/services/ExplorerService');

describe("Unit test for ExplorerService class", () => {
    test('Test case 1 - Filter explorers in node mission', () => {
        const explorers = Reader.readJsonfile('explorers.json');
        const explorersFiltered = ExplorerService.filterByMission(explorers, 'node');

        expect(explorersFiltered.length).toBe(10);
    });

    test('Test case 2 - Filter explorers by mission and get their total amount', () => {
        const explorers = Reader.readJsonfile('explorers.json');
        const explorersFilteredNode = ExplorerService.getAmountOfExplorersByMission(explorers, 'node');
        const explorersFilteredJava = ExplorerService.getAmountOfExplorersByMission(explorers, 'java');

        expect(explorersFilteredNode).toBe(10);
        expect(explorersFilteredJava).toBe(5);
    });

    test('Test case 3 - Filter explorers by mission and get their usernames', () => {
        const explorers = Reader.readJsonfile('explorers.json');
        const explorersFilteredNode = ExplorerService.getExplorersUsernamesByMission(explorers, 'node');
        const explorersFilteredJava = ExplorerService.getExplorersUsernamesByMission(explorers, 'java');

        expect(explorersFilteredNode.length).toBe(10);
        expect(explorersFilteredJava.length).toBe(5);
    });
})