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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.chat,
        a = e.followerInformation,
        i = e.isFullModal,
        l = e.newsletter,
        d = e.onTransferOwnershipSelection,
        m = e.onVerification,
        p = l == null ? void 0 : l.newsletterMetadata,
        _ = c(null),
        f = _[0],
        g = _[1],
        h;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = []), (t[0] = h))
        : (h = t[0]);
      var y = h,
        C;
      t[1] !== n ||
      t[2] !== a ||
      t[3] !== i ||
      t[4] !== l ||
      t[5] !== p ||
      t[6] !== d ||
      t[7] !== m
        ? ((C = function (t, c) {
            var e,
              _ = a.get(c.id),
              f = s._(/*BTDS*/ "Dismiss as admin"),
              h = function () {
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebNewsletterDismissAdminPopup.react"), {
                    isMe: o("WAWebUserPrefsMeUser").isMeAccount(c.id),
                    contact: c,
                    newsletter: l,
                  }),
                );
              },
              C = function () {
                o(
                  "WAWebNewsletterAdminSelectionFlow.react",
                ).startAdminInviteFlow({ chat: n, invitees: [c] });
              },
              b = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { testid: void 0, action: h, children: f },
                "newsletter-dismiss-as-admin",
              ),
              v =
                l == null ||
                (e = l.newsletterMetadata) == null ||
                (e = e.pendingAdmins) == null
                  ? void 0
                  : e.get(c.id);
            if (!o("WAWebUserPrefsMeUser").isMeAccount(c.id)) {
              if (
                o("WAWebNewsletterMembershipUtil").iAmOwner(p) &&
                o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled()
              ) {
                if (v != null) {
                  var S = s._(/*BTDS*/ "Revoke invite"),
                    R = function () {
                      o("WAWebModalManager").ModalManager.open(
                        u.jsx(
                          o("WAWebNewsletterRevokeInvitePopup.react")
                            .NewsletterRevokeInvitePopupWithContactName,
                          { contact: c, chat: l },
                        ),
                      );
                    };
                  y.push(
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
                  y.push(b);
                  var L = u.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    {
                      testid: void 0,
                      action: function () {
                        d == null || d(c);
                      },
                      children: o(
                        "WAWebCommonNewsletterStrings",
                      ).getNewsletterTransferOwnershipText(),
                    },
                    "newsletter-transfer-ownership",
                  );
                  y.push(L);
                } else if (v == null) {
                  var E = s._(/*BTDS*/ "Invite as channel admin");
                  y.push(
                    u.jsx(
                      o("WAWebDropdownItem.react").DropdownItem,
                      { testid: void 0, action: C, children: E },
                      "newsletter-invite-as-channel-admin",
                    ),
                  );
                }
              }
              var k = function () {
                  m(c);
                },
                I = s._(/*BTDS*/ "Verify security code");
              y.push(
                u.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  { testid: void 0, action: k, children: I },
                  "newsletter-verify-identity",
                ),
              );
            }
            o("WAWebNewsletterMembershipUtil").iAmAdmin(p) &&
              o("WAWebUserPrefsMeUser").isMeAccount(c.id) &&
              o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled() &&
              y.push(b);
            var T = t.type === "click" ? void 0 : t.target,
              D = t.anchor ? void 0 : t;
            g({
              contactId: c.id,
              menu: y,
              anchor: i ? T : t.anchor,
              event: i ? D : t.event,
            });
          }),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = p),
          (t[6] = d),
          (t[7] = m),
          (t[8] = C))
        : (C = t[8]);
      var b = C,
        v;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function () {
            g(null);
          }),
          (t[9] = v))
        : (v = t[9]);
      var S = v,
        R;
      if (f) {
        var L;
        (t[10] !== f
          ? ((L = u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "NewsletterSubscribersContextMenu",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: S,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: f }),
            })),
            (t[10] = f),
            (t[11] = L))
          : (L = t[11]),
          (R = L));
      }
      var E;
      return (
        t[12] !== b || t[13] !== R
          ? ((E = [R, b]), (t[12] = b), (t[13] = R), (t[14] = E))
          : (E = t[14]),
        E
      );
    }
    l.useNewsletterSubscribersContextMenu = d;
  },
  226,
);
