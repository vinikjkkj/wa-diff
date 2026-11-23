__d(
  "MAIBACreativeCompassFlowTracking",
  ["performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map();
    function u(e, t) {
      return e + ":" + t;
    }
    function c() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t.some(function (e) {
        return e == null || e === "";
      })
        ? null
        : t.join(":");
    }
    function d(t, n) {
      n == null ||
        n === "" ||
        s.set(u(t, n), (e || (e = r("performanceNow")))());
    }
    function m(t, n) {
      if (n == null || n === "") return null;
      var o = u(t, n),
        a = s.get(o);
      return a == null
        ? null
        : (s.delete(o),
          { from: t, ms: Math.round((e || (e = r("performanceNow")))() - a) });
    }
    function p() {
      s.clear();
    }
    ((l.compassScopeKey = c),
      (l.markCompassStep = d),
      (l.takeCompassLatency = m),
      (l.resetCompassFlowTrackingForTests = p));
  },
  98,
);
