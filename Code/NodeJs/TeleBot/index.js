const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');   //  This line imports the dotenv library into your file.
dotenv.config();  //  This line reads the .env file in your project folder.
const axios = require('axios');

const TOKEN = process.env.BOT_TOKEN;



const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', (msg) => {
    const text = msg.text;

    console.log("Message received", text);


    bot.sendMessage(msg.chat.id, "You said: " + text);


})


bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "hello I am a bot. how can i help you?");
})


bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "hello I am a bot. how can i help you?");
})

bot.onText(/\/joke/, async (msg) => {
    const joke = await axios.get('https://official-joke-api.appspot.com/random_joke');

    const setup = joke.data.setup;
    const punchline = joke.data.punchline;

    bot.sendMessage(msg.chat.id, setup + " " + punchline);
    
})