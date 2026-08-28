__d(
  "memoizeWithArgsWeak",
  ["MultiKeyMap", "memoizeInstrumentation"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      t === void 0 && (t = "");
      var n = new (r("MultiKeyMap"))(),
        a = 0,
        i = o("memoizeInstrumentation").shouldTrackThisInstance()
          ? o("memoizeInstrumentation").createCacheSizeTracker()
          : null;
      return function () {
        for (var r = arguments.length, l = new Array(r), s = 0; s < r; s++)
          l[s] = arguments[s];
        var u = n.get(l);
        if (u !== void 0) return u;
        var c = e.apply(void 0, l);
        return (
          n.set(l, c),
          i != null &&
            (a++,
            o("memoizeInstrumentation").maybeLogMemoizeCacheSize(
              a,
              "memoizeWithArgsWeak",
              t !== "" ? t : e.name,
              i,
            )),
          c
        );
      };
    }
    l.default = e;
  },
  98,
);
