const ExplorerController = require('../lib/controllers/ExplorerController');
const express = require('express');
const app = express();

app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the FizzBuzz API'
    });
});

app.get('/v1/explorers/:mission', (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});

app.get('/v1/explorers/amount/:mission', (req, res) => {
    const mission = req.params.mission;
    const amountInMission = ExplorerController.getExplorersAmountByMission(mission);
    res.json({
        mission: mission,
        amount: amountInMission
    });
});

app.get('/v1/explorers/usernames/:mission', (req, res) => {
    const mission = req.params.mission;
    const usernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    res.json({
        mission: mission,
        explorers: usernamesInMission
    });
});

app.get('/v1/fizzbuzz/:score', (req, res) => {
    const score = req.params.score;
    const fizzbuzz = ExplorerController.getExplorersFizzbuzz(score);
    res.json({
        score: score,
        trick: fizzbuzz
    });
});

app.listen(port, () => {
    console.log(`FizzBuzz API on port: ${port}`);
});