__d(
  "WAWebThreadMessageDBHooks",
  [
    "Promise",
    "WAWebChatCollection",
    "WAWebChatConstants",
    "WAWebFetchMessagesInThread",
    "WAWebMsgKey",
    "WAWebThreadModelResolver",
    "WAWebThreadUtils",
    "WAWebThreadsGating",
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
              ? o("WAWebFetchMessagesInThread").getFirstMessageInfoForThread(t)
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
    function u(t) {
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
    function c(e, t, n) {
      var r,
        a = !o("WAWebThreadsGating").isThreadLoadingInfraEnabled(),
        i = s(a ? e : null),
        l = i.loading,
        u = i.value;
      if (!a || l || u == null) return !1;
      if (t == null || !u.key.equals(t)) return !0;
      if (
        n ===
        o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType
          .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY
      )
        return !1;
      var c =
          e != null
            ? o("WAWebChatCollection").ChatCollection.get(e.key.remote)
            : null,
        d =
          e != null && c != null
            ? (r = o("WAWebThreadModelResolver").getThreadModel(c, e)) == null
              ? void 0
              : r.creationTimestamp
            : null;
      if (d == null) return !1;
      var m = o("WAWebUserPrefsMultiDevice").getPairingTimestamp();
      return m != null && d <= m;
    }
    ((l.useWAWebFirstThreadMessageInDB = s),
      (l.useWAWebLatestThreadMessageInDB = u),
      (l.useWAWebThreadHasOlderMessages = c));
  },
  98,
);
