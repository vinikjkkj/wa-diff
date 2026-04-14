__d(
  "WAWebMemberLabelContactInfo.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebGroupMemberTagUpdateLogger",
    "WAWebMemberLabelCreateUpdateModal.react",
    "WAWebMemberLabelGating",
    "WAWebMemberLabelHooks",
    "WAWebMemberLabelRenderer.react",
    "WAWebMemberLabelsFrontendUtils",
    "WAWebModalManager",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { memberLabelRow: { columnGap: "x1trrmfo", $$css: !0 } };
    function d(e) {
      var t = e.chat,
        n = e.contact,
        a = n.id,
        i = o("WAWebMemberLabelHooks").useHasSelfMemberLabelForChat(t),
        l = { from: "chat_and_member", chat: t, member: a };
      if (
        !(
          !t ||
          !o("WAWebMemberLabelsFrontendUtils").shouldShowMemberLabelForChat(t)
        )
      ) {
        var d = u.jsx(o("WAWebFlex.react").FlexRow, {
          justify: "center",
          children: u.jsx(r("WAWebMemberLabelRenderer.react"), {
            memberLabelArgs: l,
            type: "Body2",
          }),
        });
        return (
          o("WAWebMemberLabelsFrontendUtils").canEditMemberLabel(n, t)
            ? (d = u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                children: [
                  d,
                  u.jsx(r("WAWebUnstyledButton.react"), {
                    onClick: function () {
                      o("WAWebModalManager").ModalManager.open(
                        u.jsx(
                          o("WAWebMemberLabelCreateUpdateModal.react")
                            .MemberLabelCreateUpdateModal,
                          {
                            chat: t,
                            entryPoint: o("WAWebGroupMemberTagUpdateLogger")
                              .GroupMemberTagUpdateLogger.ENTRY_POINT
                              .CONTACT_CARD,
                          },
                        ),
                      );
                    },
                    children: u.jsx(r("WDSText.react"), {
                      type: "Body2Emphasized",
                      colorName: "contentActionEmphasized",
                      children: s._(/*BTDS*/ "Edit your member tag"),
                    }),
                  }),
                ],
              }))
            : o("WAWebMemberLabelsFrontendUtils").memberLabelExists(l) &&
              !i &&
              o("WAWebMemberLabelGating").isMemberLabelSenderEnabled() &&
              (d = u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                xstyle: c.memberLabelRow,
                children: [
                  d,
                  u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: "\xB7",
                  }),
                  u.jsx(r("WAWebUnstyledButton.react"), {
                    onClick: function () {
                      o("WAWebModalManager").ModalManager.open(
                        u.jsx(
                          o("WAWebMemberLabelCreateUpdateModal.react")
                            .MemberLabelCreateUpdateModal,
                          {
                            chat: t,
                            entryPoint: o("WAWebGroupMemberTagUpdateLogger")
                              .GroupMemberTagUpdateLogger.ENTRY_POINT
                              .CONTACT_CARD,
                          },
                        ),
                      );
                    },
                    children: u.jsx(r("WDSText.react"), {
                      type: "Body2Emphasized",
                      colorName: "contentActionEmphasized",
                      children: s._(/*BTDS*/ "Add your member tag"),
                    }),
                  }),
                ],
              })),
          u.jsx("div", { className: "x1anpbxc xyorhqc", children: d })
        );
      }
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.MemberLabelContactInfo = d));
  },
  226,
);
