__d(
  "WAWebBizAdCreationSummaryLineItem.react",
  ["WAWebFlex.react", "WDSText.react", "justknobx", "react", "useWAWebHover"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useRef;
    function c(e) {
      var t = e.colorName,
        n = t === void 0 ? "contentDefault" : t,
        a = e.isBolded,
        i = a === void 0 ? !1 : a,
        l = e.label,
        c = e.labelAccessory,
        d = e.showAccessoryOnHover,
        m = d === void 0 ? !0 : d,
        p = e.testid,
        _ = e.value,
        f = e.valueAccessory,
        g = c != null && m && r("justknobx")._("4259"),
        h = u(null),
        y = o("useWAWebHover").useWAWebHover(h);
      return s.jsx("div", {
        ref: h,
        children: s.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "all",
          testid: void 0,
          children: [
            s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 4,
              children: [
                s.jsx(r("WDSText.react"), {
                  type: i ? "Body2Emphasized" : "Body2",
                  colorName: n,
                  children: l,
                }),
                c != null &&
                  s.jsx("span", {
                    className: {
                      0: "x3nfvp2 x19991ni xx6bhzk",
                      1: "x3nfvp2 x19991ni xx6bhzk xg01cxk",
                    }[!!(g && !y) << 0],
                    children: c,
                  }),
              ],
            }),
            _ != null &&
              s.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                gap: 4,
                children: [
                  s.jsx(r("WDSText.react"), {
                    type: i ? "Body2Emphasized" : "Body2",
                    colorName: n,
                    children: _,
                  }),
                  f,
                ],
              }),
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
