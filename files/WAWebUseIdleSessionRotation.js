__d(
  "WAWebUseIdleSessionRotation",
  [
    "WAWebUnifiedSession",
    "WAWebUseUnifiedSession",
    "justknobx",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(10),
        n = o("WAWebUseUnifiedSession").useUnifiedSession(e),
        r = d(!1),
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function () {
            g() && (r.current = !0);
          }),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebTimeout").useManualTimeout(a),
        l = i[0],
        s = i[1],
        u;
      t[1] !== s || t[2] !== n || t[3] !== l
        ? ((u = function () {
            if (!g()) {
              (s(), (r.current = !1));
              return;
            }
            (r.current &&
              document.hasFocus() &&
              ((r.current = !1),
              n(o("WAWebUnifiedSession").UnifiedSessionGenReason.IdleTimeout)),
              l(f()));
          }),
          (t[1] = s),
          (t[2] = n),
          (t[3] = l),
          (t[4] = u))
        : (u = t[4]);
      var m = u,
        p,
        _;
      (t[5] !== m
        ? ((p = function () {
            m();
          }),
          (_ = [m]),
          (t[5] = m),
          (t[6] = p),
          (t[7] = _))
        : ((p = t[6]), (_ = t[7])),
        c(p, _));
      var h;
      t[8] !== m
        ? ((h = function () {
            ((r.current = !1), m());
          }),
          (t[8] = m),
          (t[9] = h))
        : (h = t[9]);
      var y = h;
      (o("useWAWebListener").useListener(window, "focus", y),
        o("useWAWebListener").useListener(window, "mousedown", m),
        o("useWAWebListener").useListener(window, "keydown", m));
    }
    l.useIdleSessionRotation = h;
  },
  98,
);
