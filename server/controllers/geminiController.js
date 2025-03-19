const { generateText } = require('../gemini.start');


const createResource = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: 'Prompt is required' });
        }

        const generatedText = await generateText(prompt);

        res.status(201).json({
            message: 'Resource created successfully',
            data: generatedText,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating resource', error: error.message });
    }
};


const readResource = async (req, res) => {
    try {
        const { id } = req.params;

       
        res.status(200).json({
            message: `Resource with ID ${id} fetched successfully`,
            data: { id, text: 'Sample generated text' }, 
        });
    } catch (error) {
        res.status(500).json({ message: 'Error reading resource', error: error.message });
    }
};


const updateResource = async (req, res) => {
    try {
        const { id } = req.params;
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: 'Prompt is required for update' });
        }

        
        res.status(200).json({
            message: `Resource with ID ${id} updated successfully`,
            data: { id, updatedPrompt: prompt }, 
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating resource', error: error.message });
    }
};


const deleteResource = async (req, res) => {
    try {
        const { id } = req.params;

        
        res.status(200).json({
            message: `Resource with ID ${id} deleted successfully`,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting resource', error: error.message });
    }
};

module.exports = {
    createResource,
    readResource,
    updateResource,
    deleteResource,
};