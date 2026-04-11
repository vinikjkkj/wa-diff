__d(
  "useFadeEffect",
  [
    "clearTimeout",
    "react",
    "react-compiler-runtime",
    "setTimeout",
    "useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useLayoutEffect,
      d = s.useReducer,
      m = s.useRef,
      p = 1e3;
    function _(e, t) {
      switch (t.type) {
        case "start":
          return { isTransitioning: !0, shouldBeVisible: t.shouldBeVisible };
        case "finish":
          return { isTransitioning: !1, shouldBeVisible: e.shouldBeVisible };
        default:
          return e;
      }
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(12),
        n = m(null),
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { isTransitioning: !1, shouldBeVisible: !1 }), (t[0] = a))
        : (a = t[0]);
      var i = d(_, a),
        l = i[0],
        s = i[1],
        u = l.isTransitioning,
        f = l.shouldBeVisible,
        g = m(null),
        h = m(null),
        y,
        C;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function () {
            return function () {
              (g.current != null && r("clearTimeout")(g.current),
                h.current != null && window.cancelAnimationFrame(h.current));
            };
          }),
          (C = []),
          (t[1] = y),
          (t[2] = C))
        : ((y = t[1]), (C = t[2])),
        r("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED")(y, C));
      var b;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function () {
            (s({ type: "finish" }),
              g.current != null && r("clearTimeout")(g.current),
              (g.current = null));
          }),
          (t[3] = b))
        : (b = t[3]);
      var v = b,
        S;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function (t) {
            (h.current != null && window.cancelAnimationFrame(h.current),
              (h.current = window.requestAnimationFrame(function () {
                (s({ shouldBeVisible: t, type: "start" }),
                  (h.current = null),
                  g.current != null && r("clearTimeout")(g.current),
                  (g.current = r("setTimeout")(v, p)));
              })));
          }),
          (t[4] = S))
        : (S = t[4]);
      var R = S,
        L = m(!1),
        E,
        k;
      (t[5] !== e
        ? ((E = function () {
            (L.current !== e && (!e || n.current != null) && R(e),
              (L.current = e));
          }),
          (k = [e, R]),
          (t[5] = e),
          (t[6] = E),
          (t[7] = k))
        : ((E = t[6]), (k = t[7])),
        c(E, k));
      var I;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = function (t) {
            var e = n.current;
            ((n.current = t),
              t != null
                ? (t.addEventListener("transitionend", v),
                  t.addEventListener("webkitTransitionEnd", v),
                  L.current === !0 && R(!0))
                : e != null &&
                  (e.removeEventListener("transitionend", v),
                  e.removeEventListener("webkitTransitionEnd", v)));
          }),
          (t[8] = I))
        : (I = t[8]);
      var T = I,
        D = u || f || e,
        x;
      return (
        t[9] !== f || t[10] !== D
          ? ((x = [D, f, T]), (t[9] = f), (t[10] = D), (t[11] = x))
          : (x = t[11]),
        x
      );
    }
    l.default = f;
  },
  98,
);
