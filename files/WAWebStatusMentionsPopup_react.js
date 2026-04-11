__d(
  "WAWebStatusMentionsPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebHandIcon.react",
    "WAWebModal.react",
    "WAWebPeopleIcon.react",
    "WAWebRepeatIcon.react",
    "WAWebText.react",
    "WAWebWdsPictoPrivateMentionIcon.react",
    "WAWebWdsPictoSecurePrivateMentionLockIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        icon: { color: "xhslqc4", fill: "xvt3oi1", $$css: !0 },
        sectionIcon: { width: "xvy4d1p", $$css: !0 },
        sectionTitle: { width: "x1cvmir6", lineHeight: "x1o2sk6j", $$css: !0 },
        paddingHoriz8: {
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.isSentByMe,
        n = e.onOk,
        a = e.onOverlayClick;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.StatusReport,
        title: s._(/*BTDS*/ "You were mentioned privately"),
        okText: r("WAWebFbtCommon")("OK"),
        onOK: n,
        onOverlayClick: a,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          className: "x1ci5j9l",
          children: [
            u.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              className: "x150mmf0 xqf2s3x x98l61r x1ua1l7f xh8yej3",
              children: u.jsx(o("WAWebFlex.react").FlexItem, {
                children: t
                  ? u.jsx(
                      o("WAWebWdsPictoPrivateMentionIcon.react")
                        .WdsPictoPrivateMentionIcon,
                      { width: 88 * 1.25, height: 88 * 1.25 },
                    )
                  : u.jsx(
                      o("WAWebWdsPictoSecurePrivateMentionLockIcon.react")
                        .WdsPictoSecurePrivateMentionLockIcon,
                      { width: 132 * 1.25, height: 88 * 1.25 },
                    ),
              }),
            }),
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              className: "x150mmf0 xqf2s3x x98l61r x1ua1l7f",
              children: [
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: [c.paddingHoriz8, c.sectionIcon],
                  children: u.jsx(o("WAWebPeopleIcon.react").PeopleIcon, {
                    width: 24,
                    height: 24,
                    iconXstyle: c.icon,
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: [c.paddingHoriz8, c.sectionTitle],
                  children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(
                      /*BTDS*/ "People can mention you when they want you to see their status.",
                    ),
                  }),
                }),
              ],
            }),
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              className: "x150mmf0 xqf2s3x x98l61r x1ua1l7f",
              children: [
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: [c.paddingHoriz8, c.sectionIcon],
                  children: u.jsx(o("WAWebHandIcon.react").HandIcon, {
                    width: 24,
                    height: 24,
                    iconXstyle: c.icon,
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: [c.paddingHoriz8, c.sectionTitle],
                  children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(
                      /*BTDS*/ "Other viewers of this status can't see that you were mentioned.",
                    ),
                  }),
                }),
              ],
            }),
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              className: "x150mmf0 xqf2s3x x98l61r x1ua1l7f",
              children: [
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: [c.paddingHoriz8, c.sectionIcon],
                  children: u.jsx(o("WAWebRepeatIcon.react").RepeatIcon, {
                    width: 24,
                    height: 24,
                    iconXstyle: c.icon,
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: [c.paddingHoriz8, c.sectionTitle],
                  children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(
                      /*BTDS*/ "You can reshare statuses you're mentioned in as your own status on the mobile app.",
                    ),
                  }),
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
