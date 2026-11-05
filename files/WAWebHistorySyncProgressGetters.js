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
      _ = u("pausedForCall"),
      f = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n == null;
        },
        [_, c],
      ),
      g = s(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [c],
      ),
      h = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t == null ? null : Math.min(t + n, 100);
        },
        [d, m],
      ),
      y = s(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return n && (t == null || t < 100) && (r == null || r > 0);
        },
        [d, p, c],
      );
    ((l.getHistorySyncPausedForCall = f),
      (l.getPaused = g),
      (l.getProgress = h),
      (l.getInProgress = y));
  },
  98,
);
