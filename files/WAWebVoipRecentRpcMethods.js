__d(
  "WAWebVoipRecentRpcMethods",
  [],
  function (t, n, r, o, a, i) {
    var e = 8,
      l = new Set(["cleanupUnfinishedCallStats", "voipInit"]),
      s = [],
      u = new Map(),
      c = new Map(),
      d = 0;
    function m() {
      return s.map(function (e) {
        var t = e.count,
          n = e.method;
        return t === 1 ? n : n + "*" + t;
      });
    }
    function p() {
      return d;
    }
    function _(e) {
      return u.get(e);
    }
    function f(e) {
      return c.get(e);
    }
    function g(e) {
      return l.has(e);
    }
    function h(t) {
      (d++, u.set(t, d));
      var n = s.at(-1);
      return n != null && n.method === t
        ? (n.count++, d)
        : (s.push({ count: 1, method: t }), s.length > e && s.shift(), d);
    }
    function y(e, t) {
      c.set(e, t);
    }
    ((i.getRecentRpcMethods = m),
      (i.getSentRpcCount = p),
      (i.getLastSentRpcPosition = _),
      (i.getLastStartedRpcPosition = f),
      (i.shouldReportRpcStart = g),
      (i.recordSentRpcMethod = h),
      (i.recordStartedRpc = y));
  },
  66,
);
