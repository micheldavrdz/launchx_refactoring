const Reader = require('./lib/utils/Reader');
const ExplorerService = require('./lib/services/ExplorerService');

// Get the explorers data from the file
const explorers = Reader.readJsonfile('./explorers.json');
// console.log(explorers);

// Using ExplorerService to get different data from the explorers by mission
console.log(ExplorerService.filterByMission(explorers, 'node'));
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, 'node'));
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, 'node'));
