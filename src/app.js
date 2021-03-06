require('dotenv').config()
const { App } = require('@slack/bolt');
const { formatResponseMsg } = require('./helpers');
const { findConversation, fetchMessagesByChannelID } = require('./messages/findConversation');
const { header } = require('./views/home_layout');
const { postTemplate } = require('./views/post');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,
    // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
    // you still need to listen on some port!
    port: process.env.PORT || 3000,
});
const channelId = 'C03339NHVS9';

// Gteeting messages
app.message(/^(hi|hello|hey).*/, async ({ context, say }) => {
    const greeting = context.matches[0];

    await say(`${greeting} ${formatResponseMsg(context)} , how are you?`);
});

app.event('app_home_opened', async ({ event, client, logger }) => {
    const messagesObject = await fetchMessagesByChannelID(app, channelId, null);
    let messageComponents = [];
    messagesObject.forEach(message => {
        messageComponents.push(...postTemplate(message));
    });
    const blocks = [
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Welcome home, <@" + event.user + "> :house:*"
            }
        },
        ...header(),
        ...messageComponents,
    ];
    try {
        // Call views.publish with the built-in client
        const result = await client.views.publish({
            user_id: event.user,
            view: {
                "type": "home",
                blocks
            }
        });
    }
    catch (error) {
        logger.error(error);
    }
});

app.action('markTheMessage', async ({ body, ack, say }) => {
    const markAs = body?.actions[0]?.value;
    if (markAs) {
        await updateTheMessageStatus({ body, markAs });
    }
});

(async () => {
    // Start your app
    await app.start();

    console.log('?????? Bolt app is running!');
})();