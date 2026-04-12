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
      var n = t.color,
        a = t.newsletterAdminProfile,
        i = t.onClose,
        l = o("WAWebInitialsFromNameUtils").getInitialsFromAdminProfile(a),
        u = o("WAWebNewsletterModelUtils").formatProfilePictureURL(
          a.pictureDirectPath,
        ),
        m;
      return (
        u != null
          ? (m = c.jsx(r("WAWebImg.react"), {
              src: u,
              hasPrivacyChecks: !0,
              crossOrigin: !1,
              className: (e || (e = r("stylex")))([
                d.profilePicture,
                d.container,
              ]),
              draggable: !1,
            }))
          : (m = c.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: d.container,
              isFlexContainer: !0,
              children: c.jsx(
                o("WAWebInitialsProfilePicture.react").InitialsProfilePicture,
                { initialsData: l, backgroundColorId: n },
              ),
            })),
        c.jsxs(r("WAWebDrawer.react"), {
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              title: s._(/*BTDS*/ "Admin profile"),
              onCancel: i,
            }),
            c.jsx(r("WAWebDrawerBody.react"), {
              children: c.jsx(r("WAWebDrawerSection.react"), {
                theme: "no-padding",
                children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                  align: "center",
                  xstyle: d.profileContainer,
                  children: [
                    m,
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: d.nameContainer,
                      children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: a.name,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
