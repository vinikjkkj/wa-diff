__d(
  "memoizeWithArgsByKey",
  ["LFUCache", "memoizeInstrumentation"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = null,
        n = o("memoizeInstrumentation").shouldTrackThisInstance()
          ? o("memoizeInstrumentation").createCacheSizeTracker()
          : null;
      function a(a) {
        for (
          var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), s = 1;
          s < i;
          s++
        )
          l[s - 1] = arguments[s];
        t || (t = new (r("LFUCache"))());
        var u = t.get(a);
        if (
          u &&
          u.args.length === l.length &&
          u.args.every(function (e, t) {
            return l[t] === e;
          })
        )
          return u.value;
        var c = u == null,
          d = e.apply(void 0, l);
        return (
          t.set(a, { args: l, value: d }),
          n != null &&
            c &&
            o("memoizeInstrumentation").maybeLogMemoizeCacheSize(
              t.size(),
              "memoizeWithArgsByKey",
              e.name,
              n,
            ),
          d
        );
      }
      return (
        (a.clearCache = function () {
          t && t.clear();
        }),
        a
      );
    }
    l.default = e;
  },
  98,
);
