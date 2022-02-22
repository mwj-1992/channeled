exports.header = () => {
    return [
        {
            "type": "header",
            "text": {
                "type": "plain_text",
                "text": "Inbox",
                "emoji": true
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "actions",
            "elements": [
                {
                    "type": "conversations_select",
                    "placeholder": {
                        "type": "plain_text",
                        "text": "Select a conversation",
                        "emoji": true
                    },
                    "action_id": "actionId-0"
                },
                {
                    "type": "channels_select",
                    "placeholder": {
                        "type": "plain_text",
                        "text": "Select a channel",
                        "emoji": true
                    },
                    "action_id": "actionId-1"
                },
                {
                    "type": "users_select",
                    "placeholder": {
                        "type": "plain_text",
                        "text": "Select a user",
                        "emoji": true
                    },
                    "action_id": "actionId-2"
                }
            ]
        },
        {
            "type": "actions",
            "elements": [
                {
                    "type": "datepicker",
                    "initial_date": "1990-04-28",
                    "placeholder": {
                        "type": "plain_text",
                        "text": "Select a date",
                        "emoji": true
                    },
                    "action_id": "actionId-0"
                },
                {
                    "type": "datepicker",
                    "initial_date": "1990-04-28",
                    "placeholder": {
                        "type": "plain_text",
                        "text": "Select a date",
                        "emoji": true
                    },
                    "action_id": "actionId-1"
                }
            ]
        },

    ]
}