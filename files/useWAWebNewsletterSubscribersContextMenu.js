__d(
  "useWAWebNewsletterSubscribersContextMenu",
  [
    "fbt",
    "WAWebCommonNewsletterEnums",
    "WAWebCommonNewsletterStrings",
    "WAWebDropdownItem.react",
    "WAWebModalManager",
    "WAWebNewsletterAdminSelectionFlow.react",
    "WAWebNewsletterDismissAdminPopup.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterRevokeInvitePopup.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.chat,
        n = e.followerInformation,
        a = e.isFullModal,
        i = e.newsletter,
        l = e.onTransferOwnershipSelection,
        d = e.onVerification,
        m = i == null ? void 0 : i.newsletterMetadata,
        p = c(null),
        _ = p[0],
        f = p[1],
        g = [],
        h = function (c, p) {
          var e,
            _ = n.get(p.id),
            h = s._(/*BTDS*/ "Dismiss as admin"),
            y = function () {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebNewsletterDismissAdminPopup.react"), {
                  isMe: o("WAWebUserPrefsMeUser").isMeAccount(p.id),
                  contact: p,
                  newsletter: i,
                }),
              );
            },
            C = function () {
              o("WAWebNewsletterAdminSelectionFlow.react").startAdminInviteFlow(
                { chat: t, invitees: [p] },
              );
            },
            b = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              { testid: void 0, action: y, children: h },
              "newsletter-dismiss-as-admin",
            ),
            v =
              i == null ||
              (e = i.newsletterMetadata) == null ||
              (e = e.pendingAdmins) == null
                ? void 0
                : e.get(p.id);
          if (!o("WAWebUserPrefsMeUser").isMeAccount(p.id)) {
            if (
              o("WAWebNewsletterMembershipUtil").iAmOwner(m) &&
              o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled()
            ) {
              if (v != null) {
                var S = s._(/*BTDS*/ "Revoke invite"),
                  R = function () {
                    o("WAWebModalManager").ModalManager.open(
                      u.jsx(
                        o("WAWebNewsletterRevokeInvitePopup.react")
                          .NewsletterRevokeInvitePopupWithContactName,
                        { contact: p, chat: i },
                      ),
                    );
                  };
                g.push(
                  u.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    { testid: void 0, action: R, children: S },
                    "newsletter-revoke-invite",
                  ),
                );
              } else if (
                (_ == null ? void 0 : _.newsletterRole) ===
                o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin
              ) {
                g.push(b);
                var L = u.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    testid: void 0,
                    action: function () {
                      l == null || l(p);
                    },
                    children: o(
                      "WAWebCommonNewsletterStrings",
                    ).getNewsletterTransferOwnershipText(),
                  },
                  "newsletter-transfer-ownership",
                );
                g.push(L);
              } else if (v == null) {
                var E = s._(/*BTDS*/ "Invite as channel admin");
                g.push(
                  u.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    { testid: void 0, action: C, children: E },
                    "newsletter-invite-as-channel-admin",
                  ),
                );
              }
            }
            var k = function () {
                d(p);
              },
              I = s._(/*BTDS*/ "Verify security code");
            g.push(
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { testid: void 0, action: k, children: I },
                "newsletter-verify-identity",
              ),
            );
          }
          o("WAWebNewsletterMembershipUtil").iAmAdmin(m) &&
            o("WAWebUserPrefsMeUser").isMeAccount(p.id) &&
            o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled() &&
            g.push(b);
          var T = c.type === "click" ? void 0 : c.target,
            D = c.anchor ? void 0 : c;
          f({
            contactId: p.id,
            menu: g,
            anchor: a ? T : c.anchor,
            event: a ? D : c.event,
          });
        },
        y = function () {
          f(null);
        },
        C;
      return (
        _ &&
          (C = u.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "NewsletterSubscribersContextMenu",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: y,
            children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: _ }),
          })),
        [C, h]
      );
    }
    l.useNewsletterSubscribersContextMenu = d;
  },
  226,
);
