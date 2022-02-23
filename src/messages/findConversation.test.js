const fetchMessagesByChannelID = require('./findConversation');

test('invoking fetchMessagesByChannelID with null channelID', (result) => {
    findConversation({}, null, ts);
    expect(result).toEqual([]);
});