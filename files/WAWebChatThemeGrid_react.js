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
      };
    function f(t) {
      var n = o("react-compiler-runtime").c(35),
        a = t.currentThemeId,
        i = t.onPreview,
        l = t.onSelect,
        u = t.themeMode,
        d = t.themes,
        f;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = []), (n[0] = f))
        : (f = n[0]);
      var g = m(f),
        h = p(-1),
        y = h[0],
        C = h[1],
        b;
      n[1] !== i || n[2] !== d
        ? ((b = function (t) {
            if ((i(t), t != null)) {
              var e = d.indexOf(t);
              e !== -1 && C(e);
            } else C(-1);
          }),
          (n[1] = i),
          (n[2] = d),
          (n[3] = b))
        : (b = n[3]);
      var v = b,
        S;
      n[4] !== d.length
        ? ((S = function (t) {
            var e;
            t < 0 ||
              t >= d.length ||
              (C(t), (e = g.current[t]) == null || e.focus());
          }),
          (n[4] = d.length),
          (n[5] = S))
        : (S = n[5]);
      var R = S,
        L,
        E,
        k;
      n[6] !== R || n[7] !== y
        ? ((L = function () {
            y !== -1 && R(y - 1);
          }),
          (E = function () {
            y !== -1 && R(y + 1);
          }),
          (k = function () {
            y !== -1 && R(0);
          }),
          (n[6] = R),
          (n[7] = y),
          (n[8] = L),
          (n[9] = E),
          (n[10] = k))
        : ((L = n[8]), (E = n[9]), (k = n[10]));
      var I;
      n[11] !== R || n[12] !== y || n[13] !== d.length
        ? ((I = function () {
            y !== -1 && R(d.length - 1);
          }),
          (n[11] = R),
          (n[12] = y),
          (n[13] = d.length),
          (n[14] = I))
        : (I = n[14]);
      var T;
      n[15] !== L || n[16] !== E || n[17] !== k || n[18] !== I
        ? ((T = { left: L, right: E, home: k, end: I }),
          (n[15] = L),
          (n[16] = E),
          (n[17] = k),
          (n[18] = I),
          (n[19] = T))
        : (T = n[19]);
      var D = T,
        x,
        $;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = s._(/*BTDS*/ "Chat themes")),
          (x = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexRow,
            o("WDSFlex.stylex").wdsFlex.flexWrap,
            o("WDSFlex.stylex").wdsFlex.alignStart,
            _.themeGrid,
          )),
          (n[20] = x),
          (n[21] = $))
        : ((x = n[20]), ($ = n[21]));
      var P;
      n[22] !== a ||
      n[23] !== y ||
      n[24] !== v ||
      n[25] !== i ||
      n[26] !== l ||
      n[27] !== u ||
      n[28] !== d
        ? ((P = d.map(function (e, t) {
            var n = y === t,
              o = a === e,
              s = a == null && t === 0,
              d = y !== -1,
              m = d ? n : o || s;
            return c.jsx(
              r("WAWebChatThemeCanvas.react"),
              {
                themeId: e,
                isSelected: o,
                themeMode: u,
                onSelect: l,
                onPreview: i,
                onFocusChange: v,
                tabIndex: m ? 0 : -1,
                ref: function (n) {
                  g.current[t] = n;
                },
              },
              e,
            );
          })),
          (n[22] = a),
          (n[23] = y),
          (n[24] = v),
          (n[25] = i),
          (n[26] = l),
          (n[27] = u),
          (n[28] = d),
          (n[29] = P))
        : (P = n[29]);
      var N;
      n[30] !== P
        ? ((N = c.jsx("div", babelHelpers.extends({}, x, { children: P }))),
          (n[30] = P),
          (n[31] = N))
        : (N = n[31]);
      var M;
      return (
        n[32] !== D || n[33] !== N
          ? ((M = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: D,
              role: "radiogroup",
              "aria-label": $,
              children: N,
            })),
            (n[32] = D),
            (n[33] = N),
            (n[34] = M))
          : (M = n[34]),
        M
      );
    }
    l.default = f;
  },
  226,
);
