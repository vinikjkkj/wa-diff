__d(
  "useDynamicVirtualizationMargin.react",
  [
    "ExecutionEnvironment",
    "VirtualizationContainerContext",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "useDebouncedComet",
    "useWeightedScrollSpeedRef.react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useContext,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState,
      _ = r("justknobx")._("3655") / 10,
      f = r("justknobx")._("3656"),
      g = r("justknobx")._("3657"),
      h = r("justknobx")._("3658"),
      y = r("justknobx")._("3659");
    function C(e, t) {
      return (
        e.bottom === t.bottom &&
        e.left === t.left &&
        e.right === t.right &&
        e.top === t.top
      );
    }
    function b(t, n, a, i, l) {
      var s = o("react-compiler-runtime").c(19),
        u = t === void 0 ? !1 : t,
        b = i === void 0 ? !1 : i,
        v = l === void 0 ? null : l,
        S;
      s[0] !== n || s[1] !== a
        ? ((S = { bottom: a, left: n, right: n, top: a }),
          (s[0] = n),
          (s[1] = a),
          (s[2] = S))
        : (S = s[2]);
      var R = p(S),
        L = R[0],
        E = R[1],
        k = m(0),
        I = r("useWeightedScrollSpeedRef.react")(v),
        T = c(r("VirtualizationContainerContext")),
        D;
      s[3] !== a || s[4] !== u || s[5] !== b || s[6] !== I
        ? ((D = function (t) {
            if (u) {
              var e = t(),
                n = e > k.current;
              ((k.current = e),
                E(function (e) {
                  var t = window.innerHeight,
                    r = I.weightedSpeed,
                    o = r === 0 ? 1 : r / y,
                    i = h * o,
                    l = b ? 1 : _,
                    s = b ? _ : 1,
                    u = Math.min(a * l, t),
                    c = Math.min(a * s, t),
                    d = t / g,
                    m;
                  return (
                    n
                      ? (m = babelHelpers.extends({}, e, {
                          bottom: Math.min(c, e.bottom + i),
                          top: Math.min(u, Math.max(d, e.top - i)),
                        }))
                      : (m = babelHelpers.extends({}, e, {
                          bottom: Math.min(c, Math.max(d, e.bottom - i)),
                          top: Math.min(u, e.top + i),
                        })),
                    C(e, m) ? e : m
                  );
                }));
            }
          }),
          (s[3] = a),
          (s[4] = u),
          (s[5] = b),
          (s[6] = I),
          (s[7] = D))
        : (D = s[7]);
      var x = D,
        $;
      s[8] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = { wait: f }), (s[8] = $))
        : ($ = s[8]);
      var P = r("useDebouncedComet")(x, $),
        N;
      s[9] !== P ||
      s[10] !== u ||
      s[11] !== v ||
      s[12] !== (T == null ? void 0 : T.rootElementRef)
        ? ((N = function () {
            if (u) {
              var t =
                  typeof v == "function"
                    ? v()
                    : T == null
                      ? void 0
                      : T.rootElementRef.current,
                n = !t,
                o = n ? window : t;
              if (
                !(
                  !(e || (e = r("ExecutionEnvironment"))).canUseDOM ||
                  typeof window == "undefined"
                )
              ) {
                var a = function () {
                    var e = n
                      ? window.scrollY
                      : t == null
                        ? void 0
                        : t.scrollTop;
                    return e != null ? e : 0;
                  },
                  i = function () {
                    P(a);
                  };
                return (
                  o == null || o.addEventListener("scroll", i, { passive: !0 }),
                  function () {
                    o == null || o.removeEventListener("scroll", i);
                  }
                );
              }
            }
          }),
          (s[9] = P),
          (s[10] = u),
          (s[11] = v),
          (s[12] = T == null ? void 0 : T.rootElementRef),
          (s[13] = N))
        : (N = s[13]);
      var M = T == null ? void 0 : T.rootElementRef,
        w;
      return (
        s[14] !== P || s[15] !== u || s[16] !== v || s[17] !== M
          ? ((w = [v, M, P, u]),
            (s[14] = P),
            (s[15] = u),
            (s[16] = v),
            (s[17] = M),
            (s[18] = w))
          : (w = s[18]),
        d(N, w),
        L
      );
    }
    l.default = b;
  },
  98,
);
