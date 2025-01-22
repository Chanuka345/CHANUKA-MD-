

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*⟣━━━━━━━━━━━━━━━━━━━⟢*
 *BOT OWNER:*
 
> *Darrell Mucheri ( Mr Frank OFC )*

 *ＣＨＡＮＵＫＡ-ＭＤ REPO:*
 
> *https://github.com/Madushanchanux/CHANUKA-MD-*

 *SUPPORT GROUP:*
 
> *https://whatsapp.com/channel/0029Vb35nfSDzgT59gD4SU11*

 *DEVELOPER NUMBER:*
 
> *wa.me/+94741469245/*

*⟣━━━━━━━━━━━━━━━━━━━⟢*
> *CREATED BY ＣＨＡＮＵＫＡ-ＭＤ*
*⟣━━━━━━━━━━━━━━━━━━━⟢*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '1203633--21386877609@newsletter',
      newsletterName: "ＣＨＡＮＵＫＡ-ＭＤ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'ＣＨＡＮＵＫＡ-ＭＤ',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Madushanchanux/CHANUKA-MD-" ,
thumbnailUrl: "https://pomf2.lain.la/f/p24bk9zh.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
