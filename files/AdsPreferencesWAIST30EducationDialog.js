__d(
  "AdsPreferencesWAIST30EducationDialog",
  [
    "fbt",
    "CometAdPrefsWAIST30DialogLandingSheetHeader.react",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometRow.react",
    "CometRowItem.react",
    "FDSButton.react",
    "FDSIcon.react",
    "FDSUnitHeader.react",
    "XFacebookHelpCenterContentControllerRouteBuilder",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        icon: {
          marginBottom: "xyorhqc",
          marginInlineStart: "xw01apr",
          marginTop: "x9otpla",
          paddingTop: "x889kno",
          $$css: !0,
        },
        row: {
          height: "xddgzll",
          marginBottom: "xyorhqc",
          marginInlineEnd: "x3aesyq",
          marginInlineStart: "xpcyujq",
          marginTop: "x1anpbxc",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.educationSections,
        n = e.exampleText,
        a = e.headerText,
        i = e.headlineText;
      return u.jsxs("div", {
        children: [
          " ",
          u.jsx(
            o("CometAdPrefsWAIST30DialogLandingSheetHeader.react")
              .CometAdPrefsWAIST30DialogLandingSheetHeader,
            {},
          ),
          u.jsxs("div", {
            className: "x1ys307a xyqm7xq x1ok221b xbaz6xv",
            children: [
              u.jsx(r("FDSUnitHeader.react"), {
                body: a,
                headline: i,
                level: 3,
              }),
              u.jsx(r("FDSUnitHeader.react"), {
                body: null,
                headline: n,
                level: 4,
              }),
              t.map(function (e, n) {
                var o = e.color,
                  a = e.icon,
                  i = e.key,
                  l = e.text;
                return u.jsx(
                  r("CometColumn.react"),
                  {
                    children: u.jsx(r("CometColumnItem.react"), {
                      children: u.jsxs(r("CometRow.react"), {
                        align: "start",
                        xstyle: c.row,
                        children: [
                          u.jsxs(r("CometRowItem.react"), {
                            xstyle: c.icon,
                            children: [
                              u.jsx(r("FDSIcon.react"), { color: o, icon: a }),
                              n !== t.length - 1
                                ? u.jsx("div", {
                                    className:
                                      "x1vyxuoe x1t7ytsu xpilrb4 xdt5ytf x1qx5ct2 x1hm9lzh x1tfhste x10l6tqk",
                                  })
                                : null,
                            ],
                          }),
                          u.jsx(r("CometRowItem.react"), { children: l }),
                        ],
                      }),
                    }),
                  },
                  i,
                );
              }),
            ],
          }),
          u.jsx("div", {
            className: "x1ys307a xyqm7xq x1ok221b xbaz6xv",
            children: u.jsx(r("FDSButton.react"), {
              "aria-label": s._(/*BTDS*/ ""),
              label: s._(/*BTDS*/ ""),
              linkProps: {
                target: "_blank",
                url: r("XFacebookHelpCenterContentControllerRouteBuilder")
                  .buildUri({ cms_id: "447278887528796" })
                  .toString(),
              },
              size: "large",
              variant: "secondary",
            }),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
