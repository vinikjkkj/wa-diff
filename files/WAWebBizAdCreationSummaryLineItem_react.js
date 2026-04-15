__d(
  "WAWebBizAdCreationSummaryLineItem.react",
  [
    "WAWebFlex.react",
    "WDSText.react",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "useWAWebHover",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useRef;
    function c(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.colorName,
        a = e.isBolded,
        i = e.label,
        l = e.labelAccessory,
        c = e.showAccessoryOnHover,
        d = e.testid,
        m = e.value,
        p = e.valueAccessory,
        _ = n === void 0 ? "contentDefault" : n,
        f = a === void 0 ? !1 : a,
        g = c === void 0 ? !0 : c,
        h;
      t[0] !== l || t[1] !== g
        ? ((h = l != null && g && r("justknobx")._("4259")),
          (t[0] = l),
          (t[1] = g),
          (t[2] = h))
        : (h = t[2]);
      var y = h,
        C = u(null),
        b = o("useWAWebHover").useWAWebHover(C),
        v = f ? "Body2Emphasized" : "Body2",
        S;
      t[3] !== _ || t[4] !== i || t[5] !== v
        ? ((S = s.jsx(r("WDSText.react"), {
            type: v,
            colorName: _,
            children: i,
          })),
          (t[3] = _),
          (t[4] = i),
          (t[5] = v),
          (t[6] = S))
        : (S = t[6]);
      var R;
      t[7] !== b || t[8] !== y || t[9] !== l
        ? ((R =
            l != null &&
            s.jsx("span", {
              className: {
                0: "x3nfvp2 x19991ni xx6bhzk",
                1: "x3nfvp2 x19991ni xx6bhzk xg01cxk",
              }[!!(y && !b) << 0],
              children: l,
            })),
          (t[7] = b),
          (t[8] = y),
          (t[9] = l),
          (t[10] = R))
        : (R = t[10]);
      var L;
      t[11] !== S || t[12] !== R
        ? ((L = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            gap: 4,
            children: [S, R],
          })),
          (t[11] = S),
          (t[12] = R),
          (t[13] = L))
        : (L = t[13]);
      var E;
      t[14] !== _ || t[15] !== f || t[16] !== m || t[17] !== p
        ? ((E =
            m != null &&
            s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 4,
              children: [
                s.jsx(r("WDSText.react"), {
                  type: f ? "Body2Emphasized" : "Body2",
                  colorName: _,
                  children: m,
                }),
                p,
              ],
            })),
          (t[14] = _),
          (t[15] = f),
          (t[16] = m),
          (t[17] = p),
          (t[18] = E))
        : (E = t[18]);
      var k;
      return (
        t[19] !== L || t[20] !== E || t[21] !== d
          ? ((k = s.jsx("div", {
              ref: C,
              children: s.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "all",
                testid: void 0,
                children: [L, E],
              }),
            })),
            (t[19] = L),
            (t[20] = E),
            (t[21] = d),
            (t[22] = k))
          : (k = t[22]),
        k
      );
    }
    l.default = c;
  },
  98,
);
