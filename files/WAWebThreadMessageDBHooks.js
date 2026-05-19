__d(
  "WAWebThreadMessageDBHooks",
  [
    "WAWebChatConstants",
    "WAWebThreadModelResolver",
    "WAWebUserPrefsMultiDevice",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r;
      if (
        e == null ||
        n ===
          o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType
            .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY
      )
        return !1;
      var a =
        t != null
          ? (r = o("WAWebThreadModelResolver").getThreadModel(t, e)) == null
            ? void 0
            : r.creationTimestamp
          : null;
      if (a == null) return !1;
      var i = o("WAWebUserPrefsMultiDevice").getPairingTimestamp();
      return i != null && a <= i;
    }
    l.useWAWebThreadHasOlderMessages = e;
  },
  98,
);
