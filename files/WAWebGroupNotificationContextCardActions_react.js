__d(
  "WAWebGroupNotificationContextCardActions.react",
  [
    "fbt",
    "WAWebAddUserIcon.react",
    "WAWebButton.react",
    "WAWebCommunitySubgroupInviteLinkRestriction",
    "WAWebGroupGatingUtils",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupMemberTagUpdateLogger",
    "WAWebGroupNotificationContextCardActionsUtils",
    "WAWebIcAddCircleIcon.react",
    "WAWebMemberLabelCreateUpdateModal.react",
    "WAWebMemberLabelGating",
    "WAWebMemberLabelHooks",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPencilIcon.react",
    "WAWebWamEnumTsSurface",
    "WDSButtonGroup.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      return u.jsx(
        o("WAWebIcAddCircleIcon.react").IcAddCircleIcon,
        babelHelpers.extends(
          { viewBox: { x: 0, y: 0, width: 24, height: 24 } },
          e,
        ),
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = {
      buttonGroupContainer: {
        minWidth: "x5w4yej",
        columnGap: "xfex06f",
        rowGap: "x3pnbk8",
        $$css: !0,
      },
    };
    function p(e) {
      var t = e.canAddParticipants,
        n = e.chat,
        a = e.groupMetadata,
        i = e.isUnnamed,
        l = e.onAddGroupMembersClick,
        p = e.onAddNameClick,
        _ = e.onGroupInfoClick,
        f = e.onInviteViaLinkClick,
        g = c(
          function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebMemberLabelCreateUpdateModal.react")
                  .MemberLabelCreateUpdateModal,
                {
                  chat: n,
                  entryPoint: o("WAWebGroupMemberTagUpdateLogger")
                    .GroupMemberTagUpdateLogger.ENTRY_POINT.NEW_MEMBER_PROMPT,
                  uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD,
                },
              ),
            );
          },
          [n],
        ),
        h = o("WAWebMemberLabelHooks").useHasSelfMemberLabelForChat(n),
        y = !h && o("WAWebMemberLabelGating").isMemberLabelSenderEnabled(),
        C = o(
          "WAWebCommunitySubgroupInviteLinkRestriction",
        ).isSubgroupInviteLinkRestrictedByParentCommunity(a),
        b = t && !a.support,
        v = a.canSetSubject() && i,
        S =
          a.memberLinkMode ===
            o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK &&
          o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled(),
        R = S && !C,
        L = {
          name: {
            available: v,
            onPress: p,
            icon: o("WAWebPencilIcon.react").PencilIcon,
            testid: "group-notification-context-card-add-name-button",
            label: s._(/*BTDS*/ "Name this group"),
            shadowOnHover: !1,
          },
          addMembers: {
            available: b,
            onPress: l,
            icon: o("WAWebAddUserIcon.react").AddUserIcon,
            testid: "group-notification-context-card-add-members-button",
            label: s._(/*BTDS*/ "Add members"),
          },
          memberTag: {
            available: y,
            onPress: g,
            icon: d,
            testid: "group-notification-context-card-add-member-tag-button",
            label: s._(/*BTDS*/ "Add your member tag"),
          },
          groupInfo: {
            available: !0,
            onPress: _,
            icon: r("WDSIconIcInfo.react"),
            testid: "group-notification-context-card-group-info-button",
            label: s._(/*BTDS*/ "Group info"),
          },
          inviteViaLink: {
            available: R,
            onPress: f != null ? f : r("WAWebNoop"),
            icon: r("WDSIconIcLink.react"),
            testid: "group-notification-context-card-invite-via-link-button",
            label: s._(/*BTDS*/ "Invite via link or QR code"),
            useVerticalLayout: !0,
          },
        },
        E = o(
          "WAWebGroupNotificationContextCardActionsUtils",
        ).getGroupNotificationButtonConfig(L),
        k = E.firstConfig,
        I = E.secondConfig,
        T = E.useVerticalLayout;
      if (I != null) {
        var D = k != null ? k : I,
          x = { variant: "outline", type: "default" },
          $ = T ? [D, I] : [I, D],
          P = $[0],
          N = $[1];
        return u.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: {
                className:
                  "x78zum5 x1q0g3np x1qjc9v5 xl56j7k x1a02dak xyamay9 x5w4yej xfex06f x3pnbk8",
              },
              1: {
                className:
                  "x78zum5 xdt5ytf x6s0dn4 xl56j7k xyamay9 x5w4yej x3pnbk8 xh8yej3",
              },
            }[!!T << 0],
            {
              children: u.jsx(r("WDSButtonGroup.react"), {
                width: T ? "fill" : "hug",
                orientation: "horizontal",
                primaryButtonProps: babelHelpers.extends({}, x, {
                  onPress: P.onPress,
                  Icon: P.icon,
                  testid: P.testid,
                  label: P.label,
                }),
                secondaryButtonProps: babelHelpers.extends({}, x, {
                  onPress: N.onPress,
                  Icon: N.icon,
                  testid: N.testid,
                  label: N.label,
                }),
              }),
            },
          ),
        );
      }
      var M = function (t) {
        return (
          t != null &&
          u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
            onClick: t.onPress,
            icon: t.icon,
            shadowOnHover: t.shadowOnHover,
            testid: void 0,
            children: t.label,
          })
        );
      };
      return u.jsxs(o("WAWebButton.react").ButtonGroup, {
        direction: T ? "vertical" : "horizontal",
        align: "stretch",
        justify: "center",
        wrap: "wrap",
        paddingTop: 16,
        xstyle: m.buttonGroupContainer,
        children: [M(k), M(I)],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.GroupNotificationContextCardActions = p));
  },
  226,
);
