export default {
  getState: (state) => (type) => {
    return state[type];
  },
  queuesChat(state) {
    return state.queuesChat;
  },
  queuesVideo(state) {
    return state.queuesVideo;
  },
  queuesCall(state) {
    return state.queuesCall;
  },
  chatMessage: (state) => (sessionId) => {
    if (typeof state.chatMessages[sessionId] !== "undefined") {
      return state.chatMessages[sessionId];
    } else {
      return [];
    }
  },
  getQueueBySession: (state) => (sessionId, channelId) => {
    console.log("sessionId", sessionId);
    console.log("channelId", channelId);
    let found = [];
    switch (channelId) {
      case "chat":
        found = state.queuesChat.filter(
          (queue) => queue.sessionId === sessionId
        );
        return found;
      case "video":
        found = state.queuesVideo.filter(
          (queue) => queue.sessionId === sessionId
        );
        return found;
      case "call":
        found = state.queuesCall.filter(
          (queue) => queue.sessionId === sessionId
        );
        return found;
      default:
        return found;
    }
    // console.log('sessionId', sessionId);
    // let found = state.queuesChat.filter((queue) => {
    //   console.log(queue.sessionId, queue.sessionId)
    //   // console.log(queue.sessionId, queue.sessionId)
    //   return false
    // })
    // found = state.queuesVideo.filter((queue) => queue.sessionId === sessionId)
    // found = state.queuesCall.filter((queue) => queue.sessionId === sessionId)
    // return found;
  },

  queuesBySessionId: (state) => (sessionId) => {
    let found = state.queuesChat.find((x) => x.sessionId === sessionId);
    if (found) {
      return found;
    } else {
      found = state.queuesCall.find((x) => x.sessionId === sessionId);
      if (found) {
        return found;
      } else {
        found = state.queuesVideo.find((x) => x.sessionId === sessionId);
        if (found) {
          return found;
        }
      }
    }
  },

  customerById: (state) => (customerId) => {
    return state.customerData.find((x) => x.id === customerId);
  },
  contactByCustomerId: (state) => (customerId) => {
    const data = state.customerData.find((x) => x.id === customerId);
    return data.contact;
  },
};
