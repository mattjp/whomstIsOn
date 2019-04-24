import { TELEGRAM_BOT_TOKEN } from "../config/constants";

const TeleBot = require("telebot");

const bot = new TeleBot(TELEGRAM_BOT_TOKEN);

bot.on("/start", msg => {
  msg.reply.text("I am officially on!");
});

bot.on("photo", msg => {
  msg.reply.text("That was a photo.")
});

bot.start();
