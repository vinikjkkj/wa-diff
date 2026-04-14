__d(
  "WAWebBizAdCard.react",
  [
    "WAWebBizAdCreationSectionDivider.react",
    "WAWebBizAdsErrorBoundary.react",
    "WAWebBizGenericErrorCard.react",
    "WAWebBizShimmerRows.react",
    "WAWebFlex.react",
    "WDSText.react",
    "justknobx",
    "react",
    "useWAWebHover",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.Suspense,
      d = u.useRef,
      m = {
        content: { rowGap: "x8a3fw1", width: "xh8yej3", $$css: !0 },
        header: {
          alignItems: "x6s0dn4",
          justifyContent: "x1qughib",
          width: "xh8yej3",
          $$css: !0,
        },
        headerContent: { rowGap: "x1b73lln", $$css: !0 },
        titleRow: { columnGap: "x1trrmfo", $$css: !0 },
      };
    function p(e) {
      var t = e.children,
        n = e.ctaButton,
        a = e.fallback,
        i = e.header,
        l = e.headerTestid,
        u = e.showAccessoryOnHover,
        p = u === void 0 ? !0 : u,
        _ = e.subtitle,
        f = e.subtitleTestid,
        g = e.tip,
        h = e.titleAccessory,
        y = h != null && p && r("justknobx")._("4259"),
        C = d(null),
        b = o("useWAWebHover").useWAWebHover(C);
      return s.jsx("div", {
        ref: C,
        className:
          "xqjyukv x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
        children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: m.content,
          align: "stretch",
          children: [
            s.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: m.header,
              children: [
                s.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: m.headerContent,
                  children: [
                    s.jsxs(o("WAWebFlex.react").FlexRow, {
                      xstyle: m.titleRow,
                      align: "center",
                      children: [
                        s.jsx(r("WAWebBizAdCreationSectionDivider.react"), {
                          title: i,
                          tip: g,
                          testid: void 0,
                        }),
                        h != null &&
                          s.jsx("span", {
                            className: {
                              0: "x3nfvp2 x19991ni xx6bhzk",
                              1: "x3nfvp2 x19991ni xx6bhzk xg01cxk",
                            }[!!(y && !b) << 0],
                            children: h,
                          }),
                      ],
                    }),
                    _ != null &&
                      s.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        testid: void 0,
                        children: _,
                      }),
                  ],
                }),
                n,
              ],
            }),
            s.jsx(r("WAWebBizAdsErrorBoundary.react"), {
              name: i.toString(),
              fallback: s.jsx(r("WAWebBizGenericErrorCard.react"), {}),
              children: s.jsx(c, {
                fallback:
                  a != null
                    ? a
                    : s.jsx(r("WAWebBizShimmerRows.react"), {
                        count: 3,
                        height: 16,
                      }),
                children: t,
              }),
            }),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
