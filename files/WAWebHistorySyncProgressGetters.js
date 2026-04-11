__d(
  "WAWebHistorySyncProgressGetters",
  ["WAWebGetters"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({}),
      s = e.computed,
      u = e.field,
      c = u("remainingPausedSeconds"),
      d = u("realProgress"),
      m = u("fakeProgress"),
      p = u("incomplete"),
      _ = s(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [c],
      ),
      f = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t == null ? null : Math.min(t + n, 100);
        },
        [d, m],
      ),
      g = s(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return n && (t == null || t < 100) && (r == null || r > 0);
        },
        [d, p, c],
      );
    ((l.getPaused = _), (l.getProgress = f), (l.getInProgress = g));
  },
  98,
);
