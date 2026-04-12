__d(
  "WAWebBizAdCreationSliderWithValue.react",
  ["WAWebFlex.react", "WDSSlider.react", "WDSText.react", "react"],
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
      var t = e.displayValueText,
        n = t === void 0 ? d : t,
        a = e.max,
        i = e.min,
        l = e.onChange,
        m = e.showMinMaxLabels,
        p = e.step,
        _ = p === void 0 ? 1 : p,
        f = e.values,
        g = u(f[0]),
        h = g[0],
        y = g[1],
        C = u(f),
        b = C[0],
        v = C[1];
      return (
        f[0] !== b[0] && (v(f), y(f[0])),
        s.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "stretch",
          children: [
            s.jsx(o("WAWebFlex.react").FlexRow, {
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
                    children: n(h),
                  }),
                }),
              }),
            }),
            s.jsx(o("WAWebFlex.react").FlexItem, {
              align: "stretch",
              paddingTop: m ? 8 : 12,
              paddingBottom: m ? 8 : 12,
              children: s.jsx(r("WDSSlider.react"), {
                values: [h],
                min: i,
                max: a,
                step: _,
                onChange: function (t) {
                  return y(t[0]);
                },
                onChangeSettled: l,
                startEndLabels: m ? "minMax" : "none",
                displayValueText: n,
              }),
            }),
          ],
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
