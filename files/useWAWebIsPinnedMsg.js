__d(
  "useWAWebIsPinnedMsg",
  [
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebPinInChatCollection",
    "WAWebPinMsgConstants",
    "WAWebWidFactory",
    "useWAWebAggregatedView",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = o("WAWebMsgCollection").MsgCollection.assertGet(e),
        r = o("WAWebFrontendMsgGetters").getChat(n),
        a = o("useWAWebAggregatedView").useAggregatedView(
          o("WAWebPinInChatCollection").PinInChatCollection.byChatId,
          o("WAWebWidFactory").asChatWid(r.id),
        );
      return (
        ((t = a.get(o("WAWebPinInChatCollection").getPinInChatId(e))) == null
          ? void 0
          : t.pinType) === o("WAWebPinMsgConstants").PIN_STATE.PIN
      );
    }
    l.default = e;
  },
  98,
);
