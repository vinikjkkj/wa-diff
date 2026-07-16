__d(
  "WAWebDebugHiddenBotChats",
  ["WAWebUserPrefsDebugKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_SHOW_HIDDEN_BOT_CHATS,
      );
      return !!e;
    }
    var s = e();
    function u() {
      return s;
    }
    function c(e) {
      s !== e &&
        ((s = e),
        r("WAWebUserPrefsStore").set(
          r("WAWebUserPrefsDebugKeys").DEBUG_SHOW_HIDDEN_BOT_CHATS,
          e,
        ));
    }
    ((c.doc =
      "Show/hide hidden bot chats (TEE, sidechat) in chat list, notifications, and search"),
      (c.paramsToExecute = []),
      (l.isShowHiddenBotChatsEnabled = u),
      (l.setShowHiddenBotChats = c));
  },
  98,
);
