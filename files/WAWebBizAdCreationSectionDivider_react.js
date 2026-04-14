__d(
  "WAWebBizAdCreationSectionDivider.react",
  ["WAWebFlex.react", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.testid,
        n = e.tip,
        a = e.title,
        i = e.xstyle;
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        align: "start",
        xstyle: i,
        children: s.jsxs(r("WDSText.react"), {
          type: "Body1Emphasized",
          colorName: "contentDefault",
          testid: void 0,
          children: [
            a,
            n != null &&
              s.jsxs(s.Fragment, {
                children: [
                  " \xB7 ",
                  s.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: n,
                  }),
                ],
              }),
          ],
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
