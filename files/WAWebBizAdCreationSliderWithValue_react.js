__d(
  "WAWebBizAdCreationSliderWithValue.react",
  [
    "WAWebFlex.react",
    "WDSSlider.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = { valueContainer: { height: "xnnlda6", $$css: !0 } };
    function d(e) {
      return e.toString();
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.displayValueText,
        a = e.max,
        i = e.min,
        l = e.onChange,
        m = e.showMinMaxLabels,
        p = e.step,
        _ = e.values,
        f = n === void 0 ? d : n,
        g = p === void 0 ? 1 : p,
        h = u(_[0]),
        y = h[0],
        C = h[1],
        b = u(_),
        v = b[0],
        S = b[1];
      _[0] !== v[0] && (S(_), C(_[0]));
      var R;
      t[0] !== f || t[1] !== y
        ? ((R = f(y)), (t[0] = f), (t[1] = y), (t[2] = R))
        : (R = t[2]);
      var L;
      t[3] !== R
        ? ((L = s.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: c.valueContainer,
            justify: "center",
            align: "center",
            children: s.jsx(o("WAWebFlex.react").FlexRow, {
              columnGap: 4,
              align: "end",
              justify: "center",
              grow: 1,
              children: s.jsx(o("WAWebFlex.react").FlexItem, {
                children: s.jsx(r("WDSText.react"), {
                  type: "LargeTitle1",
                  colorName: "contentDefault",
                  children: R,
                }),
              }),
            }),
          })),
          (t[3] = R),
          (t[4] = L))
        : (L = t[4]);
      var E = m ? 8 : 12,
        k = m ? 8 : 12,
        I;
      t[5] !== y ? ((I = [y]), (t[5] = y), (t[6] = I)) : (I = t[6]);
      var T;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t) {
            return C(t[0]);
          }),
          (t[7] = T))
        : (T = t[7]);
      var D = m ? "minMax" : "none",
        x;
      t[8] !== f ||
      t[9] !== a ||
      t[10] !== i ||
      t[11] !== l ||
      t[12] !== g ||
      t[13] !== I ||
      t[14] !== D
        ? ((x = s.jsx(r("WDSSlider.react"), {
            values: I,
            min: i,
            max: a,
            step: g,
            onChange: T,
            onChangeSettled: l,
            startEndLabels: D,
            displayValueText: f,
          })),
          (t[8] = f),
          (t[9] = a),
          (t[10] = i),
          (t[11] = l),
          (t[12] = g),
          (t[13] = I),
          (t[14] = D),
          (t[15] = x))
        : (x = t[15]);
      var $;
      t[16] !== x || t[17] !== E || t[18] !== k
        ? (($ = s.jsx(o("WAWebFlex.react").FlexItem, {
            align: "stretch",
            paddingTop: E,
            paddingBottom: k,
            children: x,
          })),
          (t[16] = x),
          (t[17] = E),
          (t[18] = k),
          (t[19] = $))
        : ($ = t[19]);
      var P;
      return (
        t[20] !== $ || t[21] !== L
          ? ((P = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              children: [L, $],
            })),
            (t[20] = $),
            (t[21] = L),
            (t[22] = P))
          : (P = t[22]),
        P
      );
    }
    l.default = m;
  },
  98,
);
