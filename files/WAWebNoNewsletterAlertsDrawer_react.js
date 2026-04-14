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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        container: { alignItems: "x6s0dn4", $$css: !0 },
        header: { textAlign: "x2b8uid", lineHeight: "x1evy7pa", $$css: !0 },
      };
    function d() {
      var e;
      return u.jsxs(r("WAWebDrawerSection.react"), {
        animation: !1,
        theme: "full-height",
        xstyle: [
          c.container,
          (e = o("WAWebUISpacing")).uiPadding.vert36,
          e.uiPadding.horiz48,
          e.uiMargin.bottom0,
        ],
        children: [
          u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
              weight: "medium",
              xstyle: c.header,
              padding: 16,
              color: "primary",
              children: s._(/*BTDS*/ "No current alerts"),
            }),
          }),
          u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: e.uiMargin.bottom16,
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
                      href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                      children: s._(/*BTDS*/ "Channels Guidelines"),
                    }),
                  ),
                ],
              ),
            }),
          }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return u.jsx(r("WAWebDrawerSection.react"), {
        testid: void 0,
        children: u.jsx(d, {}),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
