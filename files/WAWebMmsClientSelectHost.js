__d(
  "WAWebMmsClientSelectHost",
  [],
  function (t, n, r, o, a, i) {
    var e = 4;
    function l(t) {
      var n = t.attemptCount,
        r = t.fallbackHost,
        o = t.lastFetchMadeProgress,
        a = t.lastHostUsed,
        i = t.selectedHost;
      return o && a
        ? a
        : n <= 1
          ? i
          : n === e - 1 && r
            ? r
            : a != null && a.equals(i) && i.fallback != null
              ? i.fallback
              : r != null
                ? r
                : i;
    }
    i.default = l;
  },
  66,
);
