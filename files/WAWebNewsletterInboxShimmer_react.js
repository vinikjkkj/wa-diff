__d(
  "WAWebNewsletterInboxShimmer.react",
  [
    "CometHeroHoldTrigger.react",
    "WAWebBaseShimmerComponents.react",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        outerContainer: {
          width: "x1r38tzb",
          boxSizing: "x9f619",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.count,
        a = e.description,
        i = a === void 0 ? "WAWebNewsletterInboxShimmer" : a,
        l;
      t[0] !== i
        ? ((l = s.jsx(r("CometHeroHoldTrigger.react"), {
            description: i,
            hold: !0,
          })),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var u;
      t[2] !== n
        ? ((u = s.jsx(o("WAWebFlex.react").FlexColumn, {
            children: Array.from({ length: n }, d),
          })),
          (t[2] = n),
          (t[3] = u))
        : (u = t[3]);
      var c;
      return (
        t[4] !== l || t[5] !== u
          ? ((c = s.jsxs(s.Fragment, { children: [l, u] })),
            (t[4] = l),
            (t[5] = u),
            (t[6] = c))
          : (c = t[6]),
        c
      );
    }
    function d(e, t) {
      var n, r;
      return s.jsxs(
        o("WAWebFlex.react").FlexColumn,
        {
          align: "start",
          xstyle: [
            (n = o("WAWebUISpacing")).uiMargin.horiz13,
            n.uiPadding.vert12,
            u.outerContainer,
          ],
          children: [
            s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "start",
              xstyle: n.uiMargin.bottom5,
              children: [
                s.jsx(
                  (r = o("WAWebBaseShimmerComponents.react")).CircleShimmer,
                  { diameter: 36, xstyle: n.uiMargin.end12 },
                ),
                s.jsx(r.RectangleShimmer, { width: 108, height: 12 }),
              ],
            }),
            s.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "start",
              children: [
                s.jsx(r.RectangleShimmer, {
                  width: 308,
                  height: 10,
                  xstyle: n.uiMargin.top5,
                }),
                s.jsx(r.RectangleShimmer, {
                  width: 238,
                  height: 10,
                  xstyle: [n.uiMargin.top10, n.uiMargin.bottom28],
                }),
              ],
            }),
          ],
        },
        t,
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
