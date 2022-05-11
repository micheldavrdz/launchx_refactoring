const TelegramBot = require('node-telegram-bot-api');
const ExplorerController = require('./ExplorerController');

require('dotenv').config();

class BotController {
    static getBotFizzbuzz() {
        const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

        bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message
        
            const chatId = msg.chat.id;
            const resp = match[1]; // the captured "whatever"
        
            // send back the matched "whatever" to the chat
            bot.sendMessage(chatId, resp);
        });

        bot.on('message', (msg) => {
            const chatId = msg.chat.id;
            const fizzbuzzNumber = parseInt(msg.text);
        
            if(!isNaN(fizzbuzzNumber)){
                const fizzbuzzTrick = ExplorerController.getExplorersFizzbuzz(fizzbuzzNumber);
                const responseBot = `Tu número es: ${fizzbuzzNumber}. Validación: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            } 
            else {
                if (msg.text.toLowerCase() === 'node' || msg.text.toLowerCase() === 'java') {
                    const explorers = ExplorerController.getExplorersNameByMission(msg.text.toLowerCase());
                    const responseBot = `Exploradores de ${msg.text}: ${explorers.join(', ')}`;
                    bot.sendMessage(chatId, responseBot);
                }
                else {
                    bot.sendMessage(chatId, 'Envía un número válido');
                }
            }
        });
    }
}

module.exports = BotController;