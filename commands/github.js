async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖_Your bby*

*📂 GitHub Repository:*
None public guyes😩💝

*📢 Official Group:*
https://chat.whatsapp.com/Kg06SFxyneHKdffoBW1TiY

 ⭐ Bby if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '',
                    newsletterName: '𝗠𝗥_𝗛𝗨𝗦𝗦𝗔𝗜𝗡',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 
