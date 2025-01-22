
  const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
   pattern: "ai",
   desc: "💬 Chat with AI Assistant",
   react: "🧠",
   category: "ai",
   filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
   try {
       if (!q) return reply("❗ Please provide a query. Usage: .ai [your message]");

       const response = await axios.get(`https://api.giftedtech.my.id/api/ai/gpt?apikey=gifted&q=${encodeURIComponent(q)}`);
       
       const aiReply = `🤖 *AI Assistant*:
${response.data.response}

*POWERED BY MR FRANK*`;

       return reply(aiReply);
   } catch (e) {
       console.log(e);
       return reply("⚠️ An error occurred while fetching AI response. Please try again later.");
   }
});
