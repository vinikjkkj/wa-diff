__d(
  "WAWebSocialMediaTrustSignals.react",
  [
    "$InternalEnum",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebWdsIcLogoFacebookIcon.react",
    "WAWebWdsIcLogoInstagramIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = { iconColor: { color: "xhslqc4", $$css: !0 } },
      d = n("$InternalEnum")({ FACEBOOK: "facebook", INSTAGRAM: "instagram" });
    function m(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.socialMediaSignals,
        r;
      t[0] !== n
        ? ((r = n.get(d.FACEBOOK)), (t[0] = n), (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      t[2] !== n
        ? ((i = n.get(d.INSTAGRAM)), (t[2] = n), (t[3] = i))
        : (i = t[3]);
      var l = i,
        u = a != null && l != null,
        c;
      t[4] !== a
        ? ((c = p(
            o("WAWebWdsIcLogoFacebookIcon.react").WdsIcLogoFacebookIcon,
            a,
          )),
          (t[4] = a),
          (t[5] = c))
        : (c = t[5]);
      var m;
      t[6] !== u
        ? ((m = u && s.jsx(s.Fragment, { children: " \u2022 " })),
          (t[6] = u),
          (t[7] = m))
        : (m = t[7]);
      var _;
      t[8] !== l
        ? ((_ = p(
            o("WAWebWdsIcLogoInstagramIcon.react").WdsIcLogoInstagramIcon,
            l,
          )),
          (t[8] = l),
          (t[9] = _))
        : (_ = t[9]);
      var f;
      return (
        t[10] !== c || t[11] !== m || t[12] !== _
          ? ((f = s.jsxs(o("WAWebFlex.react").FlexRow, {
              gap: 4,
              children: [c, m, _],
            })),
            (t[10] = c),
            (t[11] = m),
            (t[12] = _),
            (t[13] = f))
          : (f = t[13]),
        f
      );
    }
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
