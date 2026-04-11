__d(
  "HiddenSubtreeContextProvider.react",
  [
    "HiddenSubtreeContext",
    "HiddenSubtreePassiveContext",
    "react",
    "react-compiler-runtime",
    "removeFromArray",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useEffect,
      p = u.useLayoutEffect,
      _ = u.useMemo,
      f = u.useRef;
    function g(e, t) {
      return (
        e.backgrounded === t.backgrounded &&
        e.hidden === t.hidden &&
        e.visibleForAnimation === t.visibleForAnimation
      );
    }
    function h(e, t) {
      var n = e.backgrounded || t.backgrounded,
        r = e.hidden || t.hidden,
        o = e.visibleForAnimation || t.visibleForAnimation;
      return {
        backgrounded: n,
        hidden: r,
        hiddenOrBackgrounded: n || r,
        hiddenOrBackgrounded_FIXME: n || r,
        visibleForAnimation: o,
      };
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(38),
        n = e.children,
        a = e.ignoreParent,
        i = e.isBackgrounded,
        l = e.isHidden,
        u = e.isVisibleForAnimation,
        c = i === void 0 ? !1 : i,
        _ = u === void 0 ? !1 : u,
        y = d(r("HiddenSubtreeContext")),
        C = d(r("HiddenSubtreePassiveContext")),
        b = c || l,
        v = c || l,
        S;
      t[0] !== c || t[1] !== l || t[2] !== _ || t[3] !== b || t[4] !== v
        ? ((S = {
            backgrounded: c,
            hidden: l,
            hiddenOrBackgrounded: b,
            hiddenOrBackgrounded_FIXME: v,
            visibleForAnimation: _,
          }),
          (t[0] = c),
          (t[1] = l),
          (t[2] = _),
          (t[3] = b),
          (t[4] = v),
          (t[5] = S))
        : (S = t[5]);
      var R = S,
        L = f(R),
        E = f(null),
        k;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = []), (t[6] = k))
        : (k = t[6]);
      var I = f(k),
        T;
      t[7] !== a || t[8] !== C
        ? ((T = function () {
            var e = a === !0 ? L.current : h(L.current, C.getCurrentState());
            if (E.current == null || !g(e, E.current)) {
              E.current = e;
              var t = Array.from(I.current);
              t.forEach(function (t) {
                t(e);
              });
            }
          }),
          (t[7] = a),
          (t[8] = C),
          (t[9] = T))
        : (T = t[9]);
      var D = T,
        x,
        $;
      (t[10] !== R || t[11] !== D
        ? ((x = function () {
            ((L.current = R), D());
          }),
          ($ = [R, D]),
          (t[10] = R),
          (t[11] = D),
          (t[12] = x),
          (t[13] = $))
        : ((x = t[12]), ($ = t[13])),
        p(x, $));
      var P, N;
      (t[14] !== a || t[15] !== D || t[16] !== C
        ? ((P = function () {
            if (a !== !0) {
              var e = C.subscribeToChanges(D);
              return function () {
                return e.remove();
              };
            }
          }),
          (N = [a, D, C]),
          (t[14] = a),
          (t[15] = D),
          (t[16] = C),
          (t[17] = P),
          (t[18] = N))
        : ((P = t[17]), (N = t[18])),
        m(P, N));
      var M;
      t[19] !== a || t[20] !== C
        ? ((M = {
            getCurrentState: function () {
              return a === !0 ? L.current : h(L.current, C.getCurrentState());
            },
            subscribeToChanges: function (t) {
              var e = I.current;
              return (
                e.push(t),
                {
                  remove: function () {
                    r("removeFromArray")(e, t);
                  },
                }
              );
            },
          }),
          (t[19] = a),
          (t[20] = C),
          (t[21] = M))
        : (M = t[21]);
      var w = M,
        A;
      t[22] !== a || t[23] !== R || t[24] !== y
        ? ((A = a === !0 ? R : h(R, y)),
          (t[22] = a),
          (t[23] = R),
          (t[24] = y),
          (t[25] = A))
        : (A = t[25]);
      var F = A,
        O = F.backgrounded || F.hidden,
        B = F.backgrounded || F.hidden,
        W;
      t[26] !== F.backgrounded ||
      t[27] !== F.hidden ||
      t[28] !== F.visibleForAnimation ||
      t[29] !== O ||
      t[30] !== B
        ? ((W = {
            backgrounded: F.backgrounded,
            hidden: F.hidden,
            hiddenOrBackgrounded: O,
            hiddenOrBackgrounded_FIXME: B,
            visibleForAnimation: F.visibleForAnimation,
          }),
          (t[26] = F.backgrounded),
          (t[27] = F.hidden),
          (t[28] = F.visibleForAnimation),
          (t[29] = O),
          (t[30] = B),
          (t[31] = W))
        : (W = t[31]);
      var q = W,
        U;
      t[32] !== n || t[33] !== w
        ? ((U = s.jsx(r("HiddenSubtreePassiveContext").Provider, {
            value: w,
            children: n,
          })),
          (t[32] = n),
          (t[33] = w),
          (t[34] = U))
        : (U = t[34]);
      var V;
      return (
        t[35] !== q || t[36] !== U
          ? ((V = s.jsx(r("HiddenSubtreeContext").Provider, {
              value: q,
              children: U,
            })),
            (t[35] = q),
            (t[36] = U),
            (t[37] = V))
          : (V = t[37]),
        V
      );
    }
    l.default = y;
  },
  98,
);
