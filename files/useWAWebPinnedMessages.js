__d(
  "useWAWebPinnedMessages",
  [
    "WAWebMsgCollection",
    "WAWebPinInChatCollection",
    "WAWebPinMsgGatingUtils",
    "WAWebWidFactory",
    "react-compiler-runtime",
    "useWAWebAggregatedView",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e.id
        ? ((n = o("WAWebWidFactory").asChatWid(e.id)),
          (t[0] = e.id),
          (t[1] = n))
        : (n = t[1]);
      var r = o("useWAWebAggregatedView").useAggregatedView(
        o("WAWebPinInChatCollection").PinInChatCollection.byChatId,
        n,
      );
      if (!o("WAWebPinMsgGatingUtils").isPinnedMessagesM1ReceiverEnabled()) {
        var a;
        return (
          t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = []), (t[2] = a))
            : (a = t[2]),
          a
        );
      }
      var i;
      return (
        t[3] !== r
          ? ((i = r.filter(o("WAWebPinInChatCollection").isPinValid).sort(s)),
            (t[3] = r),
            (t[4] = i))
          : (i = t[4]),
        i
      );
    }
    function s(e, t) {
      var n = o("WAWebMsgCollection").MsgCollection.get(e.parentMsgKey),
        r = o("WAWebMsgCollection").MsgCollection.get(t.parentMsgKey);
      return n == null || r == null ? -1 : n.t - r.t;
    }
    l.default = e;
  },
  98,
);
