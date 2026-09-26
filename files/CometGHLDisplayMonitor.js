__d(
  "CometGHLDisplayMonitor",
  [
    "DebugOwl",
    "FBLogger",
    "GHLGating",
    "clearTimeout",
    "cometGHLContentDisplayCheck",
    "performanceNow",
    "setTimeoutCometLoggingPri",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = 1e3,
      c = null,
      d = !1,
      m = new Set(),
      p = function (t, n) {
        s.has(t) || s.set(t, new Set());
        var e = s.get(t);
        return e == null
          ? (r("FBLogger")("GHL").mustfix(
              "Expected Set to be declared for container",
            ),
            { dispose: function () {} })
          : (e.add(n),
            c === null && _(),
            {
              dispose: function () {
                (e.delete(n),
                  e.size === 0 &&
                    (s.delete(t),
                    s.size === 0 && (r("clearTimeout")(c), (c = null))));
              },
            });
      },
      _ = function () {
        (s.forEach(function (t, n) {
          var o = n.current;
          o == null ||
            h(o) ||
            !r("cometGHLContentDisplayCheck")(o) ||
            t.forEach(function (n, o) {
              var a = o.onLogBlockCallback,
                i = o.startTime,
                l = o.targetRef,
                s = l.current;
              if ((r("DebugOwl").hoot(s), s != null)) {
                var u = h(s) != null;
                if ((r("DebugOwl").flap(s, { hiddenByFB: u }), !u)) {
                  var c = r("cometGHLContentDisplayCheck")(s);
                  if (!c) {
                    var d = (e || (e = r("performanceNow")))() - i;
                    (a(d), g(), t.delete(n));
                  }
                }
              }
            });
        }),
          (c = r("setTimeoutCometLoggingPri")(_, u)));
      },
      f = function (t) {
        return (
          m.add(t),
          d && t(),
          {
            dispose: function () {
              m.delete(t);
            },
          }
        );
      },
      g = function () {
        d !== !0 &&
          ((d = !0),
          m.forEach(function (e) {
            return e();
          }));
      },
      h = function (t) {
        return t.closest == null || t.closest(y);
      },
      y = (function () {
        return (
          "." +
          String("x1s85apg".split(" ").pop()) +
          (o("GHLGating").getCometGhlContentVisibility()
            ? ",." + String("xdps06".split(" ").pop())
            : "")
        );
      })();
    ((l.m = p), (l.subscribeAny = f));
  },
  98,
);
