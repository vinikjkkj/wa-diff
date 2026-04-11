__d(
  "WAWebNewsletterModalsUtils.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebPencilIcon.react",
    "WAWebSecurityShieldIcon.react",
    "WAWebText.react",
    "WDSIconIcVisibilityOff.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        bulletIcon: { width: "x1useyqa", $$css: !0 },
        bulletColor: { color: "x1v5yvga", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.Icon,
        r = e.iconSize,
        a = e.iconXstyle,
        i = e.subtext,
        l = e.testid,
        s = e.text,
        d = r === void 0 ? 24 : r,
        m = l === void 0 ? "bullet-point-item" : l,
        p;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = "x9f619 xh8yej3 x1qjc9v5"), (t[0] = p))
        : (p = t[0]);
      var _;
      t[1] !== n || t[2] !== d || t[3] !== a
        ? ((_ = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "start",
            shrink: 0,
            xstyle: c.bulletIcon,
            children: u.jsx(n, { height: d, width: d, iconXstyle: a }),
          })),
          (t[1] = n),
          (t[2] = d),
          (t[3] = a),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] !== s
        ? ((f =
            s != null &&
            u.jsx(o("WAWebText.react").WAWebTextTitle, { children: s })),
          (t[5] = s),
          (t[6] = f))
        : (f = t[6]);
      var g;
      t[7] !== i
        ? ((g = u.jsx(o("WAWebText.react").WAWebTextSmall, { children: i })),
          (t[7] = i),
          (t[8] = g))
        : (g = t[8]);
      var h;
      t[9] !== f || t[10] !== g
        ? ((h = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [f, g] })),
          (t[9] = f),
          (t[10] = g),
          (t[11] = h))
        : (h = t[11]);
      var y;
      return (
        t[12] !== _ || t[13] !== h || t[14] !== m
          ? ((y = u.jsxs(o("WAWebFlex.react").FlexRow, {
              className: p,
              marginBottom: 8,
              paddingBottom: 4,
              paddingStart: 8,
              paddingTop: 4,
              testid: void 0,
              children: [_, h],
            })),
            (t[12] = _),
            (t[13] = h),
            (t[14] = m),
            (t[15] = y))
          : (y = t[15]),
        y
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.bullets,
        r;
      return (
        t[0] !== n ? ((r = n.map(p)), (t[0] = n), (t[1] = r)) : (r = t[1]),
        r
      );
    }
    function p(e, t) {
      return u.jsx(
        d,
        {
          Icon: e.Icon,
          text: e.text(),
          subtext: e.subtext(),
          testid: void 0,
          iconSize: e.iconSize,
          iconXstyle: e.iconXstyle,
        },
        t,
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = [
        {
          Icon: o("WAWebPencilIcon.react").PencilIcon,
          iconXstyle: c.bulletColor,
          text: function () {
            return s._(/*BTDS*/ "Admins can write updates");
          },
          subtext: function () {
            return s._(
              /*BTDS*/ "Admins can also change the channel's profile and settings. {=m2}.",
              [
                s._implicitParam(
                  "=m2",
                  u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getNewsletterAdminInviteFaqUrlV2(),
                    children: s._(/*BTDS*/ "Learn more"),
                  }),
                ),
              ],
            );
          },
        },
      ],
      f = {
        Icon: r("WDSIconIcVisibilityOff.react"),
        iconXstyle: c.bulletColor,
        text: function () {
          return s._(/*BTDS*/ "You're only visible to other admins");
        },
        subtext: function () {
          return s._(
            /*BTDS*/ "Admins for this channel can see your phone number, profile picture and name, but followers can't.",
          );
        },
      },
      g = [].concat(_, [
        f,
        {
          Icon: o("WAWebSecurityShieldIcon.react").SecurityShieldIcon,
          iconXstyle: c.bulletColor,
          text: function () {
            return s._(/*BTDS*/ "You're responsible for this channel");
          },
          subtext: function () {
            return s._(
              /*BTDS*/ "This channel needs to follow our {=m2} and is reviewed against them.",
              [
                s._implicitParam(
                  "=m2",
                  u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    children: s._(/*BTDS*/ "guidelines"),
                  }),
                ),
              ],
            );
          },
        },
      ]);
    ((l.BulletPointList = m),
      (l.MinimalBullets = _),
      (l.VisibilityBullet = f),
      (l.ExtendedBullets = g));
  },
  226,
);
