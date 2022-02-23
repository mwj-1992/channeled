const { MESSAGE_STATUS } = require('../Enum');
exports.postTemplate = (msg) => {
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
                        "text": "Copmplete"
                    },
                    "style": "primary",
                    "value": MESSAGE_STATUS.COMPLETEED,
                    "action_id": "markTheMessage"
                },
                // {
                //     "type": "button",
                //     "text": {
                //         "type": "plain_text",
                //         "emoji": true,
                //         "text": "Open"
                //     },
                //     "style": "danger",
                //     "value": MESSAGE_STATUS.OPENED,
                //     "action_id": "markTheMessage"
                // }
            ]
        },
        {
            "type": "divider"
        }
    ]
}

