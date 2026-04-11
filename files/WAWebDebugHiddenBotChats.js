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
    var s = e(),
      u = new Set();
    function c() {
      return s;
    }
    function d(e) {
      s !== e &&
        ((s = e),
        r("WAWebUserPrefsStore").set(
          r("WAWebUserPrefsDebugKeys").DEBUG_SHOW_HIDDEN_BOT_CHATS,
          e,
        ),
        u.forEach(function (e) {
          e(s);
        }));
    }
    ((d.doc =
      "Show/hide hidden bot chats (TEE, sidechat) in chat list, notifications, and search"),
      (d.paramsToExecute = []));
    function m(e) {
      return (
        u.add(e),
        function () {
          u.delete(e);
        }
      );
    }
    ((l.isShowHiddenBotChatsEnabled = c),
      (l.setShowHiddenBotChats = d),
      (l.subscribeToShowHiddenBotChats = m));
  },
  98,
);
