__d(
  "WAWebAiThreadComparator",
  [],
  function (t, n, r, o, a, i) {
    var e = function (t, n) {
        var e = t.lastMessageTimestamp || 0,
          r = n.lastMessageTimestamp || 0;
        return e !== r ? (e > r ? -1 : 1) : t.title < n.title ? -1 : 1;
      },
      l = e;
    i.default = l;
  },
  66,
);
