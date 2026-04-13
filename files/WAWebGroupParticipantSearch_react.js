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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(19),
        i = m(null),
        l = i[0],
        u = i[1],
        c;
      a[0] !== e
        ? ((c = function (n, r) {
            if (n.isAdmin) {
              r && o("WAWebModalManager").ModalManager.close();
              return;
            }
            ((n.contact.pendingAction = n.contact.pendingAction + 1),
              o("WAWebModifyParticipantsGroupAction")
                .promoteParticipants(e, [n])
                .finally(function () {
                  n.contact.pendingAction = n.contact.pendingAction - 1;
                }),
              r && o("WAWebModalManager").ModalManager.close());
          }),
          (a[0] = e),
          (a[1] = c))
        : (c = a[1]);
      var _ = c,
        g;
      a[2] !== e
        ? ((g = function (n, r) {
            ((n.contact.pendingAction = n.contact.pendingAction + 1),
              o("WAWebModifyParticipantsGroupAction")
                .removeParticipants(e, [n])
                .finally(function () {
                  n.contact.pendingAction = n.contact.pendingAction - 1;
                }),
              r && o("WAWebModalManager").ModalManager.close());
          }),
          (a[2] = e),
          (a[3] = g))
        : (g = a[3]);
      var h = g,
        y;
      a[4] !== e
        ? ((y = function (n) {
            n.isAdmin &&
              ((n.contact.pendingAction = n.contact.pendingAction + 1),
              o("WAWebModifyParticipantsGroupAction")
                .demoteParticipants(e, [n])
                .finally(function () {
                  n.contact.pendingAction = n.contact.pendingAction - 1;
                }));
          }),
          (a[4] = e),
          (a[5] = y))
        : (y = a[5]);
      var C = y,
        b;
      a[6] !== e ||
      a[7] !== C ||
      a[8] !== n ||
      a[9] !== t ||
      a[10] !== _ ||
      a[11] !== h
        ? ((b = function (i, l) {
            var a = r("WANullthrows")(e.groupMetadata).participants,
              c = a.assertGet(l.id.toString()),
              m = [],
              g = o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e);
            if (o("WAWebMemberLabelsFrontendUtils").canEditMemberLabel(l, e)) {
              var y = function () {
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
              m.push(
                d.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    testid: void 0,
                    action: y,
                    icon: d.jsx(r("WDSIconIcEdit.react"), {}),
                    children: s._(/*BTDS*/ "Edit member tag"),
                  },
                  "edit-member-label",
                ),
              );
            }
            if (a.canPromote(c)) {
              var b = d.jsx(
                  o("WAWebPersonShieldCheckIcon.react").PersonShieldCheckIcon,
                  {},
                ),
                v;
              if (g) {
                var S;
                v = s._(/*BTDS*/ "Make admin");
                var R =
                  (S = e.groupMetadata) == null
                    ? void 0
                    : S.getParentGroupChat();
                m.push(
                  d.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    {
                      testid: void 0,
                      action: function () {
                        o(
                          "WAWebOpenCommunityParticipantPromoteConfirmation",
                        ).openCommunityParticipantPromoteConfirmation(
                          R,
                          c,
                          a,
                          c.contact,
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
                  m.push(
                    d.jsx(
                      o("WAWebDropdownItem.react").DropdownItem,
                      {
                        testid: void 0,
                        action: function () {
                          return _(c, !1);
                        },
                        icon: b,
                        children: v,
                      },
                      "promote",
                    ),
                  ));
            }
            if (a.canRemove(c)) {
              var L = function () {
                  return h(c, !1);
                },
                E = s._(/*BTDS*/ "Remove");
              m.push(
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
            if (a.canDemote(c)) {
              var k = function () {
                  return C(c);
                },
                I = s._(/*BTDS*/ "Dismiss as admin"),
                T = d.jsx(
                  o("WAWebPersonShieldRemoveIcon.react").PersonShieldRemoveIcon,
                  {},
                );
              if (g) {
                var D,
                  x =
                    (D = e.groupMetadata) == null
                      ? void 0
                      : D.getParentGroupChat();
                m.push(
                  d.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    {
                      testid: void 0,
                      action: function () {
                        return o(
                          "WAWebOpenCommunityParticipantDemoteConfirmation",
                        ).openCommunityParticipantDemoteConfirmation(c, x);
                      },
                      icon: T,
                      children: I,
                    },
                    "demote-admin",
                  ),
                );
              } else
                m.push(
                  d.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    { testid: void 0, action: k, icon: T, children: I },
                    "demote-admin",
                  ),
                );
            }
            if (n) {
              var $ = function () {
                var e = o(
                  "WAWebGroupParticipantsFlow.react",
                ).getOneToOneContact(l);
                e && (o("WAWebModalManager").ModalManager.close(), n(e));
              };
              m.push(
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
            if (a.canVerifyIdentity(c)) {
              var P = function () {
                  (o("WAWebModalManager").ModalManager.close(),
                    t == null || t(c.contact));
                },
                N = s._(/*BTDS*/ "Verify security code");
              m.push(
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
            var M = o("WAWebUserPrefsMeUser").isMeAccount(c.contact.id),
              w = M
                ? s._(/*BTDS*/ "Message yourself")
                : s._(/*BTDS*/ "Message {author}", [
                    s._param(
                      "author",
                      o("WAWebFrontendContactGetters").getFormattedShortName(
                        c.contact,
                      ),
                    ),
                  ]);
            m.push(
              d.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  ariaLabel: w,
                  action: f.bind(null, c.contact.id),
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
            u({
              contactId: l.id,
              menu: m,
              anchor: A,
              event: i.anchor ? void 0 : i,
            });
          }),
          (a[6] = e),
          (a[7] = C),
          (a[8] = n),
          (a[9] = t),
          (a[10] = _),
          (a[11] = h),
          (a[12] = b))
        : (b = a[12]);
      var v = b,
        S;
      a[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function () {
            u(null);
          }),
          (a[13] = S))
        : (S = a[13]);
      var R = S,
        L;
      if (l) {
        var E;
        (a[14] !== l
          ? ((E = d.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ChatContextMenu",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: R,
              children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: l }),
            })),
            (a[14] = l),
            (a[15] = E))
          : (E = a[15]),
          (L = E));
      }
      var k;
      return (
        a[16] !== v || a[17] !== L
          ? ((k = [L, v]), (a[16] = v), (a[17] = L), (a[18] = k))
          : (k = a[18]),
        k
      );
    }
    l.default = _;
  },
  226,
);
