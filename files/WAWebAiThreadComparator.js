__d(
  "WAWebAiThreadComparator",
  ["WAWebBotGating"],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
        if (o("WAWebBotGating").isAiThreadPinEnabled()) {
          var e,
            r,
            a = (e = t.pinThreadTimestamp) != null ? e : 0,
            i = (r = n.pinThreadTimestamp) != null ? r : 0;
          if (a > 0 != i > 0) return a > 0 ? -1 : 1;
          if (a > 0 && i > 0 && a !== i) return a > i ? -1 : 1;
        }
        var l = t.lastMessageTimestamp || 0,
          s = n.lastMessageTimestamp || 0;
        return l !== s ? (l > s ? -1 : 1) : t.title < n.title ? -1 : 1;
      },
      s = e;
    l.default = s;
  },
  98,
);
