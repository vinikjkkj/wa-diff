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
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        gap: 12,
        children: [
          u.jsx(r("WAWebBizShimmerRows.react"), { count: 3, height: 20 }),
          u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
          u.jsx(r("WAWebBizShimmerRows.react"), { count: 1, height: 20 }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        xstyle: c.sectionContainer,
        children: [
          u.jsx(r("WAWebBizAdCreationSectionDivider.react"), {
            title: s._(/*BTDS*/ "Summary"),
            xstyle: c.header,
          }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.listItems,
            align: "stretch",
            children: [
              u.jsx(r("CometPlaceholder.react"), {
                fallback: u.jsx(r("WAWebBizShimmerRows.react"), {
                  count: 1,
                  height: 20,
                }),
                name: i.id,
                children: u.jsx(
                  r("WAWebBizAdCreationSummaryReachEstimationRow.react"),
                  {},
                ),
              }),
              u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
              u.jsx(r("CometPlaceholder.react"), {
                fallback: u.jsx(d, {}),
                name: i.id,
                children: u.jsx(
                  r("WAWebBizAdCreationSummaryContent.react"),
                  {},
                ),
              }),
            ],
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
