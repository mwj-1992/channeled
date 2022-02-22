exports.postTemplate = (msg) => {
    console.log(msg);
    return [
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": `*<@${msg.user}>*`
            }
        },
        {
            "type": "section",
            "text": {
                "type": "plain_text",
                "text": msg.text,
                "emoji": true
            }
        },
        {
            "type": "actions",
            "elements": [
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "emoji": true,
                        "text": "Cpmplete"
                    },
                    "style": "primary",
                    "value": "click_me_123"
                },
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "emoji": true,
                        "text": "Open"
                    },
                    "style": "danger",
                    "value": "click_me_123"
                }
            ]
        },
        {
            "type": "divider"
        }
    ]
}

