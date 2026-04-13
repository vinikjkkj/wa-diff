__d(
  "useWAWebIsPinnedMsg",
  [
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebPinInChatCollection",
    "WAWebPinMsgConstants",
    "WAWebWidFactory",
    "react-compiler-runtime",
    "useWAWebAggregatedView",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(7),
        n,
        r,
        a;
      if (t[0] !== e) {
        var i = o("WAWebMsgCollection").MsgCollection.assertGet(e),
          l = o("WAWebFrontendMsgGetters").getChat(i);
        ((n = o("useWAWebAggregatedView").useAggregatedView),
          (r = o("WAWebPinInChatCollection").PinInChatCollection.byChatId),
          (a = o("WAWebWidFactory").asChatWid(l.id)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = a));
      } else ((n = t[1]), (r = t[2]), (a = t[3]));
      var s = n(r, a),
        u;
      if (t[4] !== e || t[5] !== s) {
        var c;
        ((u =
          (c = s.get(o("WAWebPinInChatCollection").getPinInChatId(e))) == null
            ? void 0
            : c.pinType),
          (t[4] = e),
          (t[5] = s),
          (t[6] = u));
      } else u = t[6];
      return u === o("WAWebPinMsgConstants").PIN_STATE.PIN;
    }
    l.default = e;
  },
  98,
);
