
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUy46jRhT9l9raGhsM2CC1FIxpG2j8wo/G0SzKUMbVvKt4GI+8imZWUaalbLJp9SZ/kGyTj8kX+BMi3N3To0iZdFYUVVfnnnvPufcDiGJMkYEqIH0ACcEFzFB9zKoEAQn0890OEdAELswgkIA5wjQtuDiZ9Up/jVeqttsymVWMR0NKtf7RoYRTCOrkjHcFTk2Q5NsAO98AdLxkwaJ0WNibDRN1yw7pVbywvGFb1QLOG0bpVqi9ntiwI1+BU40IMcGRpyZ7FCICAwNVU4jJ2+hXMpqaUWgiw7RKxc/z6wMRHV9m9G4wEbDg3G1khpKOs3beRn+wXS2ru60j+DY/TrrTqoiGvDjSLM0d2zNuIhucJSYWKYfeE32KvQi5mouiDGfVm/uemrzLrSvW7Jjl+BjPzchFXqytK78xTdKuXnCUQTEixmj2NuJDL2yttBtTNGedwoxdK86Js0fcknUWpbc+mP5y5IrqaqzaXxOfkhev+P+n73Sy4kTRH5oUrbnVPmVRPL/xt1t9XTKthk2DcUu8TSeet+beRt80pkN77c04QdMG7n6X3DZGTsrMx3PUO0Qq01sd9wcZNwR5+UofZjn5FsvbKNIWNpXDIYwHbmkqB3vvUg+6Guqb4940HbSP13J/6ZISt3g/kwO53zi0KFS3obsdZ8jmp2Q9YQaH1FHNLIOLA4flq0tFPqo0F0jMqQkI8jDNCMxwHF3uenwTQLewkENQdmkv0GdHrSuojJ7dzrvm4djXR6lFk0TZ8naqzr3RRp41+qvCNLUr0AQJiR1EKXJHmGYxqUxEKfQQBdL375sgQofsSbg6XYdpgh0mNFtGeRLE0H1R9eUROk6cR5lVRY5SHxABUvv1GmUZjjxa9zGPIHH2uEDKHmYUSDsYUPSlQkSQC6SM5OjL1CqxWzd+en3DLnqsAZogvAiCXSABpseJHMd22B4vCZ3v6LuyRoVJ8i5CGWiC4ClKFLtdQWB7Itvm+E4dWT80QQRrLHB+/Pjb+fHjn6/fX38/P37+4/xw//n8cP/D+eH+01+/fDo/3P98frj/8fxw/1Otz3N1NRkXZRAHFEhAMZRex7BHqt5ZHelsOJRVT1Y8Gbx248VWT7KNLMvU8bazZzP9OiWdjdffpHMlFXJ3N+yFhxRxCy4ONql8ke2fIEACfq4v6DYtB2Yabrq5YvlzgQvVsV4pq3E56HGOqgVhXxg6omHn0ULfDtgcoWqrIm20WFb8vGiPGWF87XeNZcRYhSvwg/KqzuaiAjvo62StGy6423FTveUMYmwK1/aRa+sJ4fV2HqNGdDNPhcEszIuByF1btsX3sFAwE08XjCXWN+rQ2Az1u02ZHKg+T4Rx0HIg9p4Mfxm44HnR4YsVa53r3x1Gl73xrNh/6f7Eu3Zn+9T8CuJ5Ef3LMPfnbf9OsUORc4k1h6nI2vIa+rM0J9HtodApjHK1Yehr6CngdHrfBEkAs11MQiABGLkkvriKxHltdy3axd9IpshLTX0uPIA0k19HaIFDRDMYJkBiujzHt7sixz5FTUmcjCDdAwmwq243XYLT3x5RTR+QBwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
