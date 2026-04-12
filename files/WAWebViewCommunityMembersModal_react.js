__d(
  "WAWebViewCommunityMembersModal.react",
  [
    "fbt",
    "invariant",
    "$InternalEnum",
    "WALogger",
    "WANullthrows",
    "WAWebABProps",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBoolFunc",
    "WAWebChatCollection",
    "WAWebChatRefreshedIcon.react",
    "WAWebCloseCircleRefreshedIcon.react",
    "WAWebCmd",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebCommunityMembersFlow.react",
    "WAWebCommunityTransferOwnershipFlowLoadable.react",
    "WAWebComposeBoxActions",
    "WAWebContactsModal.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerManager",
    "WAWebDropdownItem.react",
    "WAWebEmojiText.react",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebInfoFlowLoadable",
    "WAWebKeyboardTabUtils",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebModalManager",
    "WAWebNumbersIcon.react",
    "WAWebOpenAddParticipantModalFlow",
    "WAWebOpenCommunityParticipantDemoteConfirmation",
    "WAWebOpenCommunityParticipantPromoteConfirmation",
    "WAWebPersonArrowIcon.react",
    "WAWebPersonShieldCheckIcon.react",
    "WAWebPersonShieldRemoveIcon.react",
    "WAWebRemoveFromCommunityConfirmationPopup.react",
    "WAWebRoundShape.react",
    "WAWebStateUtils",
    "WAWebText_DONOTUSE.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserPrefsMeUser",
    "WAWebVerificationDrawerLoadable",
    "WAWebWid",
    "WDSIconIcLink.react",
    "WDSIconIcPerson.react",
    "WDSIconIcPersonAddFilled.react",
    "react",
    "useWAWebAddParticipantsSelectedContacts",
    "useWAWebCommunityMembers",
    "useWAWebSplitCommunityParticipants",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = ["ref"],
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useMemo,
      f = p.useState,
      g = {
        disclaimer: {
          paddingTop: "x1p57kb1",
          paddingInlineEnd: "xvtqlqk",
          paddingInlineStart: "xdx6fka",
          paddingBottom: "xvg22vi",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        dropdownText: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
      },
      h = n("$InternalEnum").Mirrored(["Members", "MembersNotInAnnouncements"]);
    function y(e) {
      var t,
        n = e.announcementGroupParticipants,
        a = e.contact,
        i = e.origin,
        l = e.parentChat,
        u = e.parentGroupParticipants,
        c =
          (t = u == null ? void 0 : u.get(a.id)) != null
            ? t
            : n == null
              ? void 0
              : n.get(a.id),
        d = [],
        p = function () {
          o("WAWebFindChatAction")
            .findOrCreateLatestChat(a.id, i)
            .then(function (e) {
              var t = e.chat;
              o("WAWebCmd")
                .Cmd.openChatFromUnread({ chat: t })
                .then(function (e) {
                  e &&
                    (o("WAWebComposeBoxActions").ComposeBoxActions.focus(t),
                    o("WAWebModalManager").ModalManager.close());
                });
            });
        },
        _ = function () {
          o("WAWebFindChatAction")
            .findOrCreateLatestChat(a.id, i)
            .then(function (e) {
              var t = e.chat;
              (o("WAWebModalManager").ModalManager.close(),
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                  o(
                    "WAWebAdaptiveLayoutGatingUtils",
                  ).shouldUseDrawerDescriptor()
                    ? {
                        descriptorType: "info_flow",
                        chat: o("WAWebStateUtils").unproxy(t),
                      }
                    : m.jsx(
                        o("WAWebInfoFlowLoadable").InfoFlowLoadable,
                        { chat: o("WAWebStateUtils").unproxy(t) },
                        "info-" + t.id.toString(),
                      ),
                  {
                    transition: "slide-left",
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  },
                ));
            });
        };
      if (!o("WAWebUserPrefsMeUser").isMeAccount(a.id)) {
        var f = s._(/*BTDS*/ "Message {name}", [
          s._param(
            "name",
            o("WAWebFrontendContactGetters").getFormattedShortName(a),
          ),
        ]);
        if (
          (d.push(
            m.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: p,
                ariaLabel: f,
                addSpacing: !0,
                icon: m.jsx(
                  o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon,
                  {},
                ),
                children: m.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: f,
                  xstyle: g.dropdownText,
                }),
              },
              "message-community-participant",
            ),
          ),
          o("WAWebFrontendContactGetters").getIsMyContact(a))
        ) {
          var h = s._(/*BTDS*/ "View {name}", [
            s._param(
              "name",
              o("WAWebFrontendContactGetters").getFormattedShortName(a),
            ),
          ]);
          d.push(
            m.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: _,
                ariaLabel: h,
                addSpacing: !0,
                icon: m.jsx(r("WDSIconIcPerson.react"), {}),
                children: m.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: h,
                  xstyle: g.dropdownText,
                }),
              },
              "view-community-participant",
            ),
          );
        }
        var y = function () {
            var e = o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated(),
              t = !0,
              n = e ? o("WAWebLidMigrationUtils").toUserLid(a.id) : void 0;
            (o("WAWebModalManager").ModalManager.close(),
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                  ? {
                      descriptorType: "verification",
                      lid: n,
                      contact: a,
                      isFirstLevel: t,
                    }
                  : m.jsx(
                      r("WAWebVerificationDrawerLoadable")
                        .VerificationDrawerLoadable,
                      { lid: n, contact: a, isFirstLevel: t },
                    ),
                { transition: "slide-left" },
              ));
          },
          C = s._(/*BTDS*/ "Verify security code");
        d.push(
          m.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              ariaLabel: C,
              action: y,
              icon: m.jsx(o("WAWebNumbersIcon.react").NumbersIcon, {}),
              children: C,
            },
            "verify-identity",
          ),
        );
      }
      if (c) {
        if (u != null && u.canTransferOwnership(c)) {
          var b = s._(/*BTDS*/ "Assign new owner");
          d.push(
            m.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                ariaLabel: b,
                action: function () {
                  (o("WAWebModalManager").ModalManager.close(),
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                      m.jsx(
                        o("WAWebCommunityTransferOwnershipFlowLoadable.react")
                          .CommunityTransferOwnershipFlowLoadable,
                        {
                          parentGroupChat: l,
                          onEnd: function () {
                            return o("WAWebCmd").Cmd.openCommunityTabbedInfo(
                              l.id,
                              void 0,
                              void 0,
                              !0,
                            );
                          },
                          contactSelected: c.contact,
                        },
                      ),
                      {
                        transition: "flow-transition-drawer-push",
                        focusType: o("WAWebKeyboardTabUtils").FocusType
                          .TABBABLE,
                      },
                    ));
                },
                icon: m.jsx(
                  o("WAWebPersonArrowIcon.react").PersonArrowIcon,
                  {},
                ),
                children: b,
              },
              "transfer-ownership-item",
            ),
          );
        }
        if (u != null && u.canPromote(c)) {
          var v = s._(/*BTDS*/ "Make admin");
          d.push(
            m.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                ariaLabel: v,
                action: function () {
                  return o(
                    "WAWebOpenCommunityParticipantPromoteConfirmation",
                  ).openCommunityParticipantPromoteConfirmation(l, c, n);
                },
                icon: m.jsx(
                  o("WAWebPersonShieldCheckIcon.react").PersonShieldCheckIcon,
                  {},
                ),
                children: v,
              },
              "promote-community-admin",
            ),
          );
        } else if (u != null && u.canDemote(c)) {
          var S = s._(/*BTDS*/ "Dismiss as admin");
          d.push(
            m.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                ariaLabel: S,
                action: function () {
                  return o(
                    "WAWebOpenCommunityParticipantDemoteConfirmation",
                  ).openCommunityParticipantDemoteConfirmation(c, l);
                },
                icon: m.jsx(
                  o("WAWebPersonShieldRemoveIcon.react").PersonShieldRemoveIcon,
                  {},
                ),
                children: S,
              },
              "demote-community-admin",
            ),
          );
        }
        if (u != null && u.canRemove(c) && !c.isSuperAdmin) {
          var R = function () {
              (o("WAWebModalManager").ModalManager.close(),
                o("WAWebModalManager").ModalManager.open(
                  m.jsx(r("WAWebRemoveFromCommunityConfirmationPopup.react"), {
                    contact: a,
                    parentGroupChat: l,
                  }),
                ));
            },
            L = s._(/*BTDS*/ "Remove from community");
          d.push(
            m.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                ariaLabel: L,
                action: R,
                icon: m.jsx(
                  o("WAWebCloseCircleRefreshedIcon.react")
                    .CloseCircleRefreshedIcon,
                  {},
                ),
                children: L,
              },
              "remove-from-community",
            ),
          );
        }
      }
      return d;
    }
    function C(e) {
      var t = e.onInviteMembersClick,
        n = e.parentChat,
        a = _(
          function () {
            return o(
              "WAWebCommunityAnnouncementGroupUtils",
            ).getCommunityAnnouncementGroup(n.groupMetadata);
          },
          [n.groupMetadata],
        ),
        i = o("useWAWebCommunityMembers").useCommunityMembers(n, a),
        l = i.announcementGroupParticipants,
        s = i.loading,
        u = i.members,
        c = i.parentGroupParticipants,
        d = !!(c != null && c.iAmAdmin()),
        p = r("useWAWebSplitCommunityParticipants")(d, l, u),
        f = p.members,
        g = p.membersNotInCAG,
        h = {
          parentChat: n,
          announcementGroupParticipants: l,
          parentGroupParticipants: c,
          loading: s,
          onInviteMembersClick: t,
        };
      return m.jsx(
        r("WAWebCommunityMembersFlow.react"),
        babelHelpers.extends({ members: f, membersNotInCAG: g }, h),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, c),
        i = a.parentChat,
        l = a.onInviteMembersClick,
        d = a.onMembersNotInAnnouncementsClick,
        p = a.members,
        _ = a.announcementGroupParticipants,
        b = a.parentGroupParticipants,
        v = a.theme,
        S = v === void 0 ? h.Members : v,
        R = a.loading,
        L = a.onBack,
        E = r("useWAWebAddParticipantsSelectedContacts")(),
        k = E.handleClearSelectedContacts,
        I = E.selectedContactsMap,
        T = E.updateSelectedContactsState,
        D = f(),
        x = D[0],
        $ = D[1],
        P = !!(b != null && b.iAmAdmin()),
        N = function (t, n) {
          var e = y({
              parentChat: i,
              parentGroupParticipants: b,
              announcementGroupParticipants: _,
              contact: n,
              origin: "communityParticipantSearch",
            }),
            r = t.type === "click" ? void 0 : t.target;
          $({
            contactId: n.id,
            menu: e,
            anchor: r,
            event: t.anchor ? void 0 : t,
          });
        },
        M = function () {
          var t,
            n =
              (t = o(
                "WAWebCommunityAnnouncementGroupUtils",
              ).getCommunityAnnouncementGroup(i.groupMetadata)) == null
                ? void 0
                : t.id;
          if (n == null) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Community add participants clicked but no CAG found",
                ])),
            );
            return;
          }
          var a = o("WAWebStateUtils").unproxy(
              o("WAWebChatCollection").ChatCollection.assertGet(n),
            ),
            s = function () {
              o("WAWebModalManager").ModalManager.open(
                m.jsx(C, { parentChat: i, onInviteMembersClick: l }),
              );
            };
          o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
            groupMetadata: r("WANullthrows")(a.groupMetadata),
            chat: a,
            onBack: s,
            selectedContactsMap: I,
            updateSelectedContactsState: T,
            reopenAddGroupFlowCallback: M,
            handleClearSelectedContacts: k,
          });
        },
        w = function (t) {
          return !!x && r("WAWebWid").equals(t, x.contactId);
        },
        A = function () {
          $(null);
        },
        F;
      x &&
        (F = m.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "ChatContextMenu",
          escapable: !0,
          popable: !0,
          dismissOnWindowResize: !0,
          requestDismiss: A,
          children: m.jsx(r("WAWebUimUieMenu.react"), { contextMenu: x }),
        }));
      var O = !!(b != null && b.iAmAdmin()),
        B,
        W,
        q,
        U,
        V;
      switch (S) {
        case h.Members: {
          O || (B = s._(/*BTDS*/ "Only community admins can see all members"));
          var H = s._(/*BTDS*/ "Members"),
            G =
              O && p
                ? s._(/*BTDS*/ "Members ({number_of_participants})", [
                    s._param("number_of_participants", p.length),
                  ])
                : H;
          W = R ? H : G;
          var z = s._(/*BTDS*/ "Invite to community via link");
          q = P
            ? m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                testid: void 0,
                className: "x1qafhyn x178xt8z x13fuv20 xx42vgk",
                icon: m.jsx(r("WAWebRoundShape.react"), {
                  theme: "group-modal",
                  children: m.jsx(r("WDSIconIcLink.react"), { testid: void 0 }),
                }),
                ariaLabel: z,
                onClick: function () {
                  (o("WAWebModalManager").ModalManager.close(), l());
                },
                children: m.jsx(o("WAWebText_DONOTUSE.react").Text, {
                  as: "span",
                  color: "dark",
                  size: "16",
                  children: z,
                }),
              })
            : null;
          var j = s._(/*BTDS*/ "Add members");
          ((U = P
            ? m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                testid: void 0,
                className: "x1qafhyn x178xt8z x13fuv20 xx42vgk",
                icon: m.jsx(r("WAWebRoundShape.react"), {
                  theme: "group-modal",
                  children: m.jsx(r("WDSIconIcPersonAddFilled.react"), {
                    directional: !0,
                  }),
                }),
                ariaLabel: j,
                onClick: M,
                children: m.jsx(o("WAWebText_DONOTUSE.react").Text, {
                  as: "span",
                  color: "dark",
                  size: "16",
                  children: j,
                }),
              })
            : null),
            (V = s._(/*BTDS*/ "Search members")));
          break;
        }
        case h.MembersNotInAnnouncements: {
          ((B = s._(
            /*BTDS*/ "People who are community members but are not in the community announcement group",
          )),
            (W = s._(/*BTDS*/ "Members not in announcements")),
            (V = s._(/*BTDS*/ "Search members not in announcements")));
          break;
        }
      }
      var K;
      d &&
        P &&
        (K = {
          text: s._(/*BTDS*/ "Members not in announcements"),
          onClick: d,
        });
      var Q = m.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
        xstyle: g.disclaimer,
        size: "14",
        color: "secondary",
        children: B,
      });
      return (
        W != null || u(0, 72429),
        m.jsxs("div", {
          ref: n,
          children: [
            m.jsx(r("WAWebContactsModal.react"), {
              contacts: p != null ? p : [],
              title: W,
              onCancel: L ? void 0 : o("WAWebModalManager").closeModalManager,
              onBack: L,
              participantCollection: r("WANullthrows")(b),
              listenForAdminChange: !0,
              isParentGroup: !0,
              showNotifyName: !0,
              elevatedPushNamesEnabled: o("WAWebABProps").getABPropConfigValue(
                "elevated_push_names_v2_m2_enabled",
              ),
              onContext: N,
              contextMenu: w,
              contextEnabled: o("WAWebBoolFunc").returnFalse,
              openContextOnClick: !0,
              firstRows: [q, U],
              lastRow: Q,
              button: K,
              searchPlaceholder: V,
              spinnerInHeader: R,
              loadOnlyContactPictures: !0,
            }),
            F,
          ],
        })
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"),
      (l.CommunityMembersSearchTheme = h),
      (l.getMemberContextMenuItems = y),
      (l.ViewCommunityMembersModal = C),
      (l.CommunityMembersSearch = b));
  },
  226,
);
