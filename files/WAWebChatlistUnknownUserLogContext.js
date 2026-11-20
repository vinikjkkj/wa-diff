__d(
  "WAWebChatlistUnknownUserLogContext",
  [
    "WATimeUtils",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUnknownUserDisplayedLogger",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 30 * o("WATimeUtils").DAY_SECONDS;
    function s(e) {
      var t = o("WAWebFrontendChatGetters").getPreviewMessage(e);
      return o(
        "WAWebUnknownUserDisplayedLogger",
      ).getChatListUnknownUserDisplayContext({
        age: d(e),
        lastMsg: u(t),
        source: c(t),
      });
    }
    function u(e) {
      return e == null
        ? "none"
        : o("WAWebMsgGetters").getType(e) !==
              o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            !o("WAWebMsgGetters").isRealMessage(e)
          ? "sys"
          : o("WAWebMsgGetters").getIsSentByMe(e)
            ? "out"
            : "in";
    }
    function c(e) {
      return e == null
        ? "none"
        : o("WAWebMsgGetters").getType(e) ===
            o("WAWebMsgType").MSG_TYPE.CALL_LOG
          ? "call"
          : o("WAWebMsgGetters").getIsMdHistoryMsg(e)
            ? "history"
            : "unknown";
    }
    function d(t) {
      var n = o("WAWebChatGetters").getT(t);
      if (n == null || n === 0) return "notime";
      var r = o("WATimeUtils").unixTime() - n;
      return r < o("WATimeUtils").DAY_SECONDS ? "1d" : r < e ? "30d" : "old";
    }
    l.getChatlistUnknownUserLogContext = s;
  },
  98,
);
