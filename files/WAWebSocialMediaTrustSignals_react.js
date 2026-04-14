__d(
  "WAWebSocialMediaTrustSignals.react",
  [
    "$InternalEnum",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebWdsIcLogoFacebookIcon.react",
    "WAWebWdsIcLogoInstagramIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = { iconColor: { color: "xhslqc4", $$css: !0 } },
      d = n("$InternalEnum")({ FACEBOOK: "facebook", INSTAGRAM: "instagram" });
    function m(e) {
      var t = e.socialMediaSignals,
        n = u(
          function () {
            return t.get(d.FACEBOOK);
          },
          [t],
        ),
        r = u(
          function () {
            return t.get(d.INSTAGRAM);
          },
          [t],
        ),
        a = n != null && r != null;
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        gap: 4,
        children: [
          p(o("WAWebWdsIcLogoFacebookIcon.react").WdsIcLogoFacebookIcon, n),
          a && s.jsx(s.Fragment, { children: " \u2022 " }),
          p(o("WAWebWdsIcLogoInstagramIcon.react").WdsIcLogoInstagramIcon, r),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t) {
      return t == null
        ? null
        : s.jsxs(o("WAWebFlex.react").FlexRow, {
            gap: 2,
            align: "center",
            children: [
              s.jsx(e, {
                iconXstyle: c.iconColor,
                viewBox: { width: 32, height: 32, x: -4, y: -4 },
              }),
              s.jsx(o("WAWebText.react").WAWebTextSmall, { children: t }),
            ],
          });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.SocialMediaTrustSignalSource = d),
      (l.WAWebSocialMediaTrustSignals = m));
  },
  98,
);
