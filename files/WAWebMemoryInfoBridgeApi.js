__d(
  "WAWebMemoryInfoBridgeApi",
  ["WAWebChatCollection", "WAWebContactCollection", "WAWebMsgCollection"],
  function (t, n, r, o, a, i, l) {
    var e = {
      getCollectionSizes: function () {
        return {
          chat: o("WAWebChatCollection").ChatCollection.length,
          contact: o("WAWebContactCollection").ContactCollection.length,
          message: o("WAWebMsgCollection").MsgCollection.length,
        };
      },
    };
    l.MemoryInfoBridgeApi = e;
  },
  98,
);
