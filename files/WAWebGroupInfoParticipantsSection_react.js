__d(
  "WAWebGroupInfoParticipantsSection.react",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebAddUserIcon.react",
    "WAWebBotFrontendUtils",
    "WAWebBotUtils",
    "WAWebBulkAddContactsModal.react",
    "WAWebCellFrame.react",
    "WAWebCellV2.react",
    "WAWebChatGroupUtils",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatInfoExpandButton.react",
    "WAWebChatParticipant.react",
    "WAWebChatParticipantUtils.react",
    "WAWebClearRefreshedIcon.react",
    "WAWebCommunitySubgroupInviteLinkRestriction",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebContactEditUtils",
    "WAWebContactGetters",
    "WAWebContactLogging",
    "WAWebContactManagementGating",
    "WAWebContactUtils",
    "WAWebContactsIcon.react",
    "WAWebDomScroll",
    "WAWebDropdownItem.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFlatList.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebGroupConstants",
    "WAWebGroupGatingUtils",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupMemberTagUpdateLogger",
    "WAWebGroupParticipantsFlow.react",
    "WAWebGroupType",
    "WAWebListButton.react",
    "WAWebMemberLabelCreateUpdateModal.react",
    "WAWebMemberLabelsFrontendUtils",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebNavigableFlatList.react",
    "WAWebNumbersIcon.react",
    "WAWebOpenCommunityParticipantDemoteConfirmation",
    "WAWebOpenCommunityParticipantPromoteConfirmation",
    "WAWebParticipantListUtils",
    "WAWebPendingParticipantsIcon.react",
    "WAWebPersonShieldCheckIcon.react",
    "WAWebPersonShieldRemoveIcon.react",
    "WAWebRemoveFromCommunityConfirmationPopup.react",
    "WAWebRoundShape.react",
    "WAWebSingleSelection",
    "WAWebTag.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUseShowPastParticipants",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WDSIconIcEdit.react",
    "WDSIconIcLink.react",
    "WDSIconIcPersonAddFilled.react",
    "WDSIconIcSearch.react",
    "react",
    "useLazyRef",
    "useWAWebEventTargetValue",
    "useWAWebForceUpdate",
    "useWAWebGroupParticipantStatus",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useImperativeHandle,
      _ = d.useMemo,
      f = d.useRef,
      g = d.useState,
      h = 20,
      y = {
        pendingParticipantsIcon: {
          backgroundColor: "xp0d2wq",
          color: "xhslqc4",
          $$css: !0,
        },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        iconContainerRefreshed: {
          height: "x1vqgdyp",
          width: "x100vrsf",
          $$css: !0,
        },
        flatListRefreshed: { backgroundColor: "xjbqb8w", $$css: !0 },
      };
    function C(t) {
      var n = t.active,
        a = t.contextMenu,
        i = t.data,
        l = t.elevatedPushNamesEnabled,
        s = l === void 0 ? !1 : l,
        u = t.handleParticipantClick,
        d = t.handleParticipantMenu,
        m = t.menuEnabled,
        p = t.participants,
        _ = t.showMemberLabel,
        f = _ === void 0 ? !1 : _,
        g = t.sourceChat,
        h = i.id,
        y = p.get(h);
      if (!y)
        throw (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "UnknownDataError: WAWebGroupInfoParticipantsSection",
              ])),
          ),
          new (o("WAWebFlatList.react").UnknownDataError)(i)
        );
      var C = y.contact,
        b = !!a && r("WAWebWid").equals(C.id, a.contactId),
        v = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(C.id),
        S = v
          ? o("WAWebBotFrontendUtils").getMetaAiTEEBotDisplayName(C.id, {
              includePrivateProcessing: !0,
            })
          : void 0;
      return c.jsx(
        r("WAWebChatParticipant.react"),
        {
          active: n,
          contact: C,
          contextEnabled: function () {
            return m(C);
          },
          contextMenu: b,
          elevatedPushNamesEnabled: s,
          nameOverride: S,
          showTeeLockBadge: v,
          onClick: function (t) {
            var e = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(
              C.id,
              "group_info_participant_section_click",
            );
            e != null &&
              (u == null ||
                u(t, o("WAWebContactCollection").ContactCollection.gadd(e)));
          },
          onContext: function (t) {
            return d(t, C);
          },
          participant: y,
          participantCollection: p,
          showMemberLabel: f,
          showNotifyName: !0,
          showStatusRingAroundProfilePhoto: !0,
          sourceChat: g,
          theme: "refresh",
          truncateName: !0,
          waitIdle: !0,
        },
        y.id.toString(),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      "use no forget";
      var t,
        n = e.chat,
        a = e.flatListController,
        i = e.onAddParticipant,
        l = e.onGroupInviteLink,
        u = e.onOpenParticipantSearch,
        d = e.onParticipantClick,
        b = e.onPendingParticipants,
        S = e.onVerification,
        R = e.ref,
        L = e.scrollToParticipantList,
        E = o("useWAWebModelValues").useModelValues(
          r("WANullthrows")(n.groupMetadata),
          [
            "support",
            "size",
            "id",
            "membershipApprovalMode",
            "membershipApprovalRequests",
            "memberLinkMode",
            "isUnnamed",
            "isLidAddressingMode",
            "participants",
            "hasCapi",
          ],
        ),
        k = E.memberLinkMode,
        I = E.membershipApprovalMode,
        T = E.membershipApprovalRequests,
        D = o("WAWebMemberLabelsFrontendUtils").shouldShowMemberLabelForChat(n),
        x = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        $ = r("WANullthrows")(n.groupMetadata).participants,
        P = $.toArray();
      E.isLidAddressingMode !== !0 &&
        (P = $.filter(function (e) {
          var t = e.id;
          return o("WAWebUserPrefsMeUser").isMeAccount(t) || !t.isLid();
        }));
      var N = o("WAWebChatGroupUtils").getGroupParticipantsCount(E),
        M = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(
        $,
        "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin",
        M,
      );
      var w = g(!0),
        A = w[0],
        F = w[1],
        O = f(),
        B = g(),
        W = B[0],
        q = B[1],
        U = o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n);
      (m(
        function () {
          L &&
            O.current &&
            o("WAWebDomScroll").scrollIntoViewIfNeeded(O.current, !1);
        },
        [L],
      ),
        p(R, function () {
          return {
            scrollIntoView: function () {
              var e;
              (e = O.current) == null || e.scrollIntoView();
            },
          };
        }));
      var V = r("useWAWebGroupParticipantStatus")(E),
        H = V[0],
        G = V[1],
        z = r("useWAWebEventTargetValue")(
          T,
          ["add", "remove", "reset"],
          function () {
            return T.length;
          },
        ),
        j = o("WAWebUseShowPastParticipants").useShowPastParticipants(n),
        K = $.iAmMember(),
        Q = $.iAmAdmin(),
        X = _(
          function () {
            var e,
              t = [],
              r = [];
            P.forEach(function (n) {
              (!K && !n.isAdmin) ||
                (o("WAWebContactGetters").getIsMe(n.contact)
                  ? (e = n)
                  : n.isAdmin
                    ? t.push(n)
                    : r.push(n));
            });
            var a = [];
            return (
              e && a.push(e),
              (a = a.concat(t, r)),
              v(P) &&
                A &&
                (a = a.slice(
                  0,
                  o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS,
                )),
              x.current.init(
                a.map(function (e) {
                  return e.contact;
                }),
              ),
              a.map(function (e) {
                return {
                  itemKey: e.id.toString(),
                  id: e.id,
                  height: o(
                    "WAWebChatParticipantUtils.react",
                  ).getParticipantItemHeight({
                    contact: e.contact,
                    showMemberLabel: D,
                    chat: n,
                    groupMetadata: E,
                  }),
                };
              })
            );
          },
          [A, P],
        );
      if (E.isSuspendedOrTerminated()) return null;
      var Y = r("WDSIconIcSearch.react"),
        J = c.jsx(Y, { iconXstyle: y.secondaryColor });
      J = c.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "center",
        xstyle: y.iconContainerRefreshed,
        children: J,
      });
      var Z = o(
          "WAWebCommunitySubgroupInviteLinkRestriction",
        ).isSubgroupInviteLinkRestrictedByParentCommunity(E),
        ee;
      if (H && !E.support) {
        var te = r("WDSIconIcPersonAddFilled.react"),
          ne = c.jsx(r("WAWebRoundShape.react"), {
            theme: "group-modal",
            children: c.jsx(te, { directional: !0 }),
          }),
          re = s._(/*BTDS*/ "Add member");
        ee = c.jsx(r("WAWebCellV2.react"), {
          detailLeft: ne,
          isRefresh: !0,
          onClick: i,
          primary: c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            children: re,
          }),
          size: "medium",
          testid: void 0,
        });
      }
      var oe;
      if (
        !E.support &&
        l &&
        !Z &&
        (Q ||
          (K &&
            k ===
              o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK &&
            o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsEnabled()))
      ) {
        var ae = r("WDSIconIcLink.react"),
          ie = c.jsx(r("WAWebRoundShape.react"), {
            theme: "group-modal",
            children: c.jsx(ae, { testid: void 0 }),
          }),
          le = s._(/*BTDS*/ "Invite to group via link");
        oe = c.jsx(r("WAWebCellV2.react"), {
          detailLeft: ie,
          isRefresh: !0,
          onClick: l,
          primary: c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            children: le,
          }),
          size: "medium",
        });
      }
      var se;
      if (
        o("WAWebContactManagementGating").bulkAddContactsFromGroupsEnabled() &&
        !E.support &&
        K &&
        $.length <= o("WAWebGroupConstants").MAX_GROUP_SIZE_FOR_BULK_ADD
      ) {
        var ue = c.jsx(r("WAWebRoundShape.react"), {
          theme: "group-modal",
          children: c.jsx(o("WAWebContactsIcon.react").ContactsIcon, {}),
        });
        se = c.jsx(r("WAWebCellV2.react"), {
          testid: void 0,
          detailLeft: ue,
          primary: c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            children: s._(/*BTDS*/ "Add members to contacts"),
          }),
          onClick: function () {
            return o(
              "WAWebBulkAddContactsModal.react",
            ).openBulkAddContactsModal(n);
          },
          size: "medium",
          isRefresh: !0,
        });
      }
      var ce;
      I &&
        z > 0 &&
        (G || Q) &&
        (ce = c.jsx(r("WAWebCellFrame.react"), {
          focusable: !0,
          image: c.jsx(r("WAWebRoundShape.react"), {
            theme: "compact",
            xstyle: y.pendingParticipantsIcon,
            children: c.jsx(
              o("WAWebPendingParticipantsIcon.react").PendingParticipantsIcon,
              {},
            ),
          }),
          onClick: b,
          primary: s._(/*BTDS*/ "Pending requests"),
          primaryDetail: c.jsx(o("WAWebTag.react").Tag, {
            round: !0,
            children: z,
          }),
          theme: "chat-info",
        }));
      var de;
      if (v(P) && A) {
        var me = P.length <= h,
          pe =
            P.length -
            o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS,
          _e = function () {
            me
              ? F(!1)
              : u(
                  o("WAWebGroupParticipantsFlow.react").ParticipantsFlowStep
                    .Participants,
                );
          };
        de = c.jsx(r("WAWebChatInfoExpandButton.react"), {
          numMore: pe,
          onClick: _e,
          viewAll: !me,
        });
      } else if (j) {
        var fe = function () {
          u(
            o("WAWebGroupParticipantsFlow.react").ParticipantsFlowStep
              .PastParticipants,
          );
        };
        de = c.jsx(o("WAWebListButton.react").ListButton, {
          onClick: fe,
          testid: void 0,
          children: s._(/*BTDS*/ "View past members"),
        });
      }
      var ge = function (t) {
          return (
            o("WAWebContactUtils").canSaveAsMyContact(t.id) &&
            !o("WAWebFrontendContactGetters").getIsMyContact(t) &&
            !o("WAWebContactGetters").getIsMe(t) &&
            o("WAWebContactManagementGating").contactManagementEnabled() &&
            o("WAWebContactManagementGating").addContactGroupMemberEnabled()
          );
        },
        he = function (t) {
          var e = $.get(t.id);
          if (!e) return !1;
          var r = o("WAWebMemberLabelsFrontendUtils").canEditMemberLabel(t, n);
          return (
            $.canPromote(e) ||
            $.canDemote(e) ||
            $.canRemove(e) ||
            $.canVerifyIdentity(e) ||
            r ||
            ge(t)
          );
        },
        ye = function (t, a) {
          var e = $.assertGet(a.id);
          if (he(a)) {
            var i = [],
              l = n.contact.name;
            E.isUnnamed &&
              (l = o("WAWebParticipantListUtils")
                .calculateUnnamedGroupParticipantsList(E)
                .toLocaleString());
            var u = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.contact.id)
              ? o("WAWebBotFrontendUtils").getMetaAiTEEBotDisplayName(
                  e.contact.id,
                  { includePrivateProcessing: !0 },
                )
              : o("WAWebFrontendContactGetters").getFormattedName(e.contact);
            if (
              (ge(a) &&
                i.push(
                  c.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    {
                      action: function () {
                        return o("WAWebContactEditUtils").openContactEditDrawer(
                          o("WAWebContactUtils").getContactDataFromContactModel(
                            a,
                          ),
                          o("WAWebContactLogging").ContactSourceType
                            .GroupMemberInfo,
                        );
                      },
                      icon: c.jsx(o("WAWebAddUserIcon.react").AddUserIcon, {}),
                      testid: void 0,
                      children: s._(/*BTDS*/ "Add contact"),
                    },
                    "add-contact",
                  ),
                ),
              $.canPromote(e))
            ) {
              var d = function () {
                  var t = s._(
                      /*BTDS*/ 'Make {member} an admin for "{subject}" group?',
                      [s._param("member", u), s._param("subject", l)],
                    ),
                    r = function (r) {
                      if (e.isAdmin) {
                        r && o("WAWebModalManager").ModalManager.close();
                        return;
                      }
                      (e.contact.pendingAction++,
                        o("WAWebModifyParticipantsGroupAction")
                          .promoteParticipants(n, [e])
                          .finally(function () {
                            e.contact.pendingAction--;
                          }),
                        r && o("WAWebModalManager").ModalManager.close());
                    };
                  o("WAWebModalManager").ModalManager.open(
                    c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      cancelText: s._(/*BTDS*/ "Cancel"),
                      okText: s._(/*BTDS*/ "Make group admin"),
                      onCancel: function () {
                        return o("WAWebModalManager").ModalManager.close();
                      },
                      onOK: function () {
                        return r(!0);
                      },
                      children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: t,
                      }),
                    }),
                  );
                },
                m = c.jsx(
                  o("WAWebPersonShieldCheckIcon.react").PersonShieldCheckIcon,
                  {},
                ),
                p;
              if (U) {
                var _;
                p = s._(/*BTDS*/ "Make admin");
                var f =
                  (_ = n.groupMetadata) == null
                    ? void 0
                    : _.getParentGroupChat();
                i.push(
                  c.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    {
                      action: function () {
                        o(
                          "WAWebOpenCommunityParticipantPromoteConfirmation",
                        ).openCommunityParticipantPromoteConfirmation(
                          f,
                          e,
                          $,
                          e.contact,
                        );
                      },
                      icon: m,
                      testid: void 0,
                      children: p,
                    },
                    "promote",
                  ),
                );
              } else
                ((p = s._(/*BTDS*/ "Make group admin")),
                  i.push(
                    c.jsx(
                      o("WAWebDropdownItem.react").DropdownItem,
                      { action: d, icon: m, testid: void 0, children: p },
                      "promote",
                    ),
                  ));
            }
            if ($.canRemove(e)) {
              var g = function () {
                  var t,
                    i =
                      (t = n.groupMetadata) == null
                        ? void 0
                        : t.getParentGroupChat();
                  if (U === !0 && i != null) {
                    o("WAWebModalManager").ModalManager.open(
                      c.jsx(
                        r("WAWebRemoveFromCommunityConfirmationPopup.react"),
                        { contact: a, parentGroupChat: i },
                      ),
                    );
                    return;
                  }
                  var d = s._(
                      /*BTDS*/ 'Remove {member} from "{subject}" group?',
                      [s._param("member", u), s._param("subject", l)],
                    ),
                    m = function (r) {
                      (e.contact.pendingAction++,
                        o("WAWebModifyParticipantsGroupAction")
                          .removeParticipants(n, [e])
                          .finally(function () {
                            e.contact.pendingAction--;
                          }),
                        r && o("WAWebModalManager").ModalManager.close());
                    };
                  o("WAWebModalManager").ModalManager.open(
                    c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      cancelText: s._(/*BTDS*/ "Cancel"),
                      okText: s._(/*BTDS*/ "Remove"),
                      onCancel: function () {
                        return o("WAWebModalManager").ModalManager.close();
                      },
                      onOK: function () {
                        return m(!0);
                      },
                      children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: d,
                      }),
                    }),
                  );
                },
                h;
              (U === !0
                ? (h = s._(/*BTDS*/ "Remove from community"))
                : (h = s._(/*BTDS*/ "Remove")),
                i.push(
                  c.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    {
                      action: g,
                      icon: c.jsx(
                        o("WAWebClearRefreshedIcon.react").ClearRefreshedIcon,
                        {},
                      ),
                      testid: void 0,
                      children: h,
                    },
                    "remove",
                  ),
                ));
            }
            if ($.canDemote(e)) {
              var y = function () {
                  e.isAdmin &&
                    (e.contact.pendingAction++,
                    o("WAWebModifyParticipantsGroupAction")
                      .demoteParticipants(n, [e])
                      .finally(function () {
                        e.contact.pendingAction--;
                      }));
                },
                C = s._(/*BTDS*/ "Dismiss as admin"),
                b = c.jsx(
                  o("WAWebPersonShieldRemoveIcon.react").PersonShieldRemoveIcon,
                  {},
                );
              if (U) {
                var v,
                  R =
                    (v = n.groupMetadata) == null
                      ? void 0
                      : v.getParentGroupChat();
                i.push(
                  c.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    {
                      action: function () {
                        return o(
                          "WAWebOpenCommunityParticipantDemoteConfirmation",
                        ).openCommunityParticipantDemoteConfirmation(e, R);
                      },
                      icon: b,
                      testid: void 0,
                      children: C,
                    },
                    "demote-admin",
                  ),
                );
              } else
                i.push(
                  c.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    { action: y, icon: b, testid: void 0, children: C },
                    "demote-admin",
                  ),
                );
            }
            if ($.canVerifyIdentity(e)) {
              var L = function () {
                  S && S(e.contact);
                },
                k = s._(/*BTDS*/ "Verify security code");
              i.push(
                c.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    action: L,
                    icon: c.jsx(o("WAWebNumbersIcon.react").NumbersIcon, {}),
                    testid: void 0,
                    children: k,
                  },
                  "verify-identity",
                ),
              );
            }
            if (o("WAWebMemberLabelsFrontendUtils").canEditMemberLabel(a, n)) {
              var I = function () {
                o("WAWebModalManager").ModalManager.open(
                  c.jsx(
                    o("WAWebMemberLabelCreateUpdateModal.react")
                      .MemberLabelCreateUpdateModal,
                    {
                      chat: n,
                      entryPoint: o("WAWebGroupMemberTagUpdateLogger")
                        .GroupMemberTagUpdateLogger.ENTRY_POINT.MEMBER_LIST,
                    },
                  ),
                );
              };
              i.push(
                c.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    action: I,
                    icon: c.jsx(r("WDSIconIcEdit.react"), {}),
                    testid: void 0,
                    children: s._(/*BTDS*/ "Edit member tag"),
                  },
                  "edit-member-label",
                ),
              );
            }
            q({ contactId: a.id, menu: i, anchor: t.anchor, event: t.event });
          }
        },
        Ce = function () {
          u(
            o("WAWebGroupParticipantsFlow.react").ParticipantsFlowStep
              .Participants,
          );
        },
        be = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(n),
        ve =
          ((t = n.groupMetadata) == null ? void 0 : t.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            ? N
            : $.length,
        Se = s._(
          /*BTDS*/ '_j{"*":"Members list: {group-participants} members","_1":"Members list: 1 member"}',
          [s._plural(ve, "group-participants")],
        ),
        Re = s._(/*BTDS*/ '_j{"*":"{number} members","_1":"1 member"}', [
          s._plural(ve, "number"),
        ]),
        Le = s._(/*BTDS*/ "{existing_visible_text}. Search members", [
          s._param("existing_visible_text", Re),
        ]),
        Ee = $.length
          ? c.jsxs(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection,
              {
                "aria-label": Le,
                ref: O,
                subtitle: J,
                testid: void 0,
                theme: "refresh-new",
                title: Re,
                titleOnClick: Ce,
                titleTestId: "section-participants",
                titleXStyle: o("WAWebUISpacing").uiPadding.horiz20,
                xstyle: o("WAWebUISpacing").uiPadding.all0,
                children: [
                  ee,
                  oe,
                  se,
                  ce,
                  c.jsx(r("WAWebNavigableFlatList.react"), {
                    ariaLabel: Se,
                    flatListController: a,
                    listData: X,
                    onRenderItem: function (t) {
                      return c.jsx(C, {
                        active: x.current,
                        contextMenu: W,
                        data: t,
                        elevatedPushNamesEnabled: be,
                        handleParticipantClick: d,
                        handleParticipantMenu: ye,
                        menuEnabled: he,
                        participants: $,
                        showMemberLabel: D,
                        sourceChat: n,
                      });
                    },
                    rotateList: !0,
                    selection: x.current,
                    xstyle: y.flatListRefreshed,
                  }),
                  de,
                ],
              },
            )
          : null,
        ke = function () {
          q(null);
        },
        Ie;
      return (
        W &&
          (Ie = c.jsx(o("WAWebUimUie.react").UIE, {
            dismissOnWindowResize: !0,
            displayName: "ChatContextMenu",
            escapable: !0,
            popable: !0,
            requestDismiss: ke,
            children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: W }),
          })),
        c.jsxs(c.Fragment, { children: [Ee, Ie] })
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      return (
        e.length >
        o("WAWebChatInfoDrawerSection.react")
          .INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
      );
    }
    l.default = b;
  },
  226,
);
