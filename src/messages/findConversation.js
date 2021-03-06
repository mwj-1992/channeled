const findConversation = async (app, channleName) => {
    try {
        // Call the conversations.list method using the built-in WebClient
        const result = await app.client.conversations.list({
            // The token you used to initialize your app
            token: process.env.SLACK_BOT_TOKEN,
        });

        for (const channel of result.channels) {
            if (channel.name === channleName) {
                conversationId = channel.id;
                // Break from for loop
                break;
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}

let message;

// Fetch conversation history using the ID and a TS from the last example
const fetchMessagesByChannelID = async (app, id, ts) => {
    try {
        const limit = 10; // to be configured.
        if (!id) {
            console.error(`ChanneId is invalid:  ${id}`);
            return [];
        }
        // Call the conversations.history method using the built-in WebClient
        const result = await app.client.conversations.history({
            // The token you used to initialize your app
            token: process.env.SLACK_BOT_TOKEN,
            channel: id,
            // In a more realistic app, you may store ts data in a db
            // latest: ts,
            // Limit results
            inclusive: true,
            limit
        });

        // There should only be one result (stored in the zeroth index)
        message = result.messages || [];
        return message;

    }
    catch (error) {
        console.error(error);
        return [];
    }
}
module.exports = { findConversation, fetchMessagesByChannelID }