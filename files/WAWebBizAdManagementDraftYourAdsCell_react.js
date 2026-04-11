__d(
  "WAWebBizAdManagementDraftYourAdsCell.react",
  [
    "fbt",
    "WAWebBaseShimmerComponents.react",
    "WAWebBizAdManagementThumbnail.react",
    "WAWebFlex.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        rowContainer: { width: "xh8yej3", $$css: !0 },
        textContainer: { minWidth: "xeuugli", $$css: !0 },
        thumbnailOpacity: { opacity: "x197sbye", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.description,
        a = e.isLoadingThumbnail,
        i = e.thumbnailUrl,
        l;
      t[0] !== n
        ? ((l = n != null ? n : s._(/*BTDS*/ "Your ad")),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var d = l,
        m;
      t[2] !== a || t[3] !== i
        ? ((m = a
            ? u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 48,
                width: 48,
              })
            : u.jsx(r("WAWebBizAdManagementThumbnail.react"), {
                thumbnailUrl: i,
                boostingStatus: null,
                thumbnailXStyle: c.thumbnailOpacity,
              })),
          (t[2] = a),
          (t[3] = i),
          (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = "x193iq5w"), (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] !== d
        ? ((_ = u.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.textContainer,
            children: u.jsx("div", {
              className: p,
              children: u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                maxLines: 1,
                children: d,
              }),
            }),
          })),
          (t[6] = d),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      return (
        t[8] !== m || t[9] !== _
          ? ((f = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 12,
              xstyle: c.rowContainer,
              children: [m, _],
            })),
            (t[8] = m),
            (t[9] = _),
            (t[10] = f))
          : (f = t[10]),
        f
      );
    }
    l.default = d;
  },
  226,
);
