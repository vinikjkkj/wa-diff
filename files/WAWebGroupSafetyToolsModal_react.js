__d(
  "WAWebGroupSafetyToolsModal.react",
  [
    "fbt",
    "WAWebCellV2.react",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebDrawerManager",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebLockIcon.react",
    "WAWebMessageReportIcon.react",
    "WAWebModalManager",
    "WAWebPrivacyVisibilityEditDrawer.react",
    "WAWebText.react",
    "WAWebThumbsDownIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d() {
      o("WAWebModalManager").ModalManager.open(u.jsx(m, {}));
    }
    function m() {
      var e,
        t = function () {
          o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getSafetyToolsFaqUrl(),
          );
        },
        n = function () {
          (o("WAWebModalManager").ModalManager.close(),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              u.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
                category: "groupAdd",
                onClose: o("WAWebDrawerManager").closeDrawerLeft,
              }),
            ));
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "group-safety-tools",
        },
        cancelText: r("WAWebFbtCommon")("Learn more"),
        okText: s._(/*BTDS*/ "Back to chat"),
        onCancel: t,
        onOK: o("WAWebModalManager").closeModalManager,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            u.jsx((e = o("WAWebText.react")).WAWebTextLarge, {
              children: s._(/*BTDS*/ "Safety tools"),
            }),
            u.jsx(e.WAWebTextMuted, {
              paddingTop: 8,
              children: s._(
                /*BTDS*/ "Here\u2019s what you can do to stay safe in group chats.",
              ),
            }),
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              alignSelf: "stretch",
              paddingTop: 8,
              children: [
                u.jsx(r("WAWebCellV2.react"), {
                  colorScheme: "lightest",
                  detailLeft: u.jsx(o("WAWebLockIcon.react").LockIcon, {
                    width: 24,
                    height: 24,
                    iconXstyle: c.secondaryColor,
                  }),
                  interactive: !1,
                  primary: u.jsx(e.WAWebTextTitle, {
                    children: s._(/*BTDS*/ "Control who can add you to groups"),
                  }),
                  secondary: u.jsx(e.WAWebTextMuted, {
                    textWrap: "wrap",
                    children: s._(
                      /*BTDS*/ "Change if contacts or non-contacts can add you to groups in {=m2}.",
                      [
                        s._implicitParam(
                          "=m2",
                          u.jsx(r("WAWebClickableLink.react"), {
                            onClick: n,
                            children: s._(/*BTDS*/ "privacy settings"),
                          }),
                        ),
                      ],
                    ),
                  }),
                  size: "medium",
                }),
                u.jsx(r("WAWebCellV2.react"), {
                  colorScheme: "lightest",
                  detailLeft: u.jsx(
                    o("WAWebMessageReportIcon.react").MessageReportIcon,
                    { width: 24, height: 24, iconXstyle: c.secondaryColor },
                  ),
                  interactive: !1,
                  primary: u.jsx(e.WAWebTextTitle, {
                    children: s._(/*BTDS*/ "Report messages in a group"),
                  }),
                  secondary: u.jsx(e.WAWebTextMuted, {
                    textWrap: "wrap",
                    children: s._(
                      /*BTDS*/ "Click on a message to report it, nobody in the group will be notified.",
                    ),
                  }),
                  size: "medium",
                }),
                u.jsx(r("WAWebCellV2.react"), {
                  colorScheme: "lightest",
                  detailLeft: u.jsx(
                    o("WAWebThumbsDownIcon.react").ThumbsDownIcon,
                    { width: 24, height: 24, iconXstyle: c.secondaryColor },
                  ),
                  interactive: !1,
                  primary: u.jsx(e.WAWebTextTitle, {
                    children: s._(/*BTDS*/ "Report group"),
                  }),
                  secondary: u.jsx(e.WAWebTextMuted, {
                    textWrap: "wrap",
                    children: s._(
                      /*BTDS*/ "Go to group chat info to report the group. Nobody in the group will know if you do.",
                    ),
                  }),
                  size: "medium",
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.displayGroupSafetyToolsModal = d));
  },
  226,
);
