__d(
  "memoizeWithArgs",
  ["memoizeInstrumentation"],
  function (t, n, r, o, a, i, l) {
    var e = Object.prototype.hasOwnProperty;
    function s(t, n, r) {
      var a,
        i = 0,
        l = o("memoizeInstrumentation").shouldTrackThisInstance()
          ? o("memoizeInstrumentation").createCacheSizeTracker()
          : null,
        s = function () {
          a || (a = {});
          var s = n.apply(void 0, arguments);
          return (
            e.call(a, s) ||
              ((a[s] = t.apply(void 0, arguments)),
              l != null &&
                (i++,
                o("memoizeInstrumentation").maybeLogMemoizeCacheSize(
                  i,
                  "memoizeWithArgs",
                  r != null ? r : t.name,
                  l,
                ))),
            a[s]
          );
        };
      return s;
    }
    l.default = s;
  },
  98,
);
