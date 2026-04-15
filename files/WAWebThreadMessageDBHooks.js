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
    "react-compiler-runtime",
    "useWAWebAsync",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var a = o("react-compiler-runtime").c(8),
        i = t != null && t.type === o("WAWebThreadUtils").ThreadType.AiThread,
        l,
        s;
      a[0] !== t
        ? ((l = function () {
            return t != null
              ? o("WAWebFetchMessagesInThread").getLatestMessageInfoForThread(t)
              : (e || (e = n("Promise"))).resolve(null);
          }),
          (s = [t]),
          (a[0] = t),
          (a[1] = l),
          (a[2] = s))
        : ((l = a[1]), (s = a[2]));
      var u = r("useWAWebAsync")(l, s, i),
        c = u.loading,
        d = u.value,
        m;
      a[3] !== d
        ? ((m =
            d != null
              ? { key: r("WAWebMsgKey").fromString(d.id), timestamp: d.t }
              : null),
          (a[3] = d),
          (a[4] = m))
        : (m = a[4]);
      var p;
      return (
        a[5] !== c || a[6] !== m
          ? ((p = { loading: c, value: m }), (a[5] = c), (a[6] = m), (a[7] = p))
          : (p = a[7]),
        p
      );
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
