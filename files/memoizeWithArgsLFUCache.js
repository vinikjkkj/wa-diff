__d(
  "memoizeWithArgsLFUCache",
  ["LFUCache", "memoizeInstrumentation"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
      var i,
        l = o("memoizeInstrumentation").shouldTrackThisInstance()
          ? o("memoizeInstrumentation").createCacheSizeTracker()
          : null;
      function s() {
        return (i || (i = new (r("LFUCache"))(n)), i);
      }
      function u(e) {
        if (e === void 0) i = null;
        else {
          var t;
          (t = i) == null || t.delete(e);
        }
      }
      a && a(u);
      var c = function () {
        var n = s(),
          r = t.apply(void 0, arguments);
        n.has(r) ||
          (n.set(r, e.apply(void 0, arguments)),
          l != null &&
            o("memoizeInstrumentation").maybeLogMemoizeCacheSize(
              n.size(),
              "memoizeWithArgsLFUCache",
              e.name,
              l,
            ));
        var a = n.get(r);
        return a;
      };
      return c;
    }
    l.default = e;
  },
  98,
);
