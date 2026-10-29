__d(
  "WAWebWindowsHybridBridgeTrace",
  ["WALogger", "WAWebBuildConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1e3,
      c = 1e3,
      d = 50,
      m =
        "native:" +
        (o("WAWebBuildConstants").WINDOWS_BUILD != null
          ? o("WAWebBuildConstants").WINDOWS_BUILD
          : "unknown"),
      p = new Map();
    function _(t, n) {
      var r = t.bridge + "." + t.method,
        a = p.get(r);
      if (a == null || n - a.startTs > c) {
        p.set(r, { count: 1, reported: !1, startTs: n });
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
            .tags(m)
            .sendLogs("hybrid-bridge-burst", { sampling: 0.01 })));
    }
    function f(e, t) {
      var n = self.performance.now() - t;
      n <= u ||
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
          .tags(m)
          .sendLogs(
            e.type === "async"
              ? "hybrid-bridge-slow-dispatch"
              : "hybrid-bridge-slow",
            { sampling: 0.01 },
          );
    }
    function g(e, t) {
      var n = self.performance.now();
      _(e, n);
      try {
        return t();
      } finally {
        f(e, n);
      }
    }
    function h(e, t) {
      return g(babelHelpers.extends({}, e, { type: "read" }), t);
    }
    ((l.traceBridgeCall = g), (l.traceBridgeRead = h));
  },
  98,
);
