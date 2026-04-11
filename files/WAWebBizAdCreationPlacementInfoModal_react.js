__d(
  "WAWebBizAdCreationPlacementInfoModal.react",
  [
    "fbt",
    "WAWebBizAdCreationInfoModalShell.react",
    "WAWebFlex.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { platformSection: { rowGap: "x129bwdz", $$css: !0 } };
    function d() {
      var e = o("react-compiler-runtime").c(7),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s._(/*BTDS*/ "Placements")), (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(
              /*BTDS*/ "Additional placements increase the number of people who can see your ad and can improve ad results. Adding more placements does not increase the cost of your ad.",
            ),
          })),
          (e[1] = n))
        : (n = e[1]);
      var a;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(
              /*BTDS*/ "Ads may show in the following places for each platform:",
            ),
          })),
          (e[2] = a))
        : (a = e[2]);
      var i;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Facebook"),
          })),
          (e[3] = i))
        : (i = e[3]);
      var l;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.platformSection,
            children: [
              i,
              u.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: s._(
                  /*BTDS*/ "Facebook Stories, Feed, right column, in-stream videos, Instant Articles, search results and video feeds.",
                ),
              }),
            ],
          })),
          (e[4] = l))
        : (l = e[4]);
      var d;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Instagram"),
          })),
          (e[5] = d))
        : (d = e[5]);
      var m;
      return (
        e[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = u.jsxs(r("WAWebBizAdCreationInfoModalShell.react"), {
              title: t,
              children: [
                n,
                a,
                l,
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: c.platformSection,
                  children: [
                    d,
                    u.jsx(r("WDSText.react"), {
                      type: "Body3",
                      colorName: "contentDeemphasized",
                      children: s._(
                        /*BTDS*/ "Instagram Stories, Feed, Explore, Reels, in-stream videos.",
                      ),
                    }),
                  ],
                }),
              ],
            })),
            (e[6] = m))
          : (m = e[6]),
        m
      );
    }
    l.default = d;
  },
  226,
);
