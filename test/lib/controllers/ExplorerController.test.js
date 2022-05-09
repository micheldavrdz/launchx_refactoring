const ExplorerController = require('../../../lib/controllers/ExplorerController');

describe('Unit test for ExplorerController class', () => {
    test('Test case 1 - Filter explorers by mission', () => {
        expect(ExplorerController.getExplorersByMission('node')).toBeDefined();
        expect(ExplorerController.getExplorersByMission('node')).not.toBeNull();
        expect(ExplorerController.getExplorersByMission('java')).toBeDefined();
        expect(ExplorerController.getExplorersByMission('java')).not.toBeNull();
        expect(ExplorerController.getExplorersByMission('python')).toStrictEqual([]);
    });

    test('Test case 2 - Filter explorers by mission and get their total amount', () => {
        expect(ExplorerController.getExplorersAmountByMission('node')).toBeDefined();
        expect(ExplorerController.getExplorersAmountByMission('node')).toBe(10);
        expect(ExplorerController.getExplorersAmountByMission('java')).toBeDefined();
        expect(ExplorerController.getExplorersAmountByMission('java')).toBe(5);
        expect(ExplorerController.getExplorersAmountByMission('python')).toBe(0);
    });

    test('Test case 3 - Filter explorers by mission and get their usernames', () => {
        expect(ExplorerController.getExplorersUsernamesByMission('node')).toBeDefined();
        expect(ExplorerController.getExplorersUsernamesByMission('node')).toHaveLength(10);
        expect(ExplorerController.getExplorersUsernamesByMission('java')).toBeDefined();
        expect(ExplorerController.getExplorersUsernamesByMission('java')).toHaveLength(5);
        expect(ExplorerController.getExplorersUsernamesByMission('python')).toStrictEqual([]);
    });
});