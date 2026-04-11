__d(
  "WAWebMaybeInsertHistoryBundleInfo",
  ["WAWebContactCollection", "WAWebFrontendContactGetters", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e) != null,
        r = t
          ? o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(t) != null
          : !1;
      if (n && !r) {
        var a = o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e),
          i = o("WAWebMsgGetters").getGroupHistoryBundleSender(e);
        if (i != null && a) {
          var l = o("WAWebContactCollection").ContactCollection.get(i);
          return {
            type: "historyBundleInfo",
            authorName: l
              ? o("WAWebFrontendContactGetters").getDisplayName(l)
              : i.toString(),
            bundleKey: a,
          };
        }
      }
      return null;
    }
    l.default = e;
  },
  98,
);
