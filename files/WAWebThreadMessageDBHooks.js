__d(
  "WAWebThreadMessageDBHooks",
  [
    "Promise",
    "WAWebChatConstants",
    "WAWebFetchMessagesInThread",
    "WAWebMsgKey",
    "WAWebThreadModelResolver",
    "WAWebThreadUtils",
    "WAWebUserPrefsMultiDevice",
    "useWAWebAsync",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var a = t != null && t.type === o("WAWebThreadUtils").ThreadType.AiThread,
        i = r("useWAWebAsync")(
          function () {
            return t != null
              ? o("WAWebFetchMessagesInThread").getLatestMessageInfoForThread(t)
              : (e || (e = n("Promise"))).resolve(null);
          },
          [t],
          a,
        ),
        l = i.loading,
        s = i.value;
      return {
        loading: l,
        value:
          s != null
            ? { key: r("WAWebMsgKey").fromString(s.id), timestamp: s.t }
            : null,
      };
    }
    function u(e, t, n) {
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
    ((l.useWAWebLatestThreadMessageInDB = s),
      (l.useWAWebThreadHasOlderMessages = u));
  },
  98,
);
