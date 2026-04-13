__d(
  "WAWebGroupNotificationContextCard.react",
  [
    "fbt",
    "WANullthrows",
    "WAUnicodeUtils",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebButton.react",
    "WAWebCameraV2Icon.react",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebConversationSpamUtils",
    "WAWebDetailImage.react",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebExistingGroupPermissionsDrawer.react",
    "WAWebExitIcon.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendChatGetters",
    "WAWebGroupGatingUtils",
    "WAWebGroupInfoPhoto.react",
    "WAWebGroupInviteLinkDrawerLoadable",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupNotificationContextCardActions.react",
    "WAWebGroupProfilePictureWamEvent",
    "WAWebGroupSafetyToolsModal.react",
    "WAWebGroupType",
    "WAWebInfoShieldIcon.react",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "WAWebLinkify",
    "WAWebModalManager",
    "WAWebOpenAddParticipantModalFlow",
    "WAWebPhotoViewerModal.react",
    "WAWebProfilePicThumbCollection",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebSpamConstants",
    "WAWebSuspendedGroupUtils",
    "WAWebText.react",
    "WAWebTrustSignalsUtils",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumGroupProfileActionType",
    "WAWebWamNumberToPreciseSizeBucket",
    "WDSButtonGroup.react",
    "react",
    "react-compiler-runtime",
    "useWAWebAddParticipantsSelectedContacts",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
    "useWAWebForceUpdate",
    "useWAWebGroupParticipantStatus",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = {
        container: {
          textAlign: "x2b8uid",
          maxWidth: "x1rjt51p",
          width: "x16m5f1z",
          $$css: !0,
        },
        descriptionText: { whiteSpace: "xeaf4i8", $$css: !0 },
        editLink: { color: "x1v5yvga", fontWeight: "x1s688f", $$css: !0 },
        breakText: { boxSizing: "x9f619", wordBreak: "x1yn0g08", $$css: !0 },
        paddingTop12: { paddingTop: "x1xrf6ya", $$css: !0 },
        paddingTop4: { paddingTop: "x1tiyuxx", $$css: !0 },
      },
      _ = 70;
    function f(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.chat,
        r = e.msg,
        a,
        i;
      (t[0] !== r.id
        ? ((a = function () {
            o("WAWebCmd").Cmd.groupNotificationContextCardRendered(r.id);
          }),
          (i = [r.id]),
          (t[0] = r.id),
          (t[1] = a),
          (t[2] = i))
        : ((a = t[1]), (i = t[2])),
        m(a, i));
      var l;
      t[3] !== n
        ? ((l = u.jsx(h, { chat: n })), (t[3] = n), (t[4] = l))
        : (l = t[4]);
      var s, c;
      t[5] !== n || t[6] !== r
        ? ((s = u.jsx(y, { chat: n, msg: r })),
          (c = u.jsx(C, { chat: n, msg: r })),
          (t[5] = n),
          (t[6] = r),
          (t[7] = s),
          (t[8] = c))
        : ((s = t[7]), (c = t[8]));
      var d, _;
      t[9] !== n
        ? ((d = u.jsx(b, { chat: n })),
          (_ = u.jsx(v, { chat: n })),
          (t[9] = n),
          (t[10] = d),
          (t[11] = _))
        : ((d = t[10]), (_ = t[11]));
      var f;
      return (
        t[12] !== l || t[13] !== s || t[14] !== c || t[15] !== d || t[16] !== _
          ? ((f = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: p.container,
              align: "center",
              testid: void 0,
              children: [l, s, c, d, _],
            })),
            (t[12] = l),
            (t[13] = s),
            (t[14] = c),
            (t[15] = d),
            (t[16] = _),
            (t[17] = f))
          : (f = t[17]),
        f
      );
    }
    var g = function (t) {
      var e,
        n,
        r,
        a = t == null ? void 0 : t.participants,
        i = (e = a == null ? void 0 : a.length) != null ? e : 0,
        l = (n = t == null ? void 0 : t.size) != null ? n : 0,
        s = a != null && a.iAmAdmin() ? i : l,
        u = o("WAWebWamNumberToPreciseSizeBucket").numberToPreciseSizeBucket(s),
        c = t == null ? void 0 : t.creation,
        d = new Date((c != null ? c : 0) * 1e3),
        m = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d),
        p = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d),
        _ = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d),
        f = c != null ? m + "-" + p + "-" + _ : "",
        g = (r = a == null ? void 0 : a.iAmAdmin()) != null ? r : !1;
      new (o("WAWebGroupProfilePictureWamEvent").GroupProfilePictureWamEvent)({
        groupCreationDs: f,
        groupProfileAction: o("WAWebWamEnumGroupProfileActionType")
          .GROUP_PROFILE_ACTION_TYPE.TAP_ACTION_ITEM_VIEW_PHOTO,
        preciseGroupSizeBucket: u,
        isAdmin: g,
        hasProfilePicture: !0,
      }).commit();
    };
    function h(e) {
      "use no forget";
      var t = e.chat,
        n = o("useWAWebModelValues").useModelValues(t, [
          "id",
          "groupMetadata",
          "contact",
          "trusted",
        ]),
        a = o("useWAWebModelValues").useModelValues(
          r("WANullthrows")(
            t.groupMetadata,
            "Chat groupMetadata is null in ContextCardPhoto",
          ),
          ["size", "creation", "participants"],
        ),
        i = a == null ? void 0 : a.participants,
        l = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(
        i,
        "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin",
        l,
      );
      var s = u.createRef(),
        c = function () {
          g(a);
          var e = s.current;
          if (!(!e || !n.id)) {
            var t = function (n) {
                n(e);
              },
              i = o("WAWebContactCollection").ContactCollection.assertGet(n.id);
            o("WAWebModalManager").ModalManager.openMedia(
              u.jsx(r("WAWebPhotoViewerModal.react"), {
                contact: i,
                profilePicThumb: i.getProfilePicThumb(),
                animateBorderRadius: !0,
                getZoomNode: t,
              }),
              { transition: "profile-viewer" },
            );
          }
        },
        d = r("useWAWebEventTargetValue")(
          o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection,
          ["change:img"],
          function () {
            var e;
            return (
              ((e = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.get(n.id)) == null
                ? void 0
                : e.img) != null
            );
          },
        );
      return d
        ? u.jsx("div", {
            ref: s,
            children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: n.id,
              onClick: c,
              shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
              quality: o("WAWebDetailImage.react").DetailImageQuality.High,
              size: 88,
              showOutline: !0,
              tabIndex: 0,
              testId: "group-notification-context-card-photo",
            }),
          })
        : u.jsx(r("WAWebGroupInfoPhoto.react"), {
            chat: n,
            forceClickable: !0,
            HoverIcon: o("WAWebCameraV2Icon.react").CameraV2Icon,
            showAddIconOverlay: !1,
            size: 88,
            testid: void 0,
            readOnly: !n.trusted,
          });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.chat,
        r = e.msg,
        a;
      e: switch (r.subtype) {
        case "create": {
          var i;
          (t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = s._(/*BTDS*/ "You created this group")), (t[0] = i))
            : (i = t[0]),
            (a = i));
          break e;
        }
        case "add": {
          var l;
          (t[1] !== n || t[2] !== r.author
            ? ((l = r.author
                ? u.jsx(o("WAWebTrustSignalsUtils").AddGroupCardTitle, {
                    chat: n,
                    contactId: r.author,
                  })
                : null),
              (t[1] = n),
              (t[2] = r.author),
              (t[3] = l))
            : (l = t[3]),
            (a = l));
          break e;
        }
        case "invite": {
          var c;
          (t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = s._(/*BTDS*/ "You joined with an invite link")), (t[4] = c))
            : (c = t[4]),
            (a = c));
        }
      }
      var d;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = [p.breakText, p.paddingTop12]), (t[5] = d))
        : (d = t[5]);
      var m;
      return (
        t[6] !== a
          ? ((m = u.jsx(o("WAWebText.react").WAWebTextLarge, {
              xstyle: d,
              weight: "medium",
              testid: void 0,
              children: a,
            })),
            (t[6] = a),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    function C(e) {
      "use no forget";
      var t = e.chat,
        n = e.msg,
        a = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebFrontendChatGetters").getGroupMetadata,
          o("WAWebFrontendChatGetters").getTrusted,
          o("WAWebChatGetters").getIsGroup,
        ]),
        i = a[0],
        l = a[1],
        c = a[2],
        d = o("useWAWebModelValues").useModelValues(
          r("WANullthrows")(
            t.groupMetadata,
            "Chat groupMetadata is null in ContextCardSubtitle",
          ),
          ["groupType", "owner", "participants", "creation", "size"],
        ),
        m = d.participants,
        _ = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(
        m,
        "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin",
        _,
      );
      var f = d.groupType,
        g = s._(/*BTDS*/ "Group");
      f === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
        (g = s._(/*BTDS*/ "Announcements"));
      var h = o("WAWebTrustSignalsUtils").numberOfMembers(d),
        y = o("WAWebTrustSignalsUtils").useCreatedAt(t, n.author),
        C;
      n.subtype === "create" ? d.isSuspendedOrTerminated() || (C = h) : (C = y);
      var b = u.jsxs(u.Fragment, {
          children: [
            !l &&
              u.jsxs(u.Fragment, {
                children: [
                  s._(/*BTDS*/ "Added by non-contact"),
                  r("WAWebL10N").isRTL() ? " -\xA0" : " \xB7\xA0",
                ],
              }),
            g,
            C != null &&
              u.jsxs(u.Fragment, {
                children: [r("WAWebL10N").isRTL() ? " -\xA0" : " \xB7\xA0", C],
              }),
          ],
        }),
        v = h;
      return (
        (b = u.jsxs(u.Fragment, {
          children: [
            v != null && u.jsxs(u.Fragment, { children: [h, " \xB7\xA0"] }),
            o("WAWebTrustSignalsUtils").numberOfContacts(m),
            y != null && u.jsxs(u.Fragment, { children: [" \xB7\xA0", y] }),
          ],
        })),
        u.jsx(o("WAWebText.react").WAWebTextSmall, {
          color: "secondaryLighter",
          testid: void 0,
          xstyle: [p.breakText, p.paddingTop4],
          children: b,
        })
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t,
        n,
        a = e.chat,
        i = o("useWAWebModelValues").useModelValues(a, [
          "groupMetadata",
          "trusted",
        ]),
        l = o("useWAWebModelValues").useModelValues(
          r("WANullthrows")(
            i.groupMetadata,
            "Chat groupMetadata is null in ContextCardDescription",
          ),
          ["displayedDesc", "memberLinkMode", "participants"],
        ),
        c =
          (t = (n = l.participants) == null ? void 0 : n.iAmAdmin()) != null
            ? t
            : !1,
        m = r("useWAWebEventTargetValue")(l, ["change:desc"], function () {
          return l.displayedDesc;
        }),
        f = d(
          function () {
            (o("WAWebCmd").Cmd.editGroupDescription(),
              o("WAWebCmd").Cmd.chatInfoDrawer(a, {
                focusGroupDescriptionOnMount: !0,
              }));
          },
          [a],
        ),
        g = d(
          function () {
            o("WAWebCmd").Cmd.chatInfoDrawer(a);
          },
          [a],
        ),
        h = d(
          function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? {
                    descriptorType: "existing_group_permissions",
                    chat: a,
                    groupMetadata: r("WANullthrows")(a.groupMetadata),
                  }
                : u.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
                    chat: a,
                    groupMetadata: r("WANullthrows")(a.groupMetadata),
                    onClose: o("WAWebDrawerManager").closeDrawerRight,
                  }),
              {
                transition: "slide-left",
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            );
          },
          [a],
        ),
        y =
          l.memberLinkMode ===
            o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK &&
          o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled();
      if (!m && l.canSetDescription())
        return i.trusted
          ? y && c
            ? u.jsx("div", {
                className: "x1nxh6w3 xcgms0a x9f619 x1yn0g08 x1xrf6ya",
                children: u.jsx(o("WAWebText.react").WAWebTextSmall, {
                  testid: void 0,
                  children: s._(
                    /*BTDS*/ "Members can add people or invite them using a link. {edit_link}",
                    [
                      s._param(
                        "edit_link",
                        u.jsx(r("WAWebUnstyledButton.react"), {
                          onClick: h,
                          xstyle: p.editLink,
                          children: s._(/*BTDS*/ "Edit"),
                        }),
                      ),
                    ],
                  ),
                }),
              })
            : u.jsx("div", {
                className: "x1nxh6w3 xcgms0a x9f619 x1yn0g08 x1xrf6ya",
                children: u.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
                  onClick: f,
                  testid: void 0,
                  children: u.jsx("span", {
                    className: "xdx6fka xvtqlqk",
                    children: s._(/*BTDS*/ "Add description..."),
                  }),
                }),
              })
          : null;
      var C = o("WAUnicodeUtils").numCodepoints(m) > _;
      return u.jsxs("div", {
        className: "x1nxh6w3 xcgms0a x9f619 x1yn0g08 x1xrf6ya",
        children: [
          u.jsx(o("WAWebEmojiText.react").EmojiText, {
            xstyle: p.descriptionText,
            testid: void 0,
            text: m,
            textLimit: _,
            ellipsify: !0,
            direction: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
            inferLinesDirection: !0,
            selectable: !0,
            emojiSize: o("WAWebEmojiText.react").EMOJI_SIZE.SMALL,
            formatters: i.trusted
              ? o("WAWebFormatConfiguration").TrustedGroupDesc({
                  links: o("WAWebLinkify").findLinks(m),
                  bulletPointsEnabled: !1,
                })
              : o("WAWebFormatConfiguration").UntrustedGroupDesc({
                  bulletPointsEnabled: !1,
                }),
          }),
          C &&
            u.jsxs(u.Fragment, {
              children: [
                " ",
                u.jsx(r("WAWebUnstyledButton.react"), {
                  onClick: g,
                  children: u.jsx("span", {
                    className: "x1xtgsr3 x1s688f",
                    children: s._(/*BTDS*/ "More"),
                  }),
                }),
              ],
            }),
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.chat,
        n = o("useWAWebModelValues").useModelValues(t, [
          "groupMetadata",
          "trusted",
        ]),
        a = o("useWAWebModelValues").useModelValues(
          r("WANullthrows")(
            n.groupMetadata,
            "Chat groupMetadata is null in ContextCardActions",
          ),
          [
            "isUnnamed",
            "groupType",
            "participants",
            "support",
            "memberLinkMode",
          ],
        ),
        i = r("useWAWebEventTargetValue")(a, ["change:subject"], function () {
          return a.isUnnamed;
        }),
        l = r("useWAWebGroupParticipantStatus")(a),
        c = l[0],
        m = d(
          function () {
            (o("WAWebCmd").Cmd.editGroupSubject(),
              o("WAWebCmd").Cmd.chatInfoDrawer(t, {
                focusGroupSubjectOnMount: !0,
              }));
          },
          [t],
        ),
        p = d(
          function () {
            o("WAWebCmd").Cmd.chatInfoDrawer(t);
          },
          [t],
        ),
        _ = d(
          function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              u.jsx(
                o("WAWebGroupInviteLinkDrawerLoadable")
                  .GroupInviteLinkDrawerLoadable,
                {
                  chat: t,
                  groupMetadata: r("WANullthrows")(n.groupMetadata),
                  onBack: o("WAWebDrawerManager").closeDrawerRight,
                  onGroupSettings: function () {
                    return o(
                      "WAWebDrawerManager",
                    ).DrawerManager.openDrawerRight(
                      o(
                        "WAWebAdaptiveLayoutGatingUtils",
                      ).shouldUseDrawerDescriptor()
                        ? {
                            descriptorType: "existing_group_permissions",
                            chat: t,
                            groupMetadata: r("WANullthrows")(n.groupMetadata),
                          }
                        : u.jsx(
                            r("WAWebExistingGroupPermissionsDrawer.react"),
                            {
                              chat: t,
                              groupMetadata: r("WANullthrows")(n.groupMetadata),
                              onClose: o("WAWebDrawerManager").closeDrawerRight,
                            },
                          ),
                    );
                  },
                },
              ),
            );
          },
          [t, n.groupMetadata],
        ),
        f = r("useWAWebAddParticipantsSelectedContacts")(),
        g = f.handleClearSelectedContacts,
        h = f.selectedContactsMap,
        y = f.updateSelectedContactsState;
      if (n.isTrusted()) {
        var C = function () {
          var e;
          if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebReachoutTimelockRestrictedModalLoadable")
                  .ReachoutTimelockRestrictedModalLoadable,
                {},
              ),
            );
            return;
          }
          var n =
            (e = a.getParentGroupChat()) == null ? void 0 : e.formattedTitle;
          o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
            groupMetadata: a,
            chat: t,
            communityName: n,
            selectedContactsMap: h,
            updateSelectedContactsState: y,
            reopenAddGroupFlowCallback: C,
            handleClearSelectedContacts: g,
          });
        };
        return u.jsx(
          o("WAWebGroupNotificationContextCardActions.react")
            .GroupNotificationContextCardActions,
          {
            chat: t,
            groupMetadata: a,
            isUnnamed: i,
            canAddParticipants: c,
            onAddNameClick: m,
            onAddGroupMembersClick: C,
            onGroupInfoClick: p,
            onInviteViaLinkClick: _,
          },
        );
      }
      var b = function () {
          o("WAWebGroupSafetyToolsModal.react").displayGroupSafetyToolsModal();
        },
        v = function () {
          o("WAWebSuspendedGroupUtils").openLeaveAndReportGroupModal(
            t,
            o("WAWebSpamConstants").SpamFlow.GroupFmxCardLeave,
          );
        },
        S = function () {
          o("WAWebConversationSpamUtils").acknowledgeGroupAsNotSpam(t);
        },
        R = u.jsxs(o("WAWebButton.react").WAWebButtonSecondaryDestructive, {
          onClick: v,
          nowrap: !1,
          testid: void 0,
          children: [
            u.jsx(o("WAWebExitIcon.react").ExitIcon, { directional: !0 }),
            r("WAWebFbtCommon")("Exit Group"),
          ],
        }),
        L = !n.trusted,
        E = L
          ? u.jsx(r("WDSButtonGroup.react"), {
              orientation: "horizontal",
              primaryButtonProps: {
                variant: "outline",
                type: "default",
                onPress: S,
                testid: "group-notification-context-card-stay-group-button",
                label: s._(/*BTDS*/ "Stay"),
              },
              secondaryButtonProps: {
                variant: "outline",
                type: "destructive",
                onPress: v,
                testid: "group-notification-context-card-leave-group-button",
                Icon: o("WAWebExitIcon.react").ExitIcon,
                directional: !0,
                label: r("WAWebFbtCommon")("Exit Group"),
              },
            })
          : R;
      return u.jsxs(o("WAWebButton.react").ButtonGroup, {
        direction: "vertical",
        align: "center",
        paddingTop: 12,
        style: { minWidth: 160 },
        children: [
          u.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
            onClick: b,
            icon: o("WAWebInfoShieldIcon.react").InfoShieldIcon,
            testid: void 0,
            children: s._(/*BTDS*/ "Safety tools"),
          }),
          E,
        ],
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
