__d(
  "WAWebMessageGroupNotification.react",
  [
    "fbt",
    "WALogger",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebChatCommunityUtils",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebCommunitySubgroupInviteLinkRestriction",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebExistingGroupPermissionsDrawer.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFindChatAction",
    "WAWebFormatAddNotification",
    "WAWebFormatAllowNonAdminSubGroupCreationNotification",
    "WAWebFormatAnnounceNotification",
    "WAWebFormatCTAText",
    "WAWebFormatCommunityOwnerUpdateNotification",
    "WAWebFormatCreateNotification",
    "WAWebFormatCreatedSubgroupSuggestionNotification",
    "WAWebFormatDeleteNotification",
    "WAWebFormatDescriptionNotification",
    "WAWebFormatEphemeralSetting",
    "WAWebFormatLeaveNotification",
    "WAWebFormatLinkNotification",
    "WAWebFormatMemberAddModeNotification",
    "WAWebFormatMemberLinkModeNotification",
    "WAWebFormatMembershipApprovalNotification",
    "WAWebFormatParticipantNames",
    "WAWebFormatPictureNotification",
    "WAWebFormatPromoteDemoteNotification",
    "WAWebFormatRemoveNotification",
    "WAWebFormatReportToAdminNotification",
    "WAWebFormatRestrictNotification",
    "WAWebFormatSubjectNotification",
    "WAWebFrontendMsgGetters",
    "WAWebGroupInviteUtils.react",
    "WAWebGroupMembershipApprovalRequestsFlow.react",
    "WAWebGroupNotificationContextCard.react",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebKeyboardTabUtils",
    "WAWebKicNux.react",
    "WAWebLinkJoinedMembersUtils",
    "WAWebMegaphoneRefreshedIcon.react",
    "WAWebMemberShareGroupHistoryModeFormatSystemMessageText",
    "WAWebMessageCommunityEmptySubgroupWelcome.react",
    "WAWebMessageCommunityEmptySubgroupWelcomeTitle.react",
    "WAWebMessageCommunityGeneralChatAutoAddDisabledNotification.react",
    "WAWebMessageCommunityGeneralChatWelcome.react",
    "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
    "WAWebMessageCommunityLinkGroup.react",
    "WAWebMessageCommunitySubgroupWelcome.react",
    "WAWebMessageCommunityWelcomeAdmin.react",
    "WAWebMessageCommunityWelcomeMember.react",
    "WAWebMessageCommunityWelcomeSubgroup.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebRemoveLinkJoinedMembersModal.react",
    "WAWebStateUtils",
    "WAWebSystemMessageGatingUtils",
    "WAWebSystemMessageWithSingleCTA.react",
    "WAWebSystemMessagesUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumEphemeralSettingEntryPointType",
    "WAWebWamEnumGroupBulkRemovalAction",
    "WAWebWamEnumTriggerType",
    "WAWebWidFormat",
    "WDSIconWdsIcDisappearingMessages.react",
    "react",
    "react-compiler-runtime",
    "useWAWebForceUpdate",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebMsgValues",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useImperativeHandle,
      g = _.useRef,
      h = function (t) {
        (t.stopPropagation(), t.preventDefault());
      },
      y = o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageActionTextStylingEnabled();
    function C(e, t, n) {
      return (
        n &&
        e &&
        (!n.isUser() ||
          !o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(
            t,
            o("WAWebContactCollection").ContactCollection.gadd(n),
          ))
      );
    }
    function b(e) {
      var t = e.clickable,
        n = e.isLastMsg,
        a = e.msg,
        i = a.subtype,
        l = a.author,
        d = a.body,
        m = a.recipients,
        _ = m === void 0 ? [] : m,
        f = a.templateParams,
        g = o("WAWebFrontendMsgGetters").getChat(a.unsafe()),
        h = a.displayName(),
        b = l
          ? o("WAWebFormatParticipantNames").getFormattedName(
              l,
              C(t, g, l),
              void 0,
              "0",
            )
          : null,
        v = _[0],
        S = v
          ? o("WAWebFormatParticipantNames").getFormattedName(
              v,
              C(t, g, v),
              void 0,
              "0",
            )
          : null,
        R;
      if (
        o(
          "WAWebSystemMessageGatingUtils",
        ).systemMessageTextTruncationEnabled() &&
        _.length > 3
      ) {
        var L,
          E = _.slice(0, 2);
        R = o("WAWebFormatParticipantNames").getFormattedNames(
          E,
          t &&
            E.length === 1 &&
            !((L = g.groupMetadata) != null && L.isCag) &&
            (!o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              !E[0].isBot()),
          !0,
          "0",
        );
      } else {
        var k;
        R = o("WAWebFormatParticipantNames").getFormattedNames(
          _,
          t &&
            _.length === 1 &&
            !((k = g.groupMetadata) != null && k.isCag) &&
            (!o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              !_[0].isBot()),
          void 0,
          "0",
        );
      }
      switch (i) {
        case "add":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatAddNotification",
            ).formatAddNotification({
              author: l,
              authorClickable: b,
              subject: v,
              subjectClickable: S,
              participantsClickable: R,
              participantsCount: _.length,
            }),
            isBodyTextClickable: !!b || !!S || !!R,
          };
        case "remove":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatRemoveNotification",
            ).formatRemoveNotification({
              author: l,
              authorClickable: b,
              subject: v,
              subjectClickable: S,
              participantsClickable: R,
            }),
          };
        case "leave":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatLeaveNotification",
            ).formatLeaveNotification({
              body: d,
              subject: v,
              participantsClickable: R,
            }),
          };
        case "picture":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatPictureNotification",
            ).formatPictureNotification({
              author: l,
              authorClickable: b,
              body: d,
            }),
          };
        case "subject": {
          var I = p.jsx(o("WAWebSystemMessagesUtils").FormattedText, {
            text: d,
          });
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatSubjectNotification",
            ).formatSubjectNotification(g, l, b, I),
          };
        }
        case "modify": {
          var T = o("WAWebWidFormat").widToFormattedUser(l),
            D = o("WAWebWidFormat").widToFormattedUser(v);
          return T === h
            ? {
                l10nBodyTextInstance: s._(
                  /*BTDS*/ "{name} changed to {new_number}",
                  [s._param("name", h), s._param("new_number", D)],
                ),
              }
            : {
                l10nBodyTextInstance: s._(
                  /*BTDS*/ "{name} changed their phone number to a new number.",
                  [s._param("name", h)],
                ),
              };
        }
        case "create":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatCreateNotification",
            ).formatCreateNotification({
              chat: g,
              author: l,
              authorClickable: b,
              groupSubject: d,
              groupSubjectAsString: !1,
            }),
          };
        case "delete":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatDeleteNotification",
            ).formatDeleteNotification({ chat: g }),
          };
        case "promote":
        case "demote":
        case "linked_group_promote":
        case "linked_group_demote":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatPromoteDemoteNotification",
            ).formatPromoteDemoteNotification({
              subtype: i,
              subject: v,
              subjectClickable: S,
              participantsClickable: R,
              participantsCount: _.length,
            }),
          };
        case "invite":
          return o("WAWebSystemMessagesUtils").isMe(v)
            ? {
                l10nBodyTextInstance: s._(
                  /*BTDS*/ "You joined via an invite link",
                ),
              }
            : {
                l10nBodyTextInstance: s._(
                  /*BTDS*/ "{name} joined via an invite link",
                  [s._param("name", S)],
                ),
              };
        case "revoke_invite":
          return o("WAWebSystemMessagesUtils").isMe(l)
            ? {
                l10nBodyTextInstance: y
                  ? s._(/*BTDS*/ "You reset this group's invite link")
                  : s._(
                      /*BTDS*/ "You reset this group's invite link. Click to view the new invite link",
                    ),
              }
            : {
                l10nBodyTextInstance: y
                  ? s._(/*BTDS*/ "{name} reset this group's invite link", [
                      s._param("name", b),
                    ])
                  : s._(
                      /*BTDS*/ "{name} reset this group's invite link. Click to view the new invite link",
                      [s._param("name", b)],
                    ),
              };
        case "description":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatDescriptionNotification",
            ).formatDescriptionNotification({ author: l, authorClickable: b }),
          };
        case "parent_group_description":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatDescriptionNotification",
            ).formatDescriptionNotification({
              author: l,
              authorClickable: b,
              isParentGroup: !0,
            }),
          };
        case "announce":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatAnnounceNotification",
            ).formatAnnounceNotification({
              author: l,
              authorClickable: b,
              body: d,
            }),
          };
        case "restrict":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatRestrictNotification",
            ).formatRestrictNotification({
              author: l,
              authorClickable: b,
              templateParams: f,
            }),
          };
        case "no_frequently_forwarded":
          return d === "on"
            ? o("WAWebSystemMessagesUtils").isMe(l)
              ? {
                  l10nBodyTextInstance: s._(
                    /*BTDS*/ "You changed this group's settings to not allow messages that have been forwarded many times.",
                  ),
                }
              : {
                  l10nBodyTextInstance: s._(
                    /*BTDS*/ "{name} changed this group's settings to not allow messages that have been forwarded many times.",
                    [s._param("name", b)],
                  ),
                }
            : o("WAWebSystemMessagesUtils").isMe(l)
              ? {
                  l10nBodyTextInstance: s._(
                    /*BTDS*/ "You changed this group's settings to allow messages that have been forwarded many times.",
                  ),
                }
              : {
                  l10nBodyTextInstance: s._(
                    /*BTDS*/ "{name} changed this group's settings to allow messages that have been forwarded many times.",
                    [s._param("name", b)],
                  ),
                };
        case "announce_msg_bounce":
          return {
            l10nBodyTextInstance: s._(
              /*BTDS*/ "Only admins can message this group.",
            ),
          };
        case "v4_add_invite_sent":
          return {
            l10nBodyTextInstance: s._(/*BTDS*/ "You invited {participants}", [
              s._param("participants", R),
            ]),
          };
        case "v4_add_invite_join":
          return {
            l10nBodyTextInstance: s._(
              /*BTDS*/ "{participants} joined using your invite",
              [s._param("participants", R)],
            ),
          };
        case "ephemeral":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatEphemeralSetting",
            ).formatEphemeralSetting(o("WAWebStateUtils").unproxy(a.unsafe())),
          };
        case "initial_pHash_mismatch":
        case "default_sub_group_promote":
        case "default_sub_group_demote":
          return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(g)
            ? {
                l10nBodyTextInstance: y
                  ? s._(/*BTDS*/ "Community members have changed")
                  : s._(
                      /*BTDS*/ "Community members have changed. Click to view",
                    ),
              }
            : {
                l10nBodyTextInstance: y
                  ? s._(/*BTDS*/ "Group members have changed")
                  : s._(/*BTDS*/ "Group members have changed. Click to view"),
              };
        case "growth_locked":
          return {
            l10nBodyTextInstance: y
              ? s._(/*BTDS*/ "Invite via link became unavailable")
              : s._(
                  /*BTDS*/ "Invite via link became unavailable. Click to learn more",
                ),
          };
        case "growth_unlocked":
          return {
            l10nBodyTextInstance: y
              ? s._(/*BTDS*/ "Invite via link became available again")
              : s._(
                  /*BTDS*/ "Invite via link became available again. Click to view the new invite link.",
                ),
          };
        case "linked_group_join":
        case "parent_group_link":
        case "sibling_group_link":
        case "sub_group_link":
        case "parent_group_unlink":
        case "sibling_group_unlink":
        case "delete_parent_group":
        case "delete_parent_group_unlink":
        case "sub_group_unlink":
        case "integrity_parent_group_unlink":
        case "auto_add":
        case "default_sub_group_admin_add":
        case "invite_auto_add":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatLinkNotification",
            ).formatLinkNotification(i, l, v, f, t),
          };
        case "community_create":
          return {
            l10nBodyTextInstance: n
              ? o(
                  "WAWebMessageCommunityWelcomeAdmin.react",
                ).communityWelcomeAdminTitle({
                  author: l,
                  chat: g,
                  templateParams: f,
                })
              : p.jsx(
                  o("WAWebMessageCommunityWelcomeAdmin.react")
                    .MessageCommunityWelcomeAdmin,
                  { author: l, chat: g, templateParams: f },
                ),
          };
        case "community_participant_add_rich":
        case "community_invite_rich":
        case "community_invite_auto_add_rich":
          return {
            l10nBodyTextInstance: n
              ? o(
                  "WAWebMessageCommunityWelcomeMember.react",
                ).communityWelcomeMemberTitle()
              : p.jsx(
                  o("WAWebMessageCommunityWelcomeMember.react")
                    .MessageCommunityWelcomeMember,
                  { templateParams: f, clickable: t, author: l, chat: g },
                ),
          };
        case "subgroup_admin_triggered_auto_add":
        case "subgroup_admin_triggered_invite_auto_add":
          return {
            l10nBodyTextInstance: n
              ? o(
                  "WAWebMessageCommunityWelcomeMember.react",
                ).communityWelcomeMemberTitle()
              : p.jsx(r("WAWebMessageCommunityWelcomeSubgroup.react"), {
                  templateParams: f,
                }),
          };
        case "sub_group_participant_add_rich":
        case "sub_group_invite_rich":
          return {
            l10nBodyTextInstance: n
              ? o(
                  "WAWebMessageCommunitySubgroupWelcome.react",
                ).communitySubgroupWelcomeTitle({
                  templateParams: f,
                  clickable: t,
                  author: l,
                })
              : p.jsx(
                  o("WAWebMessageCommunitySubgroupWelcome.react")
                    .MessageCommunitySubgroupWelcome,
                  { chat: g, author: l, templateParams: f, clickable: t },
                ),
          };
        case "community_link_parent_group_rich":
          return {
            l10nBodyTextInstance: n
              ? o(
                  "WAWebMessageCommunityLinkGroup.react",
                ).communityLinkGroupTitle({
                  templateParams: f,
                  clickable: t,
                  author: l,
                })
              : p.jsx(
                  o("WAWebMessageCommunityLinkGroup.react")
                    .MessageCommunityLinkGroup,
                  { chat: g, author: l, templateParams: f, clickable: t },
                ),
          };
        case "ephemeral_keep_in_chat":
          return {
            l10nBodyTextInstance: s._(
              /*BTDS*/ "Disappearing messages now support keeping messages in the chat. Click to learn more.",
            ),
          };
        case "membership_approval_mode":
        case "membership_approval_request":
        case "created_membership_requests":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatMembershipApprovalNotification",
            ).formatMembershipApprovalNotification(i, l, f),
          };
        case "allow_admin_reports":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatReportToAdminNotification",
            ).formatReportToAdminNotification(l, f),
          };
        case "allow_non_admin_sub_group_creation":
          return {
            l10nBodyTextInstance: r(
              "WAWebFormatAllowNonAdminSubGroupCreationNotification",
            )(g, f),
          };
        case "empty_subgroup_create":
          return {
            l10nBodyTextInstance: n
              ? o(
                  "WAWebMessageCommunityEmptySubgroupWelcomeTitle.react",
                ).communityEmptySubgroupWelcomeTitle(g.formattedTitle)
              : p.jsx(r("WAWebMessageCommunityEmptySubgroupWelcome.react"), {
                  templateParams: f,
                  subgroupChat: g,
                }),
          };
        case "member_add_mode": {
          var x,
            $ = !!((x = g.groupMetadata) != null && x.participants.iAmAdmin());
          return {
            l10nBodyTextInstance: r("WAWebFormatMemberAddModeNotification")(
              l,
              $,
              f,
            ),
          };
        }
        case "member_link_mode": {
          var P,
            N = !!((P = g.groupMetadata) != null && P.participants.iAmAdmin());
          return {
            l10nBodyTextInstance: r("WAWebFormatMemberLinkModeNotification")(
              l,
              N,
              f,
            ),
          };
        }
        case "join_flood_notification": {
          var M,
            w = !!((M = g.groupMetadata) != null && M.participants.iAmAdmin());
          return w
            ? {
                l10nBodyTextInstance: s._(
                  /*BTDS*/ "Multiple people have joined using a group link",
                ),
              }
            : { l10nBodyTextInstance: null };
        }
        case "created_subgroup_suggestion":
          return {
            l10nBodyTextInstance: r(
              "WAWebFormatCreatedSubgroupSuggestionNotification",
            )(l, f, t),
          };
        case "general_chat_add":
          return {
            l10nBodyTextInstance: n
              ? o(
                  "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
                ).communityGeneralChatWelcomeTitle(g.formattedTitle)
              : p.jsx(r("WAWebMessageCommunityGeneralChatWelcome.react"), {
                  templateParams: f,
                  subgroupChat: g,
                  author: l,
                }),
          };
        case "general_chat_auto_add_disabled":
          return {
            l10nBodyTextInstance: o(
              "WAWebMessageCommunityGeneralChatAutoAddDisabledNotification.react",
            ).communityGeneralChatAutoAddDisabledNotification(
              g.formattedTitle,
              f,
            ),
          };
        case "community_owner_update":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatCommunityOwnerUpdateNotification",
            ).formatCommunityOwnerUpdateNotification({
              author: l,
              templateParams: f,
              clickable: t,
            }),
          };
        case "is_capi_hosted_group": {
          var A;
          if (((A = g.groupMetadata) == null ? void 0 : A.hasCapi) === !0)
            return {
              l10nBodyTextInstance: "Test capi notification for group chat",
            };
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "wa:groupNotification:not implemented yet",
              ])),
          );
          break;
        }
        case "hidden_group":
          return {
            l10nBodyTextInstance: s._(
              /*BTDS*/ "You set the group visibility to hidden",
            ),
          };
        case "member_share_group_history_mode":
          return {
            l10nBodyTextInstance: r(
              "WAWebMemberShareGroupHistoryModeFormatSystemMessageText",
            )({ msg: a.unsafe(), options: {} }),
          };
        default:
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "wa:groupNotification:unknown message subtype: ",
                "",
              ])),
            i,
          );
          break;
      }
      return { l10nBodyTextInstance: null };
    }
    var v = {
      iconDisappearingSvg: { width: "x1kky2od", height: "xlup9mm", $$css: !0 },
    };
    function S(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.clickable,
        a = e.subtype,
        i = e.type,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = p.jsx(
            o("WAWebMegaphoneRefreshedIcon.react").MegaphoneRefreshedIcon,
            { directional: !0, height: 16, width: 16 },
          )),
          (t[0] = l))
        : (l = t[0]);
      var s = l;
      if (i === "gp2") {
        if (a === "announce") {
          var u;
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = p.jsx("div", {
                  className: "x1rg5ohu xm7witj x7g7pl8 xg49k01",
                  children: s,
                })),
                (t[1] = u))
              : (u = t[1]),
            u
          );
        } else if (a === "ephemeral" && n) {
          var c;
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = p.jsx("div", {
                  className: "x1rg5ohu xm7witj x7g7pl8 xg49k01",
                  children: p.jsx(r("WDSIconWdsIcDisappearingMessages.react"), {
                    iconXstyle: v.iconDisappearingSvg,
                  }),
                })),
                (t[2] = c))
              : (c = t[2]),
            c
          );
        }
      }
      return null;
    }
    function R(t) {
      "use no forget";
      var n,
        a,
        i,
        l = t.ref,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e),
        c = u.clickable,
        m = u.isLastMsg,
        _ = m === void 0 ? !1 : m,
        y = u.msg,
        C = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        v = r("useWAWebUIM")(),
        R = g(null),
        L = r("useWAWebIsKeyboardUser")(),
        E = L.isKeyboardUser,
        k = o("useWAWebMsgValues").useMsgValues(u.msg.id, [
          o("WAWebMsgGetters").getAuthor,
          o("WAWebMsgGetters").getBody,
          o("WAWebMsgGetters").getRecipients,
          o("WAWebMsgGetters").getSubtype,
          o("WAWebMsgGetters").getTemplateParams,
          o("WAWebMsgGetters").getType,
        ]),
        I = k[0],
        T = k[1],
        D = k[2],
        x = k[3],
        $ = k[4],
        P = k[5],
        N = o("WAWebFrontendMsgGetters").getChat(y.unsafe()),
        M = function () {
          var e;
          (e = R.current) == null || e.click();
        },
        w = function () {
          return function (e) {
            (h(e), o("WAWebCmd").Cmd.chatInfoDrawer(N));
          };
        },
        A = function () {
          return function (e) {
            (h(e),
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                  ? {
                      descriptorType: "info_flow",
                      chat: N,
                      initialStep:
                        o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink,
                    }
                  : p.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                      chat: N,
                      onEnd: o("WAWebDrawerManager").closeDrawerRight,
                      initialStep:
                        o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink,
                    }),
                {
                  transition: "slide-left",
                  uim: v,
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                },
              ));
          };
        },
        F = function (t) {
          return function (e) {
            var n;
            h(e);
            var r = (n = N.groupMetadata) == null ? void 0 : n.parentGroup;
            r && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(N)
              ? o("WAWebCmd").Cmd.openCommunityTabbedInfo(r, void 0, !0, t)
              : o("WAWebCmd").Cmd.chatInfoDrawer(N, {
                  showFullGroupDescription: !0,
                  scrollToParticipantList: t,
                });
          };
        },
        O = function () {
          return function (e) {
            (h(e),
              o("WAWebCmd").Cmd.ephemeralDrawer(
                N,
                !1,
                o("WAWebWamEnumEphemeralSettingEntryPointType")
                  .EPHEMERAL_SETTING_ENTRY_POINT_TYPE.SYSTEM_MESSAGE,
              ));
          };
        },
        B = function () {
          return function (e) {
            (h(e),
              o("WAWebCmd").Cmd.chatInfoDrawer(N, {
                scrollToParticipantList: !0,
              }));
          };
        },
        W = function () {
          return function (e) {
            var t, n;
            h(e);
            var r = !!(
                (t = N.groupMetadata) != null && t.participants.iAmAdmin()
              ),
              a = (n = N.groupMetadata) == null ? void 0 : n.memberLinkMode,
              i = o("WAWebChatGroupUtils").isInviteGrowthLockedGroup(N);
            o("WAWebGroupInviteUtils.react").openGrowthLockedModal(r, i, a);
          };
        },
        q = function () {
          return function (e) {
            var t, n;
            h(e);
            var r = !!(
                (t = N.groupMetadata) != null && t.participants.iAmAdmin()
              ),
              a = o("WAWebChatGroupUtils").isInviteGrowthLockedGroup(N),
              i = (n = N.groupMetadata) == null ? void 0 : n.memberLinkMode;
            r && !a
              ? o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                  o(
                    "WAWebAdaptiveLayoutGatingUtils",
                  ).shouldUseDrawerDescriptor()
                    ? {
                        descriptorType: "info_flow",
                        chat: N,
                        initialStep:
                          o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink,
                      }
                    : p.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                        chat: N,
                        onEnd: o("WAWebDrawerManager").closeDrawerRight,
                        initialStep:
                          o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink,
                      }),
                  {
                    transition: "slide-left",
                    uim: v,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  },
                )
              : o("WAWebGroupInviteUtils.react").openGrowthLockedModal(r, a, i);
          };
        },
        U = function (t) {
          return function (e) {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? {
                    descriptorType: "existing_group_permissions",
                    chat: N,
                    groupMetadata: t,
                  }
                : p.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
                    chat: N,
                    groupMetadata: t,
                    onClose: o("WAWebDrawerManager").closeDrawerRight,
                  }),
              {
                transition: "slide-left",
                uim: v,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            );
          };
        },
        V = function () {
          return function (e) {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? {
                    descriptorType: "group_membership_approval_requests",
                    chat: N,
                  }
                : p.jsx(r("WAWebGroupMembershipApprovalRequestsFlow.react"), {
                    chat: N,
                    onBack: o("WAWebDrawerManager").closeDrawerRight,
                  }),
              {
                transition: "slide-left",
                uim: v,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            );
          };
        },
        H = function (t) {
          return function (e) {
            o("WAWebModalManager").ModalManager.open(
              p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "group-notification",
                },
                onOK: o("WAWebModalManager").closeModalManager,
                children: t,
              }),
              { transition: "modal-flow" },
            );
          };
        },
        G = function (t) {
          return function (e) {
            o("WAWebExternalLink.react").openExternalLink(t);
          };
        },
        z = function (t) {
          return function (e) {
            (h(e), o("WAWebCmd").Cmd.openCommunitySettingsDrawer(t));
          };
        },
        j = function (t) {
          return function (e) {
            (h(e), o("WAWebCmd").Cmd.openCommunityPendingGroupsDrawer(t));
          };
        },
        K = function (t) {
          return function (e) {
            (h(e),
              o("WAWebFindChatAction")
                .findOrCreateLatestChat(t, "messageAuthor")
                .then(function (e) {
                  var t = e.chat;
                  o("WAWebCmd").Cmd.openChatBottom({ chat: t });
                }));
          };
        },
        Q = function (t, n, r, a) {
          var e;
          if (c)
            switch (n) {
              case "add":
                return o(
                  "WAWebSystemMessageGatingUtils",
                ).systemMessageActionTextStylingEnabled()
                  ? B()
                  : void 0;
              case "picture":
              case "subject":
                if (o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(N)) {
                  var i;
                  return (i = N.groupMetadata) != null && i.parentGroup
                    ? o("WAWebFormatParticipantNames").openCommunity(
                        N.groupMetadata.parentGroup,
                      )
                    : void 0;
                }
                return w();
              case "revoke_invite":
                return o(
                  "WAWebCommunitySubgroupInviteLinkRestriction",
                ).isSubgroupInviteLinkRestrictedByParentCommunity(
                  N.groupMetadata,
                )
                  ? void 0
                  : A();
              case "description":
                return F();
              case "parent_group_description":
                return F();
              case "ephemeral": {
                var l,
                  u =
                    (l = N.groupMetadata) == null
                      ? void 0
                      : l.canSetEphemeralSetting();
                if (u === !0) return O();
                break;
              }
              case "initial_pHash_mismatch":
              case "default_sub_group_promote":
              case "default_sub_group_demote":
                return F(!0);
              case "growth_unlocked":
                return o(
                  "WAWebCommunitySubgroupInviteLinkRestriction",
                ).isSubgroupInviteLinkRestrictedByParentCommunity(
                  N.groupMetadata,
                )
                  ? void 0
                  : q();
              case "growth_locked":
                return W();
              case "ephemeral_keep_in_chat":
                return function () {
                  o("WAWebKicNux.react").openKicNux(
                    N,
                    o("WAWebWamEnumTriggerType").TRIGGER_TYPE.SYSTEM_MESSAGE,
                  );
                };
              case "membership_approval_mode": {
                var d = r[1] === "admin";
                if (d) {
                  var m = N.groupMetadata;
                  return m && m.participants.iAmAdmin()
                    ? U(m)
                    : H(
                        s._(
                          /*BTDS*/ "You are not an admin anymore. Only admins can change this setting.",
                        ),
                      );
                }
                break;
              }
              case "membership_approval_request":
              case "created_membership_requests":
                return (e = N.groupMetadata) != null &&
                  e.participants.iAmAdmin()
                  ? V()
                  : H(
                      s._(
                        /*BTDS*/ "You are not an admin anymore. Only admins can review requests to join.",
                      ),
                    );
              case "allow_admin_reports": {
                var p = r[1] === "admin",
                  _ = r[1] === "regular";
                if (p) {
                  var f = N.groupMetadata;
                  return f && f.participants.iAmAdmin()
                    ? U(f)
                    : H(
                        s._(
                          /*BTDS*/ "You are not an admin anymore. Only admins can change this setting",
                        ),
                      );
                } else if (_)
                  return G(o("WAWebFaqUrl").getReportToAdminFaqUrl());
                break;
              }
              case "allow_non_admin_sub_group_creation": {
                var g,
                  h,
                  C = !!(
                    (g = N.groupMetadata) != null && g.participants.iAmAdmin()
                  ),
                  b = (h = N.groupMetadata) == null ? void 0 : h.parentGroup;
                if (!C || !b) break;
                return z(b);
              }
              case "sibling_group_link": {
                var v,
                  S = (v = N.groupMetadata) == null ? void 0 : v.parentGroup;
                if (!S) break;
                return o("WAWebFormatParticipantNames").openCommunity(S);
              }
              case "created_subgroup_suggestion": {
                var R,
                  L,
                  k = !!(
                    (R = N.groupMetadata) != null && R.participants.iAmAdmin()
                  ),
                  I = (L = N.groupMetadata) == null ? void 0 : L.parentGroup;
                if (!k || !I) break;
                return j(I);
              }
              case "community_owner_update": {
                var T,
                  D = o(
                    "WAWebChatCommunityUtils",
                  ).getNewCommunityOwnerFromTemplateParams(r);
                return o("WAWebSystemMessagesUtils").isMe(D)
                  ? G(o("WAWebFaqUrl").getCommunityBecomingOwnerUrl())
                  : (T = N.groupMetadata) != null && T.parentGroup
                    ? o("WAWebFormatParticipantNames").openCommunityInfo(
                        N.groupMetadata.parentGroup,
                      )
                    : void 0;
              }
              case "hidden_group":
                return G(o("WAWebFaqUrl").getCommunityGroupsVisibilityFaqUrl());
              case "member_add_mode": {
                var x = N.groupMetadata;
                return x && x.participants.iAmAdmin() ? U(x) : void 0;
              }
              case "member_link_mode":
                return;
              case "join_flood_notification": {
                var $ = N.groupMetadata;
                return $ && $.participants.iAmAdmin()
                  ? function (e) {
                      (o(
                        "WAWebLinkJoinedMembersUtils",
                      ).logGroupBulkRemovalWamEvent(
                        o("WAWebWamEnumGroupBulkRemovalAction")
                          .GROUP_BULK_REMOVAL_ACTION.TAP_SYSTEM_MESSAGE,
                        N.id,
                      ),
                        o(
                          "WAWebRemoveLinkJoinedMembersModal.react",
                        ).openRemoveLinkJoinedMembersModal(N, $, y.t));
                    }
                  : void 0;
              }
              case "announce":
                if (E) return K(a);
            }
        };
      if (
        (f(l, function () {
          return { handleKeyActivation: M };
        }),
        o("useWAWebListener").useListener(
          N == null ? void 0 : N.groupMetadata,
          "change:support",
          C,
        ),
        P !== "gp2")
      )
        return (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "wa:groupNotification:unknown message type: ",
                  "",
                ])),
              P,
            )
            .sendLogs("unknown-group-notification"),
          null
        );
      var X = b({ clickable: c, msg: y, isLastMsg: _ }),
        Y = X.isBodyTextClickable,
        J = X.l10nBodyTextInstance;
      if (J == null) return null;
      var Z = r("WAWebFormatCTAText")({
          type: P,
          subtype: x,
          id: y.id,
          iAmAdmin:
            (n = N.groupMetadata) == null ? void 0 : n.participants.iAmAdmin(),
        }),
        ee = p.jsx(S, { clickable: c, type: P, subtype: x }),
        te = Q(P, x, $, y.author),
        ne;
      return (
        ((x === "create" &&
          o("WAWebUserPrefsMeUser").isMeAccount(
            (a = N.groupMetadata) == null ? void 0 : a.owner,
          )) ||
          ((x === "add" || x === "invite") &&
            o("WAWebUserPrefsMeUser").isMeAccount(D[0]))) &&
        !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(N) &&
        !_ &&
        ((i = N.groupMetadata) == null
          ? void 0
          : i.participants.iAmMember()) === !0
          ? (ne = p.jsx(r("WAWebGroupNotificationContextCard.react"), {
              chat: N,
              msg: y,
            }))
          : o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageActionTextStylingEnabled() &&
              Z != null &&
              c === !0
            ? (ne = p.jsx(
                o("WAWebSystemMessageWithSingleCTA.react")
                  .SystemMessageWithSingleCTA,
                {
                  role: "link",
                  bodyText: J,
                  isBodyTextClickable: Y,
                  ctaText: Z,
                  icon: ee,
                  onClick: te,
                  onclickRef: R,
                  className: "x6ikm8r x10wlt62 xlyipyv",
                  testid: void 0,
                },
              ))
            : (ne = p.jsxs("div", {
                ref: te ? R : void 0,
                role: te ? "button" : void 0,
                className: "x6ikm8r x10wlt62 xlyipyv",
                onClick: te,
                "data-testid": void 0,
                children: [ee, J],
              })),
        ne
      );
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  226,
);
