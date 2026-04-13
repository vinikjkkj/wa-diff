__d(
  "WAWebNoNewsletterAlertsDrawer.react",
  [
    "fbt",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        container: { alignItems: "x6s0dn4", $$css: !0 },
        header: { textAlign: "x2b8uid", lineHeight: "x1evy7pa", $$css: !0 },
      };
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [
            c.container,
            o("WAWebUISpacing").uiPadding.vert36,
            o("WAWebUISpacing").uiPadding.horiz48,
            o("WAWebUISpacing").uiMargin.bottom0,
          ]),
          (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
              weight: "medium",
              xstyle: c.header,
              padding: 16,
              color: "primary",
              children: s._(/*BTDS*/ "No current alerts"),
            }),
          })),
          (e[1] = n))
        : (n = e[1]);
      var a;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "full-height",
              xstyle: t,
              children: [
                n,
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  xstyle: o("WAWebUISpacing").uiMargin.bottom16,
                  children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    color: "secondary",
                    marginTop: 8,
                    xstyle: c.header,
                    children: s._(
                      /*BTDS*/ "You may get channel alerts if your channel shares updates that do not follow our {=m1}.",
                      [
                        s._implicitParam(
                          "=m1",
                          u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                            href: o(
                              "WAWebFaqUrl",
                            ).getNewsletterGuidelinesFaqUrl(),
                            children: s._(/*BTDS*/ "Channels Guidelines"),
                          }),
                        ),
                      ],
                    ),
                  }),
                }),
              ],
            })),
            (e[2] = a))
          : (a = e[2]),
        a
      );
    }
    function m() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(r("WAWebDrawerSection.react"), {
              testid: void 0,
              children: u.jsx(d, {}),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    l.default = m;
  },
  226,
);
