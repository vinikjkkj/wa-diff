__d(
  "WAWebStatusFutureproofFooter.react",
  [
    "fbt",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWarningOutlineIcon.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        container: {
          width: "xlybum",
          position: "x10l6tqk",
          bottom: "x11unvnq",
          insetInlineStart: "x1o0tod",
          insetInlineEnd: "xtijo5x",
          $$css: !0,
        },
        warningIcon: { color: "x1elzesk", display: "x3nfvp2", $$css: !0 },
      };
    function m() {
      var t = s._(
        /*BTDS*/ "A new feature was used in this status. To experience it, view the status on your primary phone.",
      );
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            d.container,
            o("WAWebUISpacing").uiMargin.startAuto,
            o("WAWebUISpacing").uiMargin.endAuto,
          ),
          {
            children: c.jsx("div", {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a x10l6tqk xh8yej3 x1ey2m1c x1vjfegm x17t9dm2 x2b8uid x1c8ul09",
              children: c.jsxs(o("WAWebText.react").WAWebTextSectionTitle, {
                color: "white",
                xstyle: [
                  o("WAWebUISpacing").uiPadding.horiz40,
                  o("WAWebUISpacing").uiPadding.vert12,
                ],
                children: [
                  c.jsx(o("WAWebWarningOutlineIcon.react").WarningOutlineIcon, {
                    width: 14,
                    height: 14,
                    displayInline: !0,
                    iconXstyle: [
                      d.warningIcon,
                      o("WAWebUISpacing").uiPadding.top1,
                      o("WAWebUISpacing").uiPadding.end7,
                    ],
                  }),
                  " ",
                  t,
                ],
              }),
            }),
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
