__d(
  "WAWebWindowsHybridBridgeTrace",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1e3,
      c = 1e3,
      d = 50,
      m = new Map();
    function p(t, n) {
      var r = t.bridge + "." + t.method,
        a = m.get(r);
      if (a == null || n - a.startTs > c) {
        m.set(r, { count: 1, reported: !1, startTs: n });
        return;
      }
      (a.count++,
        a.count > d &&
          !a.reported &&
          ((a.reported = !0),
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[hybrid-bridge] burst bridge=",
                  " method=",
                  " type=",
                  " count=",
                  " windowMs=",
                  "",
                ])),
              t.bridge,
              t.method,
              t.type,
              a.count,
              c,
            )
            .sendLogs("hybrid-bridge-burst", { sampling: 0.01 })));
    }
    function _(e, t) {
      var n = self.performance.now() - t;
      n > u &&
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[hybrid-bridge] slow bridge=",
                " method=",
                " type=",
                " ms=",
                "",
              ])),
            e.bridge,
            e.method,
            e.type,
            n.toFixed(0),
          )
          .sendLogs("hybrid-bridge-slow", { sampling: 0.01 });
    }
    function f(e, t) {
      var n = self.performance.now();
      p(e, n);
      try {
        return t();
      } finally {
        _(e, n);
      }
    }
    l.traceBridgeCall = f;
  },
  98,
);
