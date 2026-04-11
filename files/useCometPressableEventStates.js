__d(
  "useCometPressableEventStates",
  [
    "ExecutionEnvironment",
    "ReactFocusEvent.react",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.onFocusChange,
        r = e.onFocusVisibleChange,
        a = e.onHoverChange,
        i = e.onPressChange,
        l = e.ref,
        s = e.testOnly_pressed,
        u = s === void 0 ? !1 : s,
        c = m(u),
        p = c[0],
        _ = c[1],
        f = m(!1),
        g = f[0],
        h = f[1],
        y = m(!1),
        C = y[0],
        b = y[1],
        v = m(!1),
        S = v[0],
        R = v[1],
        L;
      t[0] !== i || t[1] !== u
        ? ((L = function (t) {
            (_(t || u), i && i(t));
          }),
          (t[0] = i),
          (t[1] = u),
          (t[2] = L))
        : (L = t[2]);
      var E = L,
        k;
      t[3] !== n
        ? ((k = function (t) {
            (h(t), n && n(t));
          }),
          (t[3] = n),
          (t[4] = k))
        : (k = t[4]);
      var I = k,
        T;
      t[5] !== r
        ? ((T = function (t) {
            (b(t), r && r(t));
          }),
          (t[5] = r),
          (t[6] = T))
        : (T = t[6]);
      var D = T,
        x;
      t[7] !== a
        ? ((x = function (t) {
            (R(t), a && a(t));
          }),
          (t[7] = a),
          (t[8] = x))
        : (x = t[8]);
      var $ = x,
        P,
        N;
      (t[9] !== l || t[10] !== I || t[11] !== D
        ? ((P = function () {
            var e = l.current;
            e != null &&
              e === document.activeElement &&
              (I(!0),
              o("ReactFocusEvent.react").getGlobalFocusVisible() && D(!0));
          }),
          (N = [l, I, D]),
          (t[9] = l),
          (t[10] = I),
          (t[11] = D),
          (t[12] = P),
          (t[13] = N))
        : ((P = t[12]), (N = t[13])),
        d(P, N));
      var M;
      return (
        t[14] !== C ||
        t[15] !== g ||
        t[16] !== S ||
        t[17] !== I ||
        t[18] !== D ||
        t[19] !== $ ||
        t[20] !== E ||
        t[21] !== p
          ? ((M = {
              focused: g,
              focusVisible: C,
              hovered: S,
              onFocusChangeHandler: I,
              onFocusVisibleChangeHandler: D,
              onHoverChangeHandler: $,
              onPressChangesHandler: E,
              pressed: p,
            }),
            (t[14] = C),
            (t[15] = g),
            (t[16] = S),
            (t[17] = I),
            (t[18] = D),
            (t[19] = $),
            (t[20] = E),
            (t[21] = p),
            (t[22] = M))
          : (M = t[22]),
        M
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.testOnly_pressed,
        a = n === void 0 ? !1 : n,
        i;
      if (t[0] !== a) {
        var l;
        ((i = {
          focused: !1,
          focusVisible: !1,
          hovered: !1,
          onFocusChangeHandler: (l = r("emptyFunction")),
          onFocusVisibleChangeHandler: l,
          onHoverChangeHandler: l,
          onPressChangesHandler: l,
          pressed: a,
        }),
          (t[0] = a),
          (t[1] = i));
      } else i = t[1];
      return i;
    }
    var f = (e || (e = r("ExecutionEnvironment"))).canUseDOM ? p : _,
      g = f;
    l.default = g;
  },
  98,
);
