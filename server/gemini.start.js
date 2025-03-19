const dotenv = require('dotenv');
const { TextServiceClient } = require('@google-ai/generativelanguage'); // Correct import

dotenv.config();

const aiClient = new TextServiceClient(); // Initialize the client without `new`

const generateText = async (prompt) => {
    try {
        const result = await aiClient.generateText({
            model: 'models/gemini-v1', // Ensure this model path is correct
            prompt,
        });

        return result?.candidates?.[0]?.output || 'No response text available';
    } catch (error) {
        throw new Error(`Error generating text: ${error.message}`);
    }
};

module.exports = { aiClient, generateText };