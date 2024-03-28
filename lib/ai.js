const axios = require('axios');
const config = require("../config");
const baseUrl = config.BASE_URL;


async function cai(characterId, message) {
    const endpoint = 'api/ai/c-ai';
    const url = baseUrl + endpoint;
    const params = {
        characterid: characterId,
        message: message,
        apikey: config.ALPHA_KEY
    };

    try {
        const response = await axios.get(url, { params });
        const responseData = response.data;
        if (responseData && responseData.result && responseData.result.response) {
            return responseData.result.response;
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        throw error;
    }
}

module.exports = cai;
