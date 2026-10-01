__d(
  "WAWebChatComparator",
  ["WAWebChatSortTime"],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
        var e = t.pin || 0,
          r = n.pin || 0;
        if (e || r)
          return e !== r
            ? e > r
              ? -1
              : 1
            : t.id.toString() < n.id.toString()
              ? -1
              : 1;
        var a = o("WAWebChatSortTime").getChatSortTime(t),
          i = o("WAWebChatSortTime").getChatSortTime(n);
        return a !== i
          ? a > i
            ? -1
            : 1
          : t.id.toString() < n.id.toString()
            ? -1
            : 1;
      },
      s = e;
    l.default = s;
  },
  98,
);
