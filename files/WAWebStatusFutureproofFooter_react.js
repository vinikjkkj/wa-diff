__d(
  "WAWebStatusFutureproofFooter.react",
  [
    "fbt",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWarningOutlineIcon.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s._(
            /*BTDS*/ "A new feature was used in this status. To experience it, view the status on your primary phone.",
          )),
          (t[0] = n))
        : (n = t[0]);
      var a = n,
        i,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (e || (e = r("stylex"))).props(
            d.container,
            o("WAWebUISpacing").uiMargin.startAuto,
            o("WAWebUISpacing").uiMargin.endAuto,
          )),
          (l = {
            className:
              "xyi3aci xwf5gio x1p453bz x1suzm8a x10l6tqk xh8yej3 x1ey2m1c x1vjfegm x17t9dm2 x2b8uid x1c8ul09",
          }),
          (t[1] = i),
          (t[2] = l))
        : ((i = t[1]), (l = t[2]));
      var u;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = [
            o("WAWebUISpacing").uiPadding.horiz40,
            o("WAWebUISpacing").uiPadding.vert12,
          ]),
          (t[3] = u))
        : (u = t[3]);
      var m;
      return (
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = c.jsx(
              "div",
              babelHelpers.extends({}, i, {
                children: c.jsx(
                  "div",
                  babelHelpers.extends({}, l, {
                    children: c.jsxs(
                      o("WAWebText.react").WAWebTextSectionTitle,
                      {
                        color: "white",
                        xstyle: u,
                        children: [
                          c.jsx(
                            o("WAWebWarningOutlineIcon.react")
                              .WarningOutlineIcon,
                            {
                              width: 14,
                              height: 14,
                              displayInline: !0,
                              iconXstyle: [
                                d.warningIcon,
                                o("WAWebUISpacing").uiPadding.top1,
                                o("WAWebUISpacing").uiPadding.end7,
                              ],
                            },
                          ),
                          " ",
                          a,
                        ],
                      },
                    ),
                  }),
                ),
              }),
            )),
            (t[4] = m))
          : (m = t[4]),
        m
      );
    }
    l.default = m;
  },
  226,
);
