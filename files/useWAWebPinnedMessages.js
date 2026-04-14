__d(
  "useWAWebPinnedMessages",
  [
    "WAWebMsgCollection",
    "WAWebPinInChatCollection",
    "WAWebPinMsgGatingUtils",
    "WAWebWidFactory",
    "useWAWebAggregatedView",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("useWAWebAggregatedView").useAggregatedView(
        o("WAWebPinInChatCollection").PinInChatCollection.byChatId,
        o("WAWebWidFactory").asChatWid(e.id),
      );
      return o("WAWebPinMsgGatingUtils").isPinnedMessagesM1ReceiverEnabled()
        ? t
            .filter(o("WAWebPinInChatCollection").isPinValid)
            .sort(function (e, t) {
              var n = o("WAWebMsgCollection").MsgCollection.get(e.parentMsgKey),
                r = o("WAWebMsgCollection").MsgCollection.get(t.parentMsgKey);
              return n == null || r == null ? -1 : n.t - r.t;
            })
        : [];
    }
    l.default = e;
  },
  98,
);
