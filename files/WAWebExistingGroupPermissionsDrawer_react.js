__d(
  "WAWebExistingGroupPermissionsDrawer.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChatRefreshedIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebFaqUrl",
    "WAWebFbtIntlList",
    "WAWebGroupConstants",
    "WAWebGroupGatingUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupLinkResetConfirmationModal.react",
    "WAWebGroupManageAdminModal",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupSettingsConfirmation",
    "WAWebGroupType",
    "WAWebMessageReportRefreshedIcon.react",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebParticipantListUtils",
    "WAWebPencilRefreshedIcon.react",
    "WAWebPersonClockIcon.react",
    "WAWebPersonGearIcon.react",
    "WAWebPinMsgGatingUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebSetPropertyGroupAction",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSIconIcGroupAdd.react",
    "WDSIconIcLink.react",
    "WDSSwitch.react",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebChatValues",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        sectionHeaderRefreshed: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          height: "x1vqgdyp",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
      };
    function p(e) {
      var t = e.chat,
        a = e.groupMetadata,
        i = e.icon,
        l = e.onConfirm,
        s = e.onValidateChange,
        u = e.secondaryTitle,
        m = e.settingType,
        p = e.title,
        _ = function () {
          switch (m) {
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT:
              return a.announce !== !0;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT:
              return a.restrict !== !0;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE
              .NO_FREQUENTLY_FORWARDED:
              return a.noFrequentlyForwarded !== !0;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE
              .MEMBERSHIP_APPROVAL_MODE:
              return a.membershipApprovalMode === !0;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE
              .REPORT_TO_ADMIN_MODE:
              return a.reportToAdminMode === !0;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE:
              return (
                a.memberAddMode ===
                o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD
              );
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE:
              return (
                a.memberLinkMode ===
                o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK
              );
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE
              .MEMBER_SHARE_GROUP_HISTORY_MODE:
              return (
                a.memberShareGroupHistoryMode ===
                o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode
                  .ALL_MEMBER_SHARE
              );
          }
          return !1;
        },
        f = d(function () {
          return _();
        }),
        g = f[0],
        h = f[1];
      o("useWAWebListener").useListener(
        a,
        [
          "change:restrict",
          "change:announce",
          "change:noFrequentlyForwarded",
          "change:membershipApprovalMode",
          "change:memberAddMode",
          "change:reportToAdminMode",
          "change:memberLinkMode",
          "change:memberShareGroupHistoryMode",
        ],
        function () {
          return h(_());
        },
      );
      var y = function (t) {
          switch (m) {
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT:
              return t ? 0 : 1;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT:
              return t ? 0 : 1;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE
              .NO_FREQUENTLY_FORWARDED:
              return t ? 0 : 1;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE
              .MEMBERSHIP_APPROVAL_MODE:
              return t ? 1 : 0;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE
              .REPORT_TO_ADMIN_MODE:
              return t ? 1 : 0;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE:
              return t ? 1 : 0;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE:
              return t ? 1 : 0;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE
              .MEMBER_SHARE_GROUP_HISTORY_MODE:
              return t ? 1 : 0;
          }
          return 0;
        },
        C = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = !g;
            (s == null || (yield s(e))) &&
              (yield o("WAWebSetPropertyGroupAction").setGroupProperty(
                t,
                m,
                y(e),
              ));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        b = function () {
          l
            ? l(function () {
                return void C();
              })
            : C();
        },
        v = c.jsx(r("WDSSwitch.react"), {
          "aria-label": p,
          value: g,
          onChange: b,
        });
      return c.jsx(
        o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
        {
          icon: i,
          side: v,
          title: c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            children: p,
          }),
          secondaryTitle: c.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
            children: u,
          }),
        },
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n = t.title;
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            m.sectionHeaderRefreshed,
            o("WAWebUISpacing").uiPadding.horiz30,
          ),
          {
            children: c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
              color: "wdsContentDeemphasized",
              children: n,
            }),
          },
        ),
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.groupMetadata,
        n = d(o("WAWebParticipantListUtils").calculateAdminsList(t)),
        a = n[0],
        i = n[1];
      o("useWAWebListener").useListener(
        t.participants,
        "change:isAdmin",
        function () {
          return i(o("WAWebParticipantListUtils").calculateAdminsList(t));
        },
      );
      var l = r("WAWebFbtIntlList")(
          a,
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ),
        s = c.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: l,
          ellipsify: !0,
        });
      return c.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
        children: s,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.chat,
        a = e.groupLinkingFlow,
        i = e.groupMetadata,
        l = e.onClose,
        u = e.ref,
        d = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebChatGetters").getId,
          o("WAWebChatGetters").getIsNewsletter,
        ]),
        m = d[0],
        g = d[1],
        h = o("useWAWebModelValues").useModelValues(i, [
          "restrict",
          "announce",
          "noFrequentlyForwarded",
          "participants",
          "owner",
          "groupType",
          "isParentGroup",
          "membershipApprovalMode",
          "reportToAdminMode",
          "memberAddMode",
          "memberLinkMode",
          "membershipApprovalRequests",
          "participants",
          "hasCapi",
          "memberShareGroupHistoryMode",
          "isOpenBotGroup",
        ]),
        y = a != null ? a : !1,
        C = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = h.membershipApprovalRequests.length;
            if (e === !1 && t > 0) {
              if (
                !(yield o(
                  "WAWebGroupSettingsConfirmation",
                ).confirmPendingRequests())
              )
                return !1;
              var n = h.participants.length,
                r = o("WAWebMiscGatingUtils").getGroupSizeLimit() - n;
              if (
                t > r &&
                !(yield o("WAWebGroupSettingsConfirmation").confirmGroupFull(
                  r,
                  t,
                ))
              )
                return !1;
            }
            return !0;
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        b = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            return !(
              e === !1 &&
              !(yield o(
                "WAWebGroupSettingsConfirmation",
              ).confirmDeleteReportsForAdminReview())
            );
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        v = function (t) {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebGroupLinkResetConfirmationModal.react"), {
              onConfirm: t,
            }),
          );
        },
        S =
          o("WAWebABProps").getABPropConfigValue(
            "report_to_admin_kill_switch",
          ) &&
          !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(t) &&
          !g &&
          (h.reportToAdminMode ||
            o("WAWebABProps").getABPropConfigValue("report_to_admin_enabled")),
        R =
          !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(t) &&
          h.memberAddMode ===
            o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD &&
          o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsEnabled(),
        L =
          !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(t) &&
          h.memberAddMode ===
            o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD &&
          o("WAWebGroupHistoryGating").isGroupHistorySettingsToggleUIEnabled();
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: u,
        theme: "striped",
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "existing-group-permissions",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Group permissions"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: l,
          }),
          c.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              c.jsx(_, { title: s._(/*BTDS*/ "Members can:") }),
              c.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                xstyle: o("WAWebUISpacing").uiPadding.all0,
                theme: "refresh-new",
                children: [
                  c.jsx(p, {
                    chat: t,
                    groupMetadata: h,
                    settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                      .RESTRICT,
                    icon: c.jsx(
                      o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
                      {},
                    ),
                    title: s._(/*BTDS*/ "Edit group settings"),
                    secondaryTitle: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                      children: o(
                        "WAWebPinMsgGatingUtils",
                      ).isPinnedMessagesM1SenderEnabled()
                        ? s._(
                            /*BTDS*/ "This includes the name, icon, description, disappearing message timer, and the ability to pin, keep or unkeep messages.",
                          )
                        : s._(
                            /*BTDS*/ "This includes the name, icon, description, disappearing message timer, and keeping and unkeeping messages.",
                          ),
                    }),
                  }),
                  h.groupType !==
                  o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
                    ? c.jsx(p, {
                        chat: t,
                        groupMetadata: h,
                        settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                          .ANNOUNCEMENT,
                        icon: c.jsx(
                          o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon,
                          {},
                        ),
                        title: s._(/*BTDS*/ "Send new messages"),
                      })
                    : null,
                  c.jsx(p, {
                    chat: t,
                    groupMetadata: h,
                    settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                      .MEMBER_ADD_MODE,
                    icon: c.jsx(r("WDSIconIcGroupAdd.react"), {}),
                    title: s._(/*BTDS*/ "Add other members"),
                    onConfirm:
                      h.memberAddMode ===
                        o("WAWebSchemaGroupMetadata").MemberAddMode
                          .ALL_MEMBER_ADD &&
                      h.memberLinkMode ===
                        o("WAWebGroupMemberLinkMode").MemberLinkMode
                          .ALL_MEMBER_LINK &&
                      o(
                        "WAWebGroupGatingUtils",
                      ).isAnyoneCanLinkToGroupsEnabled()
                        ? v
                        : void 0,
                  }),
                  L &&
                    c.jsx(p, {
                      chat: t,
                      groupMetadata: h,
                      settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                        .MEMBER_SHARE_GROUP_HISTORY_MODE,
                      icon: c.jsx(r("WDSIconIcGroupAdd.react"), {}),
                      title: s._(/*BTDS*/ "Send message history"),
                      secondaryTitle: s._(
                        /*BTDS*/ "Past messages can be sent to new members.",
                      ),
                    }),
                  R &&
                    c.jsx(p, {
                      chat: t,
                      groupMetadata: h,
                      icon: c.jsx(r("WDSIconIcLink.react"), { testid: void 0 }),
                      settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                        .MEMBER_LINK_MODE,
                      title: s._(/*BTDS*/ "Invite via link"),
                      onConfirm:
                        h.memberLinkMode ===
                        o("WAWebGroupMemberLinkMode").MemberLinkMode
                          .ALL_MEMBER_LINK
                          ? v
                          : void 0,
                    }),
                  S && !y
                    ? c.jsx(p, {
                        chat: t,
                        groupMetadata: h,
                        settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                          .REPORT_TO_ADMIN_MODE,
                        onValidateChange: b,
                        icon: c.jsx(
                          o("WAWebMessageReportRefreshedIcon.react")
                            .MessageReportRefreshedIcon,
                          {},
                        ),
                        title: s._(/*BTDS*/ "Send for admin review"),
                        secondaryTitle: c.jsx(
                          o("WAWebText.react").WAWebTextMuted,
                          {
                            children: s._(
                              /*BTDS*/ "Allow group members to send messages to group admins for review. {=m2}",
                              [
                                s._implicitParam(
                                  "=m2",
                                  c.jsx(r("WDSTextualLink.react"), {
                                    href: o(
                                      "WAWebFaqUrl",
                                    ).getReportToAdminFaqUrl(),
                                    children: s._(/*BTDS*/ "Learn more"),
                                  }),
                                ),
                              ],
                            ),
                          },
                        ),
                      })
                    : null,
                ],
              }),
              c.jsx(_, { title: s._(/*BTDS*/ "Admins can:") }),
              c.jsx(r("WAWebDrawerSection.react"), {
                animation: !1,
                theme: "refresh-new",
                xstyle: o("WAWebUISpacing").uiPadding.all0,
                children: c.jsx(p, {
                  chat: t,
                  groupMetadata: h,
                  settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                    .MEMBERSHIP_APPROVAL_MODE,
                  onValidateChange: C,
                  icon: c.jsx(
                    o("WAWebPersonClockIcon.react").PersonClockIcon,
                    {},
                  ),
                  title: s._(/*BTDS*/ "Approve new members"),
                  secondaryTitle: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(
                      /*BTDS*/ "When turned on, admins must approve anyone who wants to join this group. {=m2}",
                      [
                        s._implicitParam(
                          "=m2",
                          c.jsx(r("WDSTextualLink.react"), {
                            href: o(
                              "WAWebFaqUrl",
                            ).getMembershipApprovalModeFaqUrl(),
                            children: s._(/*BTDS*/ "Learn more"),
                          }),
                        ),
                      ],
                    ),
                  }),
                }),
              }),
              h.groupType !==
                o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !y
                ? (function () {
                    var e = s._(/*BTDS*/ "Edit group admins"),
                      n = function () {
                        o("WAWebGroupManageAdminModal").openManageAdminModal(
                          t,
                          h,
                        );
                      },
                      a = c.jsx(
                        o("WAWebChatInfoDrawerRow.react")
                          .ChatInfoDrawerRowRefreshed,
                        {
                          onClick: n,
                          icon: c.jsx(
                            o("WAWebPersonGearIcon.react").PersonGearIcon,
                            {},
                          ),
                          title: c.jsx(
                            o("WAWebText.react").WAWebTextTitleRefreshed,
                            { children: e },
                          ),
                          secondaryTitle: c.jsx(f, { groupMetadata: h }),
                        },
                      );
                    return c.jsxs(c.Fragment, {
                      children: [
                        c.jsx(_, { title: s._(/*BTDS*/ "Group admins") }),
                        c.jsx(r("WAWebDrawerSection.react"), {
                          animation: !1,
                          theme: "refresh-new",
                          xstyle: o("WAWebUISpacing").uiPadding.all0,
                          children: a,
                        }),
                      ],
                    });
                  })()
                : null,
            ],
          }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
