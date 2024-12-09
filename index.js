const { Telegraf, Markup } = require('telegraf');
const express = require('express'); // Added Express

// Use environment variable for the bot token (or replace with your token directly)
const bot = new Telegraf(process.env.BOT_TOKEN);

// Start command: Display welcome message with an organized keyboard
bot.command('start', (ctx) => {
  ctx.reply(
    'Welcome to the bot! Please choose a movie',
    Markup.keyboard([
      ['/Pushpa_2', '/Lucky_Baskhar'],       // First row: Help and Hello
      ['/Shingam_Again', '/Bhool_Bhulaiyaa_3'],  // Second row: Bye and Good Morning
    ])
      .resize() // Adjust the keyboard size
      .oneTime() // Keyboard hides after a single use (optional)
  );
});

// Pushpa 2 command: Provide download links
bot.command('Pushpa_2', (ctx) => {
  ctx.reply(
    'Watch And Download Now\n\n' +
    '🔹 Pushpa 2 (2024)👇\n\n' +
    '📥1080p➠ https://terasharelinks.com/ohIOIhsZ9xy6BLSs9mWNm\n\n' +
    '📥720p➠ https://terasharelinks.com/NzCY46tva7mozazGL1MsK\n\n' +
    '📥480p➠ https://terasharelinks.com/PdyQOQvkvBXsI51Or7Ue5a'
  );
});

// Lucky_Baskhar command: Provide download links
bot.command('Lucky_Baskhar', (ctx) => {
  ctx.reply(
    'Watch And Download Now\n\n' +
    '🔹 Lucky Bhaskar (2024)👇\n\n' +
    '📥1080p➠https://terasharelinks.com/gk7plQSjhtKco3Jl1kJQY\n\n' +
    '📥720p➠https://terasharelinks.com/gk7plQSjhtKco3Jl1kJQY\n\n' +
    '📥480p➠https://terasharelinks.com/gk7plQSjhtKco3Jl1kJQY'
  );
});

// Shingam_Again command: Provide download links
bot.command('Shingam_Again', (ctx) => {
  ctx.reply(
    'Watch And Download Now\n\n' +
    '🔹 Singham Again (2024)👇\n\n' +
    '📥1080p➠https://terasharelinks.com/mSNCt1f2XHwIAGzDIuXNz\n\n' +
    '📥720p➠https://terasharelinks.com/6ixYxkSDSI8h2fG95IBoT\n\n' +
    '📥480p➠https://terasharelinks.com/Y2XXRiRsSMCU5cM6hj9Ri'
  );
});

// Bhool_Bhulaiyaa_3 command: Provide download links
bot.command('Bhool_Bhulaiyaa_3', (ctx) => {
  ctx.reply(
    'Watch And Download Now\n\n' +
    '🔹 Bhool Bhulaiyaa 3 (2024)👇\n\n' +
    '📥1080p➠https://terasharelinks.com/FCchnJPspTBVQjioYY8MWT\n\n' +
    '📥720p➠https://terasharelinks.com/JbmlR6eWpcuI6N4vJtQ8c\n\n' +
    '📥480p➠https://terasharelinks.com/mO9RPPwB0mV569llJjL3e'
  );
});

// Handle unknown commands
bot.on('text', (ctx) => {
  if (ctx.message.text.startsWith('/')) {
    ctx.reply('Sorry, I do not recognize this command.');
  }
});

// Express server to keep bot alive
const app = express();

app.get('/', (req, res) => {
  res.send('Bot is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
  // Launch the bot
  bot.launch()
    .then(() => console.log('Bot started successfully'))
    .catch((error) => console.error('Failed to start bot:', error));
});

// Gracefully stop the bot on process exit
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));