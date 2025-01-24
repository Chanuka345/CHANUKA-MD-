const { cmd, commands } = require('../command');
const os = require('os');
const { runtime } = require('../lib/functions');

// Menu Command
cmd({
    pattern: "menub",
    react: '📜',
    desc: "Get the list of commands with buttons",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, pushname }) => {
    try {
        const buttonMessage = {
            text: `*👋 Hello ${pushname}*\n\n*Welcome to the Menu*\n\n*📖 Available Menus:*\n1. Owner Menu\n2. Convert Menu\n3. AI Menu\n4. Search Menu\n5. Download Menu\n6. Group Menu\n\nChoose an option below:`,
            footer: `© Powered by Chanuka-MD`,
            buttons: [
                { buttonId: 'menu_owner', buttonText: { displayText: 'Owner Menu' }, type: 1 },
                { buttonId: 'menu_convert', buttonText: { displayText: 'Convert Menu' }, type: 1 },
                { buttonId: 'menu_ai', buttonText: { displayText: 'AI Menu' }, type: 1 },
                { buttonId: 'menu_search', buttonText: { displayText: 'Search Menu' }, type: 1 },
                { buttonId: 'menu_download', buttonText: { displayText: 'Download Menu' }, type: 1 },
                { buttonId: 'menu_group', buttonText: { displayText: 'Group Menu' }, type: 1 }
            ],
            headerType: 1
        };

        // Send Button Message
        await conn.sendMessage(from, buttonMessage, { quoted: mek });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { text: `An error occurred: ${e.message}` }, { quoted: mek });
    }
});

// Handle Button Responses
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const msg = messageUpdate.messages[0];
    if (!msg.message || !msg.message.buttonsResponseMessage) return;

    const buttonId = msg.message.buttonsResponseMessage.selectedButtonId;

    let responseText = '';

    // Respond based on Button ID
    switch (buttonId) {
        case 'menu_owner':
            responseText = `*Owner Menu*\n\n1. .updatecmd\n2. .shutdown\n3. .broadcast\n...`;
            break;
        case 'menu_convert':
            responseText = `*Convert Menu*\n\n1. .sticker\n2. .audio\n...`;
            break;
        case 'menu_ai':
            responseText = `*AI Menu*\n\n1. .ai\n2. .chatgpt\n...`;
            break;
        case 'menu_search':
            responseText = `*Search Menu*\n\n1. .google\n2. .yts\n...`;
            break;
        case 'menu_download':
            responseText = `*Download Menu*\n\n1. .tiktok\n2. .youtube\n...`;
            break;
        case 'menu_group':
            responseText = `*Group Menu*\n\n1. .kick\n2. .promote\n...`;
            break;
        default:
            responseText = `Invalid button selection!`;
    }

    // Send the response
    await conn.sendMessage(msg.key.remoteJid, { text: responseText }, { quoted: msg });
});
