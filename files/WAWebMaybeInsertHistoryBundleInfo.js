__d(
  "WAWebMaybeInsertHistoryBundleInfo",
  [
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebMsgGetters",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e) != null,
        a = t
          ? o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(t) != null
          : !1;
      if (n && !a) {
        var i = o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e),
          l = o("WAWebMsgGetters").getGroupHistoryBundleSender(e);
        if (
          l != null &&
          i != null &&
          r("WAWebWid").equals(i.remote, e.id.remote)
        ) {
          var s = o("WAWebContactCollection").ContactCollection.get(l);
          return {
            type: "historyBundleInfo",
            authorName: s
              ? o("WAWebFrontendContactGetters").getDisplayName(s)
              : l.toString(),
            bundleKey: i,
          };
        }
      }
      return null;
    }
    l.default = e;
  },
  98,
);
