const { cmd } = require("../lib/");
const { tiny } = require("@viper-x/fancytext");
const cai_id = require("../lib/characterai");
const cai = require("../lib/ai");

cmd(
    {
        pattern: "ask (.+)",
        fromMe: false,
        desc: "Ask a question to the AI",
        type: "user",
    },
    async (message, match) => {
        const question = match[1];
        if (!question) {
            return await message.sendMessage("Please provide a question.");
        }
        try {
            const characterId = cai_id.characterai.narutohokage.id;
            const response = await cai(characterId, question);
            return await message.sendMessage(tiny(response));
        } catch (error) {
            console.error(error);
            return await message.sendMessage("An error occurred while processing your request.");
        }
    }
);
