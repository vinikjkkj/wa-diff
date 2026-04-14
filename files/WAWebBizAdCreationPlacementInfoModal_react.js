__d(
  "WAWebBizAdCreationPlacementInfoModal.react",
  [
    "fbt",
    "WAWebBizAdCreationInfoModalShell.react",
    "WAWebFlex.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { platformSection: { rowGap: "x129bwdz", $$css: !0 } };
    function d() {
      var e;
      return u.jsxs(r("WAWebBizAdCreationInfoModalShell.react"), {
        title: s._(/*BTDS*/ "Placements"),
        children: [
          u.jsx((e = r("WDSText.react")), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(
              /*BTDS*/ "Additional placements increase the number of people who can see your ad and can improve ad results. Adding more placements does not increase the cost of your ad.",
            ),
          }),
          u.jsx(e, {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(
              /*BTDS*/ "Ads may show in the following places for each platform:",
            ),
          }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.platformSection,
            children: [
              u.jsx(e, {
                type: "Body1",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Facebook"),
              }),
              u.jsx(e, {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: s._(
                  /*BTDS*/ "Facebook Stories, Feed, right column, in-stream videos, Instant Articles, search results and video feeds.",
                ),
              }),
            ],
          }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.platformSection,
            children: [
              u.jsx(e, {
                type: "Body1",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Instagram"),
              }),
              u.jsx(e, {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: s._(
                  /*BTDS*/ "Instagram Stories, Feed, Explore, Reels, in-stream videos.",
                ),
              }),
            ],
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
