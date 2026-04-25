__d(
  "memoizeStringOnly",
  ["memoizeInstrumentation"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {},
        n = 0,
        r = o("memoizeInstrumentation").shouldTrackThisInstance()
          ? o("memoizeInstrumentation").createCacheSizeTracker()
          : null;
      return function (a) {
        return (
          Object.prototype.hasOwnProperty.call(t, a) ||
            ((t[a] = e.call(this, a)),
            r != null &&
              (n++,
              o("memoizeInstrumentation").maybeLogMemoizeCacheSize(
                n,
                "memoizeStringOnly",
                e.name,
                r,
              ))),
          t[a]
        );
      };
    }
    l.default = e;
  },
  98,
);
