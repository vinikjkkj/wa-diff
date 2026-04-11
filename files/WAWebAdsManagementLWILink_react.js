__d(
  "WAWebAdsManagementLWILink.react",
  [
    "fbt",
    "WAWebCopyPasteSelectable.react",
    "WAWebExecApiCmd",
    "WAWebFlex.react",
    "WAWebLaunchIcon.react",
    "react",
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(2),
        t = m,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [
            c.paddingHoriz24,
            c.paddingTop16,
            c.topDivider,
            c.marginTop16,
          ]),
          (e[0] = n))
        : (n = e[0]);
      var r;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: n,
              children: u.jsxs(
                o("WAWebCopyPasteSelectable.react").SelectableLink,
                {
                  onClick: t,
                  selectable: !0,
                  xstyle: c.link,
                  children: [
                    s._(/*BTDS*/ "Manage your ads in Facebook"),
                    u.jsx(o("WAWebLaunchIcon.react").LaunchIcon, {
                      iconXstyle: c.secondaryColor,
                    }),
                  ],
                },
              ),
            })),
            (e[1] = r))
          : (r = e[1]),
        r
      );
    }
    function m() {
      r("WAWebExecApiCmd")({
        cmdData: { resultType: "MANAGE_ADS", trigger: "adsManagement" },
        isExternal: !1,
      });
    }
    l.default = d;
  },
  226,
);
