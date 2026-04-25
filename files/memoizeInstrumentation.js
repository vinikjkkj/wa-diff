__d(
  "memoizeInstrumentation",
  ["ExecutionEnvironment", "FBLogger", "err", "justknobx"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = !1;
    try {
      s = r("justknobx")._("1590");
    } catch (e) {}
    var u = 1 / 100,
      c = [1e3, 1e4, 1e5, 1e6];
    function d() {
      return s && Math.random() < u;
    }
    function m() {
      return { creationStack: _(), nextThresholdIdx: 0 };
    }
    function p(e, t, n, o) {
      for (; o.nextThresholdIdx < c.length && e >= c[o.nextThresholdIdx]; ) {
        var a = c[o.nextThresholdIdx];
        o.nextThresholdIdx++;
        try {
          var i;
          r("FBLogger")("memoize_instrumentation", "cache_grew_large").warn(
            "Unbounded memoize cache crossed %s entries (utility=%s, fn=%s, page=%s, creationStack=%s)",
            a,
            t,
            n != null && n !== "" ? n : "<anonymous>",
            f(),
            (i = o.creationStack) != null ? i : "<no-stack>",
          );
        } catch (e) {}
      }
    }
    function _() {
      try {
        var e = r("err")("stack for memoization").stack;
        return e == null ? void 0 : e.split("\n").slice(0, 10).join("\n");
      } catch (e) {
        return null;
      }
    }
    function f() {
      if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) return "<no-dom>";
      try {
        return window.top !== window.self
          ? "<iframe>"
          : window.location.pathname;
      } catch (e) {
        return "<error>";
      }
    }
    ((l.shouldTrackThisInstance = d),
      (l.createCacheSizeTracker = m),
      (l.maybeLogMemoizeCacheSize = p));
  },
  98,
);
