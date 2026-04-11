__d(
  "WAWebNewsletterDirectoryShimmer.react",
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
        cellHeight: { minHeight: "xuwdbiy", $$css: !0 },
        container: {
          backgroundColor: "x1280gxy",
          height: "x5yr21d",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function c() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, {
            diameter: 49,
            xstyle: o("WAWebUISpacing").uiMargin.end15,
          })),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: u.cellHeight,
              children: [
                t,
                s.jsxs(o("WAWebFlex.react").FlexColumn, {
                  children: [
                    s.jsx(
                      o("WAWebBaseShimmerComponents.react").RectangleShimmer,
                      {
                        height: 12,
                        width: 139,
                        xstyle: o("WAWebUISpacing").uiMargin.bottom12,
                      },
                    ),
                    s.jsx(
                      o("WAWebBaseShimmerComponents.react").RectangleShimmer,
                      { height: 10, width: 75 },
                    ),
                  ],
                }),
              ],
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.count,
        a = e.description,
        i = a === void 0 ? "WAWebNewsletterDirectoryShimmer" : a,
        l;
      t[0] !== i
        ? ((l = s.jsx(r("CometHeroHoldTrigger.react"), {
            description: i,
            hold: !0,
          })),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var c;
      t[2] !== n
        ? ((c = s.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.container,
            children: Array.from({ length: n }, m),
          })),
          (t[2] = n),
          (t[3] = c))
        : (c = t[3]);
      var d;
      return (
        t[4] !== l || t[5] !== c
          ? ((d = s.jsxs(s.Fragment, { children: [l, c] })),
            (t[4] = l),
            (t[5] = c),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    function m(e, t) {
      return s.jsx(
        o("WAWebFlex.react").FlexColumn,
        {
          align: "start",
          xstyle: [
            o("WAWebUISpacing").uiMargin.horiz13,
            o("WAWebUISpacing").uiMargin.vert12,
          ],
          children: s.jsx(c, {}),
        },
        t,
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
