__d(
  "WAWebChatThemeGrid.react",
  [
    "fbt",
    "WAWebChatThemeCanvas.react",
    "WAWebKeyboardHotKeys.react",
    "WDSFlex.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useRef,
      p = d.useState,
      _ = {
        themeGrid: {
          paddingTop: "x1h678fw",
          paddingBottom: "xv6tirj",
          paddingInlineEnd: "xcldk2z",
          paddingInlineStart: "x1iw51ew",
          $$css: !0,
        },
        compact: {
          paddingTop: "xexx8yu",
          paddingBottom: "x18d9i69",
          $$css: !0,
        },
      };
    function f(t) {
      var n = o("react-compiler-runtime").c(38),
        a = t.compact,
        i = t.currentThemeId,
        l = t.onPreview,
        u = t.onSelect,
        d = t.themeMode,
        f = t.themes,
        g = t.variant,
        h;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = []), (n[0] = h))
        : (h = n[0]);
      var y = m(h),
        C = p(-1),
        b = C[0],
        v = C[1],
        S;
      n[1] !== l || n[2] !== f
        ? ((S = function (t) {
            if ((l(t), t != null)) {
              var e = f.indexOf(t);
              e !== -1 && v(e);
            } else v(-1);
          }),
          (n[1] = l),
          (n[2] = f),
          (n[3] = S))
        : (S = n[3]);
      var R = S,
        L;
      n[4] !== f.length
        ? ((L = function (t) {
            var e;
            t < 0 ||
              t >= f.length ||
              (v(t), (e = y.current[t]) == null || e.focus());
          }),
          (n[4] = f.length),
          (n[5] = L))
        : (L = n[5]);
      var E = L,
        k,
        I,
        T;
      n[6] !== E || n[7] !== b
        ? ((k = function () {
            b !== -1 && E(b - 1);
          }),
          (I = function () {
            b !== -1 && E(b + 1);
          }),
          (T = function () {
            b !== -1 && E(0);
          }),
          (n[6] = E),
          (n[7] = b),
          (n[8] = k),
          (n[9] = I),
          (n[10] = T))
        : ((k = n[8]), (I = n[9]), (T = n[10]));
      var D;
      n[11] !== E || n[12] !== b || n[13] !== f.length
        ? ((D = function () {
            b !== -1 && E(f.length - 1);
          }),
          (n[11] = E),
          (n[12] = b),
          (n[13] = f.length),
          (n[14] = D))
        : (D = n[14]);
      var x;
      n[15] !== k || n[16] !== I || n[17] !== T || n[18] !== D
        ? ((x = { left: k, right: I, home: T, end: D }),
          (n[15] = k),
          (n[16] = I),
          (n[17] = T),
          (n[18] = D),
          (n[19] = x))
        : (x = n[19]);
      var $ = x,
        P;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "Chat themes")), (n[20] = P))
        : (P = n[20]);
      var N;
      n[21] !== a
        ? ((N = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexRow,
            o("WDSFlex.stylex").wdsFlex.flexWrap,
            o("WDSFlex.stylex").wdsFlex.alignStart,
            _.themeGrid,
            a === !0 && _.compact,
          )),
          (n[21] = a),
          (n[22] = N))
        : (N = n[22]);
      var M;
      n[23] !== i ||
      n[24] !== b ||
      n[25] !== R ||
      n[26] !== l ||
      n[27] !== u ||
      n[28] !== d ||
      n[29] !== f ||
      n[30] !== g
        ? ((M = f.map(function (e, t) {
            var n = b === t,
              o = i === e,
              a = i == null && t === 0,
              s = b !== -1,
              m = s ? n : o || a;
            return c.jsx(
              r("WAWebChatThemeCanvas.react"),
              {
                themeId: e,
                isSelected: o,
                themeMode: d,
                onSelect: u,
                onPreview: l,
                onFocusChange: R,
                tabIndex: m ? 0 : -1,
                variant: g,
                ref: function (n) {
                  y.current[t] = n;
                },
              },
              e,
            );
          })),
          (n[23] = i),
          (n[24] = b),
          (n[25] = R),
          (n[26] = l),
          (n[27] = u),
          (n[28] = d),
          (n[29] = f),
          (n[30] = g),
          (n[31] = M))
        : (M = n[31]);
      var w;
      n[32] !== N || n[33] !== M
        ? ((w = c.jsx("div", babelHelpers.extends({}, N, { children: M }))),
          (n[32] = N),
          (n[33] = M),
          (n[34] = w))
        : (w = n[34]);
      var A;
      return (
        n[35] !== $ || n[36] !== w
          ? ((A = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: $,
              role: "radiogroup",
              "aria-label": P,
              children: w,
            })),
            (n[35] = $),
            (n[36] = w),
            (n[37] = A))
          : (A = n[37]),
        A
      );
    }
    l.default = f;
  },
  226,
);
