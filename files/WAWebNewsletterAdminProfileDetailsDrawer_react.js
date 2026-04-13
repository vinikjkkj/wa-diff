__d(
  "WAWebNewsletterAdminProfileDetailsDrawer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebImg.react",
    "WAWebInitialsFromNameUtils",
    "WAWebInitialsProfilePicture.react",
    "WAWebNewsletterModelUtils",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        profileContainer: {
          paddingTop: "x1sk1jro",
          paddingBottom: "x1ci70gm",
          $$css: !0,
        },
        profilePicture: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          objectFit: "xl1xv1r",
          objectPosition: "x115dhu7",
          $$css: !0,
        },
        nameContainer: {
          marginTop: "x98l61r",
          fontSize: "xngnso2",
          fontWeight: "xo1l8bm",
          color: "x14ug900",
          textAlign: "x2b8uid",
          wordBreak: "x13faqbe",
          $$css: !0,
        },
        container: { width: "x1oysuqx", height: "x1m3v4wt", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(22),
        a = t.color,
        i = t.newsletterAdminProfile,
        l = t.onClose,
        u;
      n[0] !== i
        ? ((u = o("WAWebInitialsFromNameUtils").getInitialsFromAdminProfile(i)),
          (n[0] = i),
          (n[1] = u))
        : (u = n[1]);
      var m = u,
        p;
      n[2] !== i.pictureDirectPath
        ? ((p = o("WAWebNewsletterModelUtils").formatProfilePictureURL(
            i.pictureDirectPath,
          )),
          (n[2] = i.pictureDirectPath),
          (n[3] = p))
        : (p = n[3]);
      var _ = p,
        f;
      if (_ != null) {
        var g;
        n[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (e || (e = r("stylex")))([d.profilePicture, d.container])),
            (n[4] = g))
          : (g = n[4]);
        var h;
        (n[5] !== _ || n[6] !== g
          ? ((h = c.jsx(r("WAWebImg.react"), {
              src: _,
              hasPrivacyChecks: !0,
              crossOrigin: !1,
              className: g,
              draggable: !1,
            })),
            (n[5] = _),
            (n[6] = g),
            (n[7] = h))
          : (h = n[7]),
          (f = h));
      } else {
        var y;
        (n[8] !== a || n[9] !== m
          ? ((y = c.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: d.container,
              isFlexContainer: !0,
              children: c.jsx(
                o("WAWebInitialsProfilePicture.react").InitialsProfilePicture,
                { initialsData: m, backgroundColorId: a },
              ),
            })),
            (n[8] = a),
            (n[9] = m),
            (n[10] = y))
          : (y = n[10]),
          (f = y));
      }
      var C;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Admin profile")), (n[11] = C))
        : (C = n[11]);
      var b;
      n[12] !== l
        ? ((b = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            title: C,
            onCancel: l,
          })),
          (n[12] = l),
          (n[13] = b))
        : (b = n[13]);
      var v;
      n[14] !== i.name
        ? ((v = c.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: d.nameContainer,
            children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: i.name,
            }),
          })),
          (n[14] = i.name),
          (n[15] = v))
        : (v = n[15]);
      var S;
      n[16] !== f || n[17] !== v
        ? ((S = c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsx(r("WAWebDrawerSection.react"), {
              theme: "no-padding",
              children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                xstyle: d.profileContainer,
                children: [f, v],
              }),
            }),
          })),
          (n[16] = f),
          (n[17] = v),
          (n[18] = S))
        : (S = n[18]);
      var R;
      return (
        n[19] !== b || n[20] !== S
          ? ((R = c.jsxs(r("WAWebDrawer.react"), { children: [b, S] })),
            (n[19] = b),
            (n[20] = S),
            (n[21] = R))
          : (R = n[21]),
        R
      );
    }
    l.default = m;
  },
  226,
);
