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
              ? o("WAWebFetchMessagesInThread").getFirstMessageInfoForThread(t)
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
    function u(t) {
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
    function c(e, t, n) {
      var r = o("react-compiler-runtime").c(2),
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
      var c;
      if (r[0] !== e) {
        var d,
          m =
            e != null
              ? o("WAWebChatCollection").ChatCollection.get(e.key.remote)
              : null;
        ((c =
          e != null && m != null
            ? (d = o("WAWebThreadModelResolver").getThreadModel(m, e)) == null
              ? void 0
              : d.creationTimestamp
            : null),
          (r[0] = e),
          (r[1] = c));
      } else c = r[1];
      var p = c;
      if (p == null) return !1;
      var _ = o("WAWebUserPrefsMultiDevice").getPairingTimestamp();
      return _ != null && p <= _;
    }
    ((l.useWAWebFirstThreadMessageInDB = s),
      (l.useWAWebLatestThreadMessageInDB = u),
      (l.useWAWebThreadHasOlderMessages = c));
  },
  98,
);
