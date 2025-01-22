

const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "♠️",
    alias: ["uptime","status","runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*▢┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉▢*

> *ＣＨＡＮＵＫＡ-ＭＤ UPTIME SYSTEM*

*UPTIME:➠*  ${runtime(process.uptime())}

*RAM USAGE:➠* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB

*HOSTNAME:➠* ${os.hostname()}

*OWNER:➠* *𝙈𝙍 𝘾𝙃𝘼𝙉𝙐𝙆𝘼-𝙈𝘼𝘿𝙐𝙎𝙃𝘼𝙉*

*▢┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉▢*
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
