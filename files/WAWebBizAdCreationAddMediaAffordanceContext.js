__d(
  "WAWebBizAdCreationAddMediaAffordanceContext",
  ["WAWebNoop", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useMemo,
      _ = u.useRef,
      f = u.useState,
      g = {
        getFocusTarget: function () {
          return null;
        },
        isAddMediaBusy: !1,
        isCreativeCtaVisible: null,
        openMediaPicker: function () {},
        registerFocusTarget: function () {
          return r("WAWebNoop");
        },
        registerOpenMediaPicker: function () {},
        scrollRootElement: null,
        updateAddMediaBusy: function () {},
        updateCreativeCtaVisible: function () {},
      },
      h = c(g);
    function y(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.children,
        r = e.scrollRootElement,
        a = r === void 0 ? null : r,
        i = f(null),
        l = i[0],
        u = i[1],
        c = f(!1),
        d = c[0],
        m = c[1],
        p = _(null),
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function (t) {
            u(t);
          }),
          (t[0] = g))
        : (g = t[0]);
      var y = g,
        C;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function (t) {
            m(t);
          }),
          (t[1] = C))
        : (C = t[1]);
      var b = C,
        v;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function (t) {
            p.current = t;
          }),
          (t[2] = v))
        : (v = t[2]);
      var S = v,
        R;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function () {
            p.current == null || p.current();
          }),
          (t[3] = R))
        : (R = t[3]);
      var L = R,
        E;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { addMore: null, nullState: null }), (t[4] = E))
        : (E = t[4]);
      var k = _(E),
        I;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = function (t, n) {
            return (
              (k.current[t] = n),
              function () {
                k.current[t] === n && (k.current[t] = null);
              }
            );
          }),
          (t[5] = I))
        : (I = t[5]);
      var T = I,
        D;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function (t) {
            return k.current[t];
          }),
          (t[6] = D))
        : (D = t[6]);
      var x = D,
        $;
      t[7] !== d || t[8] !== l || t[9] !== a
        ? (($ = {
            getFocusTarget: x,
            isAddMediaBusy: d,
            isCreativeCtaVisible: l,
            openMediaPicker: L,
            registerFocusTarget: T,
            registerOpenMediaPicker: S,
            scrollRootElement: a,
            updateAddMediaBusy: b,
            updateCreativeCtaVisible: y,
          }),
          (t[7] = d),
          (t[8] = l),
          (t[9] = a),
          (t[10] = $))
        : ($ = t[10]);
      var P = $,
        N;
      return (
        t[11] !== n || t[12] !== P
          ? ((N = s.jsx(h.Provider, { value: P, children: n })),
            (t[11] = n),
            (t[12] = P),
            (t[13] = N))
          : (N = t[13]),
        N
      );
    }
    function C() {
      return m(h);
    }
    ((l.WAWebBizAdCreationAddMediaAffordanceProvider = y),
      (l.useWAWebBizAdCreationAddMediaAffordance = C));
  },
  98,
);
