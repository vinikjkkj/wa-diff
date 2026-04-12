__d(
  "WAWebAdsManagementLWILink.react",
  [
    "fbt",
    "WAWebCopyPasteSelectable.react",
    "WAWebExecApiCmd",
    "WAWebFlex.react",
    "WAWebLaunchIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        link: {
          display: "x78zum5",
          cursor: "x1ypdohk",
          width: "xh8yej3",
          justifyContent: "x1qughib",
          $$css: !0,
        },
        topDivider: {
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        marginTop16: { marginTop: "x98l61r", $$css: !0 },
        paddingHoriz24: {
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingTop16: { paddingTop: "x1p57kb1", $$css: !0 },
      };
    function d() {
      var e = function () {
        r("WAWebExecApiCmd")({
          cmdData: { resultType: "MANAGE_ADS", trigger: "adsManagement" },
          isExternal: !1,
        });
      };
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: [c.paddingHoriz24, c.paddingTop16, c.topDivider, c.marginTop16],
        children: u.jsxs(o("WAWebCopyPasteSelectable.react").SelectableLink, {
          onClick: e,
          selectable: !0,
          xstyle: c.link,
          children: [
            s._(/*BTDS*/ "Manage your ads in Facebook"),
            u.jsx(o("WAWebLaunchIcon.react").LaunchIcon, {
              iconXstyle: c.secondaryColor,
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
