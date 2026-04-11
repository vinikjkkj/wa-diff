__d(
  "FocusWithinHandler.react",
  ["ReactFocusEvent.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useInsertionEffect,
      d = u.useMemo,
      m = u.useRef,
      p = u.useState,
      _ = s.unstable_Scope;
    function f(e) {
      var t,
        n,
        r = o("react-compiler-runtime").c(19),
        a = e.children,
        i = e.onBlurWithin,
        l = e.onFocusChange,
        u = e.onFocusVisibleChange,
        d = e.onFocusWithin,
        f = e.testOnly,
        g = m(null),
        h = p((t = f && f.focus) != null ? t : !1),
        y = h[0],
        C = h[1],
        b = p((n = f && f.focusVisible) != null ? n : !1),
        v = b[0],
        S = b[1],
        R;
      if (r[0] !== y || r[1] !== i || r[2] !== l || r[3] !== u || r[4] !== d) {
        var L;
        r[6] !== l
          ? ((L = l
              ? function (e) {
                  (C(e), l(e));
                }
              : C),
            (r[6] = l),
            (r[7] = L))
          : (L = r[7]);
        var E;
        (r[8] !== u
          ? ((E = u
              ? function (e) {
                  (S(e), u(e));
                }
              : S),
            (r[8] = u),
            (r[9] = E))
          : (E = r[9]),
          (R = {
            onBlurWithin: function (t) {
              i && y && i(t);
            },
            onFocusWithin: function (t) {
              d && !y && d(t);
            },
            onFocusWithinChange: L,
            onFocusWithinVisibleChange: E,
          }),
          (r[0] = y),
          (r[1] = i),
          (r[2] = l),
          (r[3] = u),
          (r[4] = d),
          (r[5] = R));
      } else R = r[5];
      var k = o("ReactFocusEvent.react").useFocusWithin(R),
        I,
        T;
      (r[10] !== k
        ? ((I = function () {
            return (
              k(g.current),
              function () {
                k(null);
              }
            );
          }),
          (T = [g, k]),
          (r[10] = k),
          (r[11] = I),
          (r[12] = T))
        : ((I = r[11]), (T = r[12])),
        c(I, T));
      var D;
      r[13] !== a || r[14] !== y || r[15] !== v
        ? ((D = typeof a == "function" ? a(y, v) : a),
          (r[13] = a),
          (r[14] = y),
          (r[15] = v),
          (r[16] = D))
        : (D = r[16]);
      var x;
      return (
        r[17] !== D
          ? ((x = s.jsx(_, { ref: g, children: D })), (r[17] = D), (r[18] = x))
          : (x = r[18]),
        x
      );
    }
    l.default = f;
  },
  98,
);
