__d(
  "WAWebTeeBotGroupTeeAddedModal.react",
  [
    "fbt",
    "WAWebAdminIcon.react",
    "WAWebBotGroupGatingUtils",
    "WAWebBox.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebLockIcon.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        headerText: { textAlign: "x2b8uid", $$css: !0 },
        icon: { color: "xhslqc4", $$css: !0 },
        sectionIcon: { width: "xvy4d1p", $$css: !0 },
        sectionTitle: { width: "xdzyupr", lineHeight: "x1o2sk6j", $$css: !0 },
      };
    function m() {
      var t = function () {
          (o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getTeeGroupLearnMoreUrl(),
          ),
            o("WAWebModalManager").ModalManager.close());
        },
        n = r("useWAWebFocusOnMount")(),
        a = s._(/*BTDS*/ "Private Processing keeps chats with Meta AI private");
      return o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
        ? c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            okText: s._(/*BTDS*/ "Learn more"),
            onOK: t,
            type: o("WAWebModal.react").ModalTheme.Promote,
            ref: n,
            children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: [
                o("WAWebUISpacing").uiMargin.vertAuto,
                o("WAWebUISpacing").uiPadding.bottom16,
              ],
              children: [
                c.jsx(r("WAWebBox.react"), {
                  xstyle: [
                    d.headerText,
                    o("WAWebUISpacing").uiMargin.horiz8,
                    o("WAWebUISpacing").uiMargin.top16,
                    o("WAWebUISpacing").uiMargin.bottom8,
                  ],
                  children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
                    weight: "bold",
                    children: a,
                  }),
                }),
                c.jsxs(o("WAWebFlex.react").FlexRow, {
                  className: (e || (e = r("stylex")))(
                    o("WAWebUISpacing").uiMargin.horiz8,
                    o("WAWebUISpacing").uiMargin.vert16,
                  ),
                  children: [
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: [
                        o("WAWebUISpacing").uiPadding.horiz8,
                        d.sectionIcon,
                      ],
                      children: c.jsx(o("WAWebLockIcon.react").LockIcon, {
                        width: 24,
                        height: 24,
                        iconXstyle: d.icon,
                      }),
                    }),
                    c.jsxs(o("WAWebFlex.react").FlexItem, {
                      xstyle: [
                        o("WAWebUISpacing").uiPadding.horiz8,
                        d.sectionTitle,
                      ],
                      children: [
                        c.jsx(o("WAWebText.react").WAWebTextTitle, {
                          children: s._(/*BTDS*/ "Your chat is private"),
                        }),
                        c.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: s._(
                            /*BTDS*/ "This chat is secured with Private Processing, so Meta and WhatsApp can't see it.",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs(o("WAWebFlex.react").FlexRow, {
                  className: e(
                    o("WAWebUISpacing").uiMargin.horiz8,
                    o("WAWebUISpacing").uiMargin.vert16,
                  ),
                  children: [
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: [
                        o("WAWebUISpacing").uiPadding.horiz8,
                        d.sectionIcon,
                      ],
                      children: c.jsx(o("WAWebAdminIcon.react").AdminIcon, {
                        width: 24,
                        height: 24,
                        iconXstyle: d.icon,
                      }),
                    }),
                    c.jsxs(o("WAWebFlex.react").FlexItem, {
                      xstyle: [
                        o("WAWebUISpacing").uiPadding.horiz8,
                        d.sectionTitle,
                      ],
                      children: [
                        c.jsx(o("WAWebText.react").WAWebTextTitle, {
                          children: s._(/*BTDS*/ "Group admins are in control"),
                        }),
                        c.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: s._(
                            /*BTDS*/ "Admins can remove Meta AI from the group at any time.",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        : null;
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
