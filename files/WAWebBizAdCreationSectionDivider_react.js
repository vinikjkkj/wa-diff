__d(
  "WAWebBizAdCreationSectionDivider.react",
  ["WAWebFlex.react", "WDSText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.testid,
        a = e.tip,
        i = e.title,
        l = e.xstyle,
        u = n != null ? n : void 0,
        c;
      t[0] !== a
        ? ((c =
            a != null &&
            s.jsxs(s.Fragment, {
              children: [
                " \xB7 ",
                s.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: a,
                }),
              ],
            })),
          (t[0] = a),
          (t[1] = c))
        : (c = t[1]);
      var d;
      t[2] !== u || t[3] !== c || t[4] !== i
        ? ((d = s.jsxs(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDefault",
            testid: void 0,
            children: [i, c],
          })),
          (t[2] = u),
          (t[3] = c),
          (t[4] = i),
          (t[5] = d))
        : (d = t[5]);
      var m;
      return (
        t[6] !== d || t[7] !== l
          ? ((m = s.jsx(o("WAWebFlex.react").FlexRow, {
              align: "start",
              xstyle: l,
              children: d,
            })),
            (t[6] = d),
            (t[7] = l),
            (t[8] = m))
          : (m = t[8]),
        m
      );
    }
    l.default = u;
  },
  98,
);
