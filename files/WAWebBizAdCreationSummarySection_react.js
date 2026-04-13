__d(
  "WAWebBizAdCreationSummarySection.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "WAWebBizAdCreationSectionDivider.react",
    "WAWebBizAdCreationSummaryContent.react",
    "WAWebBizAdCreationSummaryReachEstimationRow.react",
    "WAWebBizShimmerRows.react",
    "WAWebDivider.react",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        header: { paddingTop: "x1xrf6ya", paddingBottom: "xscbp6u", $$css: !0 },
        sectionContainer: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        listItems: {
          rowGap: "x8a3fw1",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          $$css: !0,
        },
      };
    function d() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              gap: 12,
              children: [
                u.jsx(r("WAWebBizShimmerRows.react"), { count: 3, height: 20 }),
                u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
                u.jsx(r("WAWebBizShimmerRows.react"), { count: 1, height: 20 }),
              ],
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function m() {
      var e = o("react-compiler-runtime").c(6),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = u.jsx(r("WAWebBizAdCreationSectionDivider.react"), {
            title: s._(/*BTDS*/ "Summary"),
            xstyle: c.header,
          })),
          (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = u.jsx(r("WAWebBizShimmerRows.react"), {
            count: 1,
            height: 20,
          })),
          (e[1] = n))
        : (n = e[1]);
      var a, l;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(r("CometPlaceholder.react"), {
            fallback: n,
            name: i.id,
            children: u.jsx(
              r("WAWebBizAdCreationSummaryReachEstimationRow.react"),
              {},
            ),
          })),
          (l = u.jsx(r("WAWebDivider.react"), { direction: "horizontal" })),
          (e[2] = a),
          (e[3] = l))
        : ((a = e[2]), (l = e[3]));
      var m;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = u.jsx(d, {})), (e[4] = m))
        : (m = e[4]);
      var p;
      return (
        e[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: c.sectionContainer,
              children: [
                t,
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: c.listItems,
                  align: "stretch",
                  children: [
                    a,
                    l,
                    u.jsx(r("CometPlaceholder.react"), {
                      fallback: m,
                      name: i.id,
                      children: u.jsx(
                        r("WAWebBizAdCreationSummaryContent.react"),
                        {},
                      ),
                    }),
                  ],
                }),
              ],
            })),
            (e[5] = p))
          : (p = e[5]),
        p
      );
    }
    l.default = m;
  },
  226,
);
