
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUWa+iSBj9L/WqaZFFluQmA4iguHNxm8xDCQWUIktRhWLH/z5B+/btTDI9d95qy/nOd8756jvIclwhFzVA+w4KgmtIUbukTYGABgwWRYiALgghhUADeN6/bpqjuvXDQmCJ15eukllPvGaOluLB1dHkXg3tIgmt/Rt4dEHBjikOfgN4jizlrMCQ76x9V3W2Rugcj4obbe5Bb7Wcr/XrqOqo9sjlZ2/g0SJCTHAWW0WCLojA1EXNEmLyNfoXQ5zPe2uk3t3RoHA8tSdHx73vjHg7kZKUH2Jzze6Ol+y4r9HH72Porc8Y0sHVGU4k47K+VtFhQdnJWiRJ7Fm7OZRovBxyL/oVjjMUjkOUUUybL+t+MXe8U+tOwxG4nPK0Nz1ZVOTKdLA5KnpR+vjQ6GOzROcv6u5n6omS/nhU7dVivLDZjrGz3dnyW3vMbChLJtmUxk0Ub9dfiS/JR1bO/0d3bzHf+7A+9fjaFyf9WY9fQ3IVQ9kvZA+jyakO+26Od1fhi/Tvo/N9E/t7Gx1sosdTg1eWhXC4DtlRUYPRIDvNksbs6Tmnf9KHlJHfscyPzLCmt2XPc0c1E+TrQUjmam88NuxtoGw4we9Zjbgnm+1lwPOUGG7h5E2Kqvs2mOUoYXQrOyZJpyy5GRuSuHe2SvS3Z0dn1IxDoPUfXUBQjCtKIMV51p6pUhfAsPZQQBB9qgsCTIOVLRueqpaxUixNWA5d1yuFkk29wDsLkaA4KLGSePwGuqAgeYCqCoUOrmhOmhmqKhijCmh//tUFGbrRl29tNaHfBREmFfUzVqQ5DD9M/biEQZCzjHpNFpjtAhGgcZ/HiFKcxVUrI8sgCRJcIzOBtAJaBNMK/WwQERQCjRKGfg6tmYet7itlOZBn3BJ0weXpBw6BBvqKqIoiL/CKpEnyH9W3a4sKi+JbhijogvT1SlVleTDgFZXnREloX7YXj58EW7wQUYjTCmjAnDBFcPeOtbzUdbCybd2KdTPWwWdDH8F4Ke943myCj0LC08moJMIhNg7l2iwHLIxs5XIrkfgu5umh1J/K/xMEaIC39unQj7ixE1POOi1MTr300860adYCK97tKNXVyaxxmSItz4rNFay+KZNpvuqfak+HYq9crDljtDiLF5yQcGbAujLjt7ZaiGocoF+LHfSOmvfeDTU+brHYY7NsFdOymZl34XqcWOuVt3PfTdvZxbwLg1nj8KvpvL45dzrj/eB4u5194daUFu3gjnQMa9eQrCR+RfY5MumPrwo/09Ra1W4jjJ6Tn8HWwP+07sW7DRj36P4C8eMr+ZdxNNbc+WTuL6oYEm8NS5Xf61t4XpWMZLtbPalgxqyOO9nC2ASPx19dUKSQRjm5AA3ALCQ5DkEXkJy1iR1nUf6bYqbuj60fjaewovrnFLzjC6oovBRA68uSyPPiQOy/Xi1JXjiwSlrbN7Jc+uDxN5P07gFSBwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "18494423285", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "🐐,🤴🏾", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "DODO PDG TMO", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
