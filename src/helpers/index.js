const isGuest = (msg) => {
    return msg.user ? false : true;
}

const formatResponseMsg = (msg) => {
    if (isGuest(msg)) {
        return ` Guest`
    };
    return `there <@${msg.user}>!`;
}

module.exports = { isGuest, formatResponseMsg }