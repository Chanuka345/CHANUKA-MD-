

const config = require('../config');


const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["darrell"],
    react: "🗺️",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `━━━━━━━━━━━━━━━━━━━━━━━━

*👋 HELLO ${pushname}*\n\n *I AM ＣＨＡＮＵＫＡ-ＭＤ MD*\n\n
I am  WhatsApp Based Multi Device Bot Created By 𝘾𝙃𝘼𝙉𝙐𝙆𝘼-𝙈𝘼𝘿𝙐𝙎𝙃𝘼𝙉.\nMy sole purpose is to remove the burden or cost of purchusing data bundle to download Songs, Apps, Videos & Movies by  using whatsapp  bundles.
\n\n *For More Visit*: https://mrfrankinc.vercel.app/
━━━━━━━━━━━━━━━━━━━━━━━━


> *FOLLOW OWNER* :https://github.com/Madushanchanux

> *OWNER'S WHATSAPP channel* : https://whatsapp.com/channel/0029Vb35nfSDzgT59gD4SU11

> *FOLLOW INSTAGRAM* :https://www.instagram.com/chanuka_madushan14/

> *OWNER YOUTUBE CHANNEL* :https://youtube.com/@c2klegendchanuka.?si=dKvEkFkjzlXtylAT

 *RELEASE DATE* - *99 December 9999*
 
> *𝙈𝙍_𝘾𝙃𝘼𝙉𝙐𝙆𝘼-𝙈𝘼𝘿𝙐𝙎𝙃𝘼𝙉*

━━━━━━━━━━━━━━━━━━━━━━━━
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
