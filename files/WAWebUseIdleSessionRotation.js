__d(
  "WAWebUseIdleSessionRotation",
  [
    "WAWebUnifiedSession",
    "WAWebUseUnifiedSession",
    "justknobx",
    "react",
    "useWAWebListener",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef,
      m = 6e4,
      p = 72e5,
      _ = 18e5;
    function f() {
      var e = r("justknobx")._("3017"),
        t = !Number.isFinite(e) || e <= 0 ? _ : e;
      return Math.max(m, Math.min(p, t));
    }
    function g() {
      return r("justknobx")._("3246");
    }
    function h(e) {
      var t = o("WAWebUseUnifiedSession").useUnifiedSession(e),
        n = d(!1),
        r = o("useWAWebTimeout").useManualTimeout(function () {
          g() && (n.current = !0);
        }),
        a = r[0],
        i = r[1],
        l = u(
          function () {
            if (!g()) {
              (i(), (n.current = !1));
              return;
            }
            (n.current &&
              document.hasFocus() &&
              ((n.current = !1),
              t(o("WAWebUnifiedSession").UnifiedSessionGenReason.IdleTimeout)),
              a(f()));
          },
          [i, t, a],
        );
      c(
        function () {
          l();
        },
        [l],
      );
      var s = function () {
        ((n.current = !1), l());
      };
      (o("useWAWebListener").useListener(window, "focus", s),
        o("useWAWebListener").useListener(window, "mousedown", l),
        o("useWAWebListener").useListener(window, "keydown", l));
    }
    l.useIdleSessionRotation = h;
  },
  98,
);
