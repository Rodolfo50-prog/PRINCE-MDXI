
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUW5OiOBT+L3nVGhFQwaquWkRUBBVEvG3tQ4AA4U4IKD3lf99Cp6fnYXe2l6eQpM75znfJd5DluEIaasH0OygIbiBF3ZK2BQJTMKt9HxHQBx6kEEyBuRieR2xr9hiFdY3tNvSTDctFd/lsWfNJc+r57F5bsLsrp76BRx8UtZNg9zcFd6Ki31L7xr+XaTW/sMOWLya6GUWay+ouZPh06AputmxOwRt4dBUhJjgLlCJEKSIw0VBrQEy+CH9WSdwqDu+JhFYKy16a41h0zoq4565iHTF8q9xFxwgmnPQ1+GmgmPPU0JNoLxx4N9J6k7E/G+hqI5Z4t+KvJiyOoZH4c+YFv8JBhjzVQxnFtP0y76fFrtx5c7TT/XhjIuxERBZDt1en2jry8nuiz8t7pS9GC+ZrwDd4DunAKcXyNk+Gg6JuTsMi0bEZmopayFickM0glHyNM38FbpAPr8T/h/d2dbKT20E0/GNG72JCbVkyZoGjzQLoh8vQZrmbrNS6dna/Bn9uGmw8O3HSjOpxfHXFZOZwQxNHp/VlYciOlJ1txq5UGguf8CGtye9Q8oo7umj7jKytRnyvLI6WkjBv1fvCbZtZsxEdJoKLKxOS9SmwuNFhi83LVg9ulVsc24Ga9q4aNVGdbs/7rEFMZTqBJL09J4pRq3pgOnz0AUEBriiBFOfZc0/g+gB6jYVcguiTXnBl90OxFwiYHXB0lWzGxUXTpEW0XeWOUrtW4u+IYA8MR7bfQB8UJHdRVSFvhSuak3aDqgoGqALTP//qgwzd6Uu4rh037AMfk4raWV0kOfQ+VP04hK6b1xm12syVuwUiYMp8biNKcRZUHY91Bokb4gbJIaQVmPowqdDPCRFBHphSUqOfqZVzryNenhsbXdmJoA/SpyDYA1MwFHiR51mOFUbT0fiP6tutqwqL4luGKOiD5HVLFCeT8ZgVRJbhR1x3szt4/ATY1fMQhTipulbrUuC0y0rZRuvaNZdLSQkkOZDA50Afzngxv7KszRo7XMjS9aIk3DWYXcu9XI5rz18K6b1E/IHPk2spqW//UARMwVIWHAFZoeKHB9ao7nG8HC9H+1G54+eb/SY+RvvYPamOfq1tut1eygaWtj7bTDjDUu9OunFLsb1tDUavqsPBPbK5vpLNt66bhxrsol+b0eOIXfN5EcfLfG7folvapup4dxD9gcWcxaM9w/z7ShTfx5ycXrLzfGFit24lVSgzZRLjyBkZK/liKz1CUM71RtvZ+cOzz8wkP94q/HRTJ1X362P0jH4GOwH/U7oX7s5gzKP/S4kfb8m/5HG2Z+JIvqQi7xFrD0uRvUgnGJtlTbLzvVlXMKuVnrY+wUAGj8dffVAkkPo5ScEUwMwjOfZAH5C87hyrZn7+m2ayZKtK8Bo8gRWVPlNwwCmqKEwLMB1ORvxwzPIM87plkLxYwSoEU8AeJ5PS7izdSkVhUUg/QgWk7tPVDXj8DeCWKD9wBwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
