import axios from "axios";

async function fetchApiKeyFromServer() {
    try {
        const response = await axios.get('https://utronserver.onrender.com/api-key');
        return response.data.apiKey;
    } catch (err) {
        console.error("❌ Failed to fetch API key from server:", err.message);
        return null;
    }
}

async function sendDeepSeek(prompt, systemMessage) {
    const key = await fetchApiKeyFromServer();
    if (!key) {
        console.error("❌ API key not available.");
        return null;
    }

    try {
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: "deepseek/deepseek-r1:free",
                messages: [
                    ...(systemMessage ? [{ role: 'system', content: systemMessage }] : []),
                    { role: 'user', content: prompt }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer ${key}`,
                    'Content-Type': 'application/json',
                }
            }
        );

        return response.data.choices[0].message.content.trim();
    } catch (err) {
        console.error("❌ OpenRouter Error:", err.response?.status, err.response?.data?.error || err.message);
        return null;
    }
}

export async function getCommandFromAI(prompt) {
    const systemMsg = 'You are a CLI assistant. Only reply with installation commands. No explanation. No extra text.';
    try {
        return await sendDeepSeek(prompt, systemMsg);
    } catch (err) {
        console.error("❌ DeepSeek AI Error (command):", err.message);
        return null;
    }
}

export async function getExplanationFromAI(subject) {
    const systemMsg = 'You are a helpful assistant. Provide a brief explanation of the following package or command in 2-3 sentences.';
    try {
        return await sendDeepSeek(subject, systemMsg);
    } catch (err) {
        console.error("❌ DeepSeek AI Error (explain):", err.message);
        return "No explanation available.";
    }
}

export async function getComparisonFromAI(itemComparison) {
    const systemMsg = 'You are a comparison assistant. Give a structured comparison between the two mentioned tools or concepts, including pros, cons, features, and when to use which.';
    try {
        return await sendDeepSeek(itemComparison, systemMsg);
    } catch (err) {
        console.error("❌ DeepSeek AI Error (compare):", err.message);
        return "No comparison available.";
    }
}
