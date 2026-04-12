__d(
  "WAWebGroupParticipantSearch.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebBoolFunc",
    "WAWebChatGroupUtils",
    "WAWebChatRefreshedIcon.react",
    "WAWebClearRefreshedIcon.react",
    "WAWebCmd",
    "WAWebCommunityGatingUtils",
    "WAWebCommunityGetGeneralChatParticipantText.react",
    "WAWebContactsModal.react",
    "WAWebDropdownItem.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebGroupMemberTagUpdateLogger",
    "WAWebGroupParticipantsFlow.react",
    "WAWebGroupType",
    "WAWebInfoRefreshedIcon.react",
    "WAWebMemberLabelCreateUpdateModal.react",
    "WAWebMemberLabelsFrontendUtils",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebNumbersIcon.react",
    "WAWebOpenCommunityParticipantDemoteConfirmation",
    "WAWebOpenCommunityParticipantPromoteConfirmation",
    "WAWebPersonShieldCheckIcon.react",
    "WAWebPersonShieldRemoveIcon.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUseShowPastParticipants",
    "WAWebUserPrefsMeUser",
    "WDSIconIcEdit.react",
    "react",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c.useState,
      p = {
        dropdownText: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
        generalChatContainer: { backgroundColor: "x1280gxy", $$css: !0 },
      };
    function _(t) {
      "use no forget";
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.chat,
        l = a.onContactInfo,
        c = a.onPastParticipants,
        m = a.onVerification,
        _ = i.groupMetadata,
        f = g(i, m, l),
        h = f[0],
        y = f[1],
        C = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(
        _ == null ? void 0 : _.participants,
        ["bulk_add", "bulk_remove", "reset"],
        C,
      );
      var b = o("WAWebUseShowPastParticipants").useShowPastParticipants(i);
      if (_ == null) return null;
      var v = _.participants,
        S = function (t) {
          return !o("WAWebUserPrefsMeUser").isMeAccount(t);
        },
        R;
      b && (R = { text: s._(/*BTDS*/ "View past members"), onClick: c });
      var L = null;
      if (
        _.groupType === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP &&
        o("WAWebCommunityGatingUtils").communityGeneralChatUIEnabled() &&
        !o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled()
      ) {
        var E = !!_.generalChatAutoAddDisabled;
        L = d.jsx(
          "div",
          babelHelpers.extends(
            {},
            (u || (u = r("stylex"))).props(
              p.generalChatContainer,
              o("WAWebUISpacing").uiPadding.vert12,
              o("WAWebUISpacing").uiPadding.horiz30,
            ),
            {
              children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: o(
                  "WAWebCommunityGetGeneralChatParticipantText.react",
                ).getGeneralChatParticipantListText(E),
              }),
            },
          ),
        );
      }
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx(r("WAWebContactsModal.react"), {
            ref: n,
            title: s._(/*BTDS*/ "Search members"),
            onCancel: o("WAWebModalManager").closeModalManager,
            openContextOnClick: !0,
            contextEnabled: o("WAWebBoolFunc").returnFalse,
            contextMenu: S,
            onContext: y,
            showNotifyName: !0,
            elevatedPushNamesEnabled: o(
              "WAWebElevatedPushNamesFlag",
            ).elevatedPushNamesM2Enabled(i),
            listenForAdminChange: !0,
            participantCollection: v,
            contacts: v.map(function (e) {
              return e.contact;
            }),
            button: R,
            showStatusRingAroundProfilePhoto: !0,
            firstRows: [L],
            showMemberLabel: o(
              "WAWebMemberLabelsFrontendUtils",
            ).shouldShowMemberLabelForChat(i),
            sourceChat: i,
          }),
          h,
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = function (t) {
      var e = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(
        t,
        "group_participant_search_open_chat",
      );
      e != null &&
        o("WAWebFindChatAction")
          .findOrCreateLatestChat(e, "groupParticipantSearch")
          .then(function (e) {
            var t = e.chat;
            (o("WAWebModalManager").ModalManager.close(),
              o("WAWebCmd").Cmd.openChatFromUnread({ chat: t }));
          });
    };
    function g(e, t, n) {
      var a = m(null),
        i = a[0],
        l = a[1],
        u = function (n, r) {
          if (n.isAdmin) {
            r && o("WAWebModalManager").ModalManager.close();
            return;
          }
          (n.contact.pendingAction++,
            o("WAWebModifyParticipantsGroupAction")
              .promoteParticipants(e, [n])
              .finally(function () {
                n.contact.pendingAction--;
              }),
            r && o("WAWebModalManager").ModalManager.close());
        },
        c = function (n, r) {
          (n.contact.pendingAction++,
            o("WAWebModifyParticipantsGroupAction")
              .removeParticipants(e, [n])
              .finally(function () {
                n.contact.pendingAction--;
              }),
            r && o("WAWebModalManager").ModalManager.close());
        },
        _ = function (n) {
          n.isAdmin &&
            (n.contact.pendingAction++,
            o("WAWebModifyParticipantsGroupAction")
              .demoteParticipants(e, [n])
              .finally(function () {
                n.contact.pendingAction--;
              }));
        },
        g = function (i, m) {
          var a = r("WANullthrows")(e.groupMetadata).participants,
            g = a.assertGet(m.id.toString()),
            h = [],
            y = o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e);
          if (o("WAWebMemberLabelsFrontendUtils").canEditMemberLabel(m, e)) {
            var C = function () {
              o("WAWebModalManager").ModalManager.open(
                d.jsx(
                  o("WAWebMemberLabelCreateUpdateModal.react")
                    .MemberLabelCreateUpdateModal,
                  {
                    chat: e,
                    entryPoint: o("WAWebGroupMemberTagUpdateLogger")
                      .GroupMemberTagUpdateLogger.ENTRY_POINT.MEMBER_LIST,
                  },
                ),
              );
            };
            h.push(
              d.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: C,
                  icon: d.jsx(r("WDSIconIcEdit.react"), {}),
                  children: s._(/*BTDS*/ "Edit member tag"),
                },
                "edit-member-label",
              ),
            );
          }
          if (a.canPromote(g)) {
            var b = d.jsx(
                o("WAWebPersonShieldCheckIcon.react").PersonShieldCheckIcon,
                {},
              ),
              v;
            if (y) {
              var S;
              v = s._(/*BTDS*/ "Make admin");
              var R =
                (S = e.groupMetadata) == null ? void 0 : S.getParentGroupChat();
              h.push(
                d.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    testid: void 0,
                    action: function () {
                      o(
                        "WAWebOpenCommunityParticipantPromoteConfirmation",
                      ).openCommunityParticipantPromoteConfirmation(
                        R,
                        g,
                        a,
                        g.contact,
                      );
                    },
                    icon: b,
                    children: v,
                  },
                  "promote",
                ),
              );
            } else
              ((v = s._(/*BTDS*/ "Make group admin")),
                h.push(
                  d.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    {
                      testid: void 0,
                      action: function () {
                        return u(g, !1);
                      },
                      icon: b,
                      children: v,
                    },
                    "promote",
                  ),
                ));
          }
          if (a.canRemove(g)) {
            var L = function () {
                return c(g, !1);
              },
              E = s._(/*BTDS*/ "Remove");
            h.push(
              d.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: L,
                  icon: d.jsx(
                    o("WAWebClearRefreshedIcon.react").ClearRefreshedIcon,
                    {},
                  ),
                  children: E,
                },
                "remove",
              ),
            );
          }
          if (a.canDemote(g)) {
            var k = function () {
                return _(g);
              },
              I = s._(/*BTDS*/ "Dismiss as admin"),
              T = d.jsx(
                o("WAWebPersonShieldRemoveIcon.react").PersonShieldRemoveIcon,
                {},
              );
            if (y) {
              var D,
                x =
                  (D = e.groupMetadata) == null
                    ? void 0
                    : D.getParentGroupChat();
              h.push(
                d.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    testid: void 0,
                    action: function () {
                      return o(
                        "WAWebOpenCommunityParticipantDemoteConfirmation",
                      ).openCommunityParticipantDemoteConfirmation(g, x);
                    },
                    icon: T,
                    children: I,
                  },
                  "demote-admin",
                ),
              );
            } else
              h.push(
                d.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  { testid: void 0, action: k, icon: T, children: I },
                  "demote-admin",
                ),
              );
          }
          if (n) {
            var $ = function () {
              var e = o("WAWebGroupParticipantsFlow.react").getOneToOneContact(
                m,
              );
              e && (o("WAWebModalManager").ModalManager.close(), n(e));
            };
            h.push(
              d.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: $,
                  icon: d.jsx(
                    o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
                    {},
                  ),
                  children: s._(/*BTDS*/ "Contact info"),
                },
                "contact-info",
              ),
            );
          }
          if (a.canVerifyIdentity(g)) {
            var P = function () {
                (o("WAWebModalManager").ModalManager.close(),
                  t == null || t(g.contact));
              },
              N = s._(/*BTDS*/ "Verify security code");
            h.push(
              d.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: P,
                  icon: d.jsx(o("WAWebNumbersIcon.react").NumbersIcon, {}),
                  children: N,
                },
                "verify-identity",
              ),
            );
          }
          var M = o("WAWebUserPrefsMeUser").isMeAccount(g.contact.id),
            w = M
              ? s._(/*BTDS*/ "Message yourself")
              : s._(/*BTDS*/ "Message {author}", [
                  s._param(
                    "author",
                    o("WAWebFrontendContactGetters").getFormattedShortName(
                      g.contact,
                    ),
                  ),
                ]);
          h.push(
            d.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                ariaLabel: w,
                action: f.bind(null, g.contact.id),
                addSpacing: !0,
                icon: d.jsx(
                  o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon,
                  { directional: !0 },
                ),
                children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: w,
                  xstyle: p.dropdownText,
                }),
              },
              "message author",
            ),
          );
          var A = i.type === "click" ? void 0 : i.target;
          l({
            contactId: m.id,
            menu: h,
            anchor: A,
            event: i.anchor ? void 0 : i,
          });
        },
        h = function () {
          l(null);
        },
        y;
      return (
        i &&
          (y = d.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "ChatContextMenu",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: h,
            children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: i }),
          })),
        [y, g]
      );
    }
    l.default = _;
  },
  226,
);
