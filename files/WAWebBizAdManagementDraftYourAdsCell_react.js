__d(
  "WAWebBizAdManagementDraftYourAdsCell.react",
  [
    "fbt",
    "WAWebBaseShimmerComponents.react",
    "WAWebBizAdManagementThumbnail.react",
    "WAWebFlex.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        rowContainer: { width: "xh8yej3", $$css: !0 },
        textContainer: { minWidth: "xeuugli", $$css: !0 },
      };
    function d(e) {
      var t = e.description,
        n = e.isLoadingThumbnail,
        a = e.thumbnailUrl,
        i = t != null ? t : s._(/*BTDS*/ "Your ad");
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        gap: 12,
        xstyle: c.rowContainer,
        children: [
          n
            ? u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 48,
                width: 48,
              })
            : u.jsx(r("WAWebBizAdManagementThumbnail.react"), {
                thumbnailUrl: a,
                boostingStatus: null,
              }),
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.textContainer,
            children: u.jsx("div", {
              className: "x193iq5w",
              children: u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                maxLines: 1,
                children: i,
              }),
            }),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
