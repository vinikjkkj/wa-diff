__d(
  "WAWebChatlistUnknownUserLogContext",
  [
    "WATimeUtils",
    "WAWebChatConstants",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUnknownUserDisplayedLogger",
    "WAWebUsernameTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 30 * o("WATimeUtils").DAY_SECONDS;
    function s(e) {
      return o(
        "WAWebUnknownUserDisplayedLogger",
      ).getChatListUnknownUserDisplayContext({
        age: d(e),
        isCtwa:
          o("WAWebChatGetters").getLidOriginType(e) ===
          o("WAWebUsernameTypes").LidOriginType.PNH_CTWA,
        lastMsg: c(e),
        origin: u(e),
      });
    }
    function u(e) {
      var t = o("WAWebChatGetters").getEndOfHistoryTransferType(e);
      return t == null
        ? "live"
        : t ===
            o("WAWebChatConstants")
              .ConversationEndOfHistoryTransferModelPropType
              .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY
          ? "nomore"
          : "hs";
    }
    function c(e) {
      var t = o("WAWebFrontendChatGetters").getPreviewMessage(e);
      return t == null
        ? "none"
        : o("WAWebMsgGetters").getType(t) !==
              o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            !o("WAWebMsgGetters").isRealMessage(t)
          ? "sys"
          : o("WAWebMsgGetters").getIsSentByMe(t)
            ? "out"
            : "in";
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
