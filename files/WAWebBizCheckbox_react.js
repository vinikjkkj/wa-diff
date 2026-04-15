__d(
  "WAWebBizCheckbox.react",
  [
    "WAWebFlex.react",
    "WDSBaseCheckbox.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.isDisabled,
        a = e.label,
        i = e.onChange,
        l = e.value,
        u = n === void 0 ? !1 : n,
        c;
      t[0] !== u || t[1] !== i || t[2] !== l
        ? ((c = s.jsx(r("WDSBaseCheckbox.react"), {
            disabled: u,
            onChange: i,
            value: l,
          })),
          (t[0] = u),
          (t[1] = i),
          (t[2] = l),
          (t[3] = c))
        : (c = t[3]);
      var d;
      t[4] !== a
        ? ((d = s.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: a,
          })),
          (t[4] = a),
          (t[5] = d))
        : (d = t[5]);
      var m;
      return (
        t[6] !== c || t[7] !== d
          ? ((m = s.jsxs(o("WAWebFlex.react").FlexRow, {
              gap: 16,
              align: "center",
              children: [c, d],
            })),
            (t[6] = c),
            (t[7] = d),
            (t[8] = m))
          : (m = t[8]),
        m
      );
    }
    l.default = u;
  },
  98,
);
