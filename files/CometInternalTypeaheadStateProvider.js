__d(
  "CometInternalTypeaheadStateProvider",
  [
    "BaseTypeaheadLayoutContextualStrategyStateContextProvider.react",
    "CometInternalTypeaheadStateContext",
    "CometInternalTypeaheadStateDispatcherContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useRef,
      _ = u.useState,
      f = [];
    function g(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.autoOpen,
        a = e.children,
        i = e.emptyEntries_DO_NOT_USE,
        l = e.onClose,
        u = e.onOpen,
        c = i === void 0 ? f : i,
        m = _(null),
        g = m[0],
        h = m[1],
        y = _(null),
        C = y[0],
        b = y[1],
        v = _(null),
        S = v[0],
        R = v[1],
        L = _(c),
        E = L[0],
        k = L[1],
        I = p(c),
        T,
        D;
      (t[0] !== c
        ? ((T = function () {
            I.current !== c &&
              ((I.current = c),
              k(function (e) {
                return e.length ? e : c;
              }));
          }),
          (D = [k, I, c]),
          (t[0] = c),
          (t[1] = T),
          (t[2] = D))
        : ((T = t[1]), (D = t[2])),
        d(T, D));
      var x;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function (t) {
            k(function (e) {
              var n = Array.isArray(t) ? t : t(e);
              return n.length > 0 ? n : I.current;
            });
          }),
          (t[3] = x))
        : (x = t[3]);
      var $ = x,
        P;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = function (t) {
            var e = t.entry,
              n = t.secondaryActionHighlighted,
              r = t.source;
            (h(e), R(r), b(n));
          }),
          (t[4] = P))
        : (P = t[4]);
      var N = P,
        M;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = { dispatchActiveEntries: $, dispatchHighlightedEntry: N }),
          (t[5] = M))
        : (M = t[5]);
      var w = M,
        A;
      t[6] !== E || t[7] !== g || t[8] !== S || t[9] !== C
        ? ((A = {
            activeEntries: E,
            highlightedEntry: g,
            highlightedEntrySource: S,
            secondaryActionHighlighted: C,
          }),
          (t[6] = E),
          (t[7] = g),
          (t[8] = S),
          (t[9] = C),
          (t[10] = A))
        : (A = t[10]);
      var F = A,
        O;
      t[11] !== n || t[12] !== a || t[13] !== l || t[14] !== u
        ? ((O = s.jsx(
            r(
              "BaseTypeaheadLayoutContextualStrategyStateContextProvider.react",
            ),
            { autoOpen: n, onClose: l, onOpen: u, children: a },
          )),
          (t[11] = n),
          (t[12] = a),
          (t[13] = l),
          (t[14] = u),
          (t[15] = O))
        : (O = t[15]);
      var B;
      return (
        t[16] !== F || t[17] !== O
          ? ((B = s.jsx(
              r("CometInternalTypeaheadStateDispatcherContext").Provider,
              {
                value: w,
                children: s.jsx(
                  r("CometInternalTypeaheadStateContext").Provider,
                  { value: F, children: O },
                ),
              },
            )),
            (t[16] = F),
            (t[17] = O),
            (t[18] = B))
          : (B = t[18]),
        B
      );
    }
    l.default = g;
  },
  98,
);
