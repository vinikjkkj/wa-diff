__d(
  "WAWebGroupInviteRevokeModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebGroupType",
    "WAWebModalManager",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        confirmationText: {
          display: "x1lliihq",
          fontSize: "x6prxxf",
          lineHeight: "x1fc57z9",
          color: "x14ug900",
          $$css: !0,
        },
      };
    function m(t) {
      var n,
        a = t.chat,
        i = t.onConfirm,
        l = function () {
          o("WAWebModalManager").ModalManager.close();
        },
        u = function () {
          (i(), o("WAWebModalManager").ModalManager.close());
        };
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "group-invite-revoke",
        },
        title: s._(/*BTDS*/ "Reset link"),
        onOK: u,
        okText: s._(/*BTDS*/ "Reset link"),
        onCancel: l,
        cancelText: s._(/*BTDS*/ "Cancel"),
        children: c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              d.confirmationText,
              o("WAWebUISpacing").uiPadding.top4,
              o("WAWebUISpacing").uiPadding.bottom5,
              o("WAWebUISpacing").uiPadding.horiz0,
            ),
            {
              children:
                ((n = a.groupMetadata) == null ? void 0 : n.groupType) ===
                o("WAWebGroupType").GroupType.COMMUNITY
                  ? s._(
                      /*BTDS*/ 'Are you sure you want to reset the invite link for "{community}"? If you reset the link, no one will be able to use it to join this community.',
                      [s._param("community", a.contact.name)],
                    )
                  : s._(
                      /*BTDS*/ 'Are you sure you want to reset the invite link for "{group}"? If you reset the link, no one will be able to use it to join this group.',
                      [s._param("group", a.contact.name)],
                    ),
            },
          ),
        ),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
