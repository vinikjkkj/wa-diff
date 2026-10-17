__d(
  "WAWebMessageGroupNotificationBodyText",
  [
    "fbt",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebChatCommunityUtils",
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebFormatAddNotification",
    "WAWebFormatAllowNonAdminSubGroupCreationNotification",
    "WAWebFormatAnnounceNotification",
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
    "WAWebGroupAgentAddAttribution",
    "WAWebGroupAgentProfileRouting",
    "WAWebGroupMetadataGetters",
    "WAWebMemberShareGroupHistoryModeFormatSystemMessageText",
    "WAWebMessageCommunityEmptySubgroupWelcome.react",
    "WAWebMessageCommunityEmptySubgroupWelcomeTitle.react",
    "WAWebMessageCommunityGeneralChatAutoAddDisabledNotification.react",
    "WAWebMessageCommunityGeneralChatWelcome.react",
    "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
    "WAWebMessageCommunityLinkGroup.react",
    "WAWebMessageCommunityLinkGroupTitle.react",
    "WAWebMessageCommunitySubgroupWelcome.react",
    "WAWebMessageCommunitySubgroupWelcomeTitle.react",
    "WAWebMessageCommunityWelcomeAdmin.react",
    "WAWebMessageCommunityWelcomeAdminTitle.react",
    "WAWebMessageCommunityWelcomeMember.react",
    "WAWebMessageCommunityWelcomeMemberTitle.react",
    "WAWebMessageCommunityWelcomeSubgroup.react",
    "WAWebMsgModelUtils",
    "WAWebStateUtils",
    "WAWebSystemMessageGatingUtils",
    "WAWebSystemMessagesUtils",
    "WAWebWid",
    "WAWebWidFormat",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageActionTextStylingEnabled();
    function p(e) {
      var t = e.chat,
        n = e.clickable,
        r = e.id;
      return (
        r &&
        n &&
        o("WAWebGroupAgentProfileRouting").getGroupAgentProfileDestination(
          r,
          t,
        ) == null &&
        (!r.isUser() ||
          !o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(
            t,
            o("WAWebContactCollection").ContactCollection.gadd(r),
          ))
      );
    }
    function _(t) {
      var n,
        a = t.clickable,
        i = t.isLastMsg,
        l = t.msg,
        c = l.author,
        _ = l.body,
        f = l.subtype,
        g = l.templateParams,
        h = ((n = l.recipients) != null ? n : []).filter(function (e) {
          return e instanceof r("WAWebWid");
        }),
        y = o("WAWebFrontendMsgGetters").getChat(l.unsafe()),
        C = o("WAWebMsgModelUtils").getMsgDisplayName(l.unsafe()),
        b = a ? "group_system_message" : void 0,
        v =
          c instanceof r("WAWebWid")
            ? o("WAWebFormatParticipantNames").getFormattedName({
                clickable: p({ chat: y, clickable: a, id: c }),
                jid: c,
                tabIndex: "0",
                unknownUserLogContext: b,
              })
            : null,
        S = h[0],
        R = S
          ? o("WAWebFormatParticipantNames").getFormattedName({
              clickable: p({ chat: y, clickable: a, id: S }),
              jid: S,
              tabIndex: "0",
              unknownUserLogContext: b,
            })
          : null,
        L = o("WAWebFormatParticipantNames").getFormattedNames(
          h,
          a &&
            h.length === 1 &&
            !(
              y.groupMetadata != null &&
              o("WAWebGroupMetadataGetters").getIsCag(y.groupMetadata)
            ) &&
            (!o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              !h[0].isBot()) &&
            o("WAWebGroupAgentProfileRouting").getGroupAgentProfileDestination(
              h[0],
              y,
            ) == null,
          void 0,
          "0",
          b,
        );
      switch (f) {
        case "add":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatAddNotification",
            ).formatAddNotification({
              author: c,
              authorClickable: v,
              museAgentAddAttribution: o(
                "WAWebGroupAgentAddAttribution",
              ).groupAgentAddAttributionFromBody(_),
              subject: S,
              subjectClickable: R,
              participantsClickable: L,
              recipients: h,
            }),
            isBodyTextClickable: !!v || !!R || !!L,
          };
        case "remove":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatRemoveNotification",
            ).formatRemoveNotification({
              author: c,
              authorClickable: v,
              subject: S,
              subjectClickable: R,
              participantsClickable: L,
            }),
          };
        case "leave":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatLeaveNotification",
            ).formatLeaveNotification({
              body: _,
              subject: S,
              participantsClickable: L,
            }),
          };
        case "picture":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatPictureNotification",
            ).formatPictureNotification({
              author: c,
              authorClickable: v,
              body: _,
            }),
          };
        case "subject": {
          var E = d.jsx(o("WAWebSystemMessagesUtils").FormattedText, {
            text: _,
          });
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatSubjectNotification",
            ).formatSubjectNotification({
              author: c,
              authorClickable: v,
              chat: y,
              subjectValue: E,
            }),
          };
        }
        case "modify": {
          var k = o("WAWebWidFormat").widToFormattedUser(c),
            I = o("WAWebWidFormat").widToFormattedUser(S);
          return k === C
            ? {
                l10nBodyTextInstance: s._(
                  /*BTDS*/ "{name} changed to {new_number}",
                  [s._param("name", C), s._param("new_number", I)],
                ),
              }
            : {
                l10nBodyTextInstance: s._(
                  /*BTDS*/ "{name} changed their phone number to a new number.",
                  [s._param("name", C)],
                ),
              };
        }
        case "create":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatCreateNotification",
            ).formatCreateNotification({
              chat: y,
              author: c,
              authorClickable: v,
              groupSubject: _,
              groupSubjectAsString: !1,
            }),
          };
        case "delete":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatDeleteNotification",
            ).formatDeleteNotification({ chat: y }),
          };
        case "promote":
        case "demote":
        case "linked_group_promote":
        case "linked_group_demote":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatPromoteDemoteNotification",
            ).formatPromoteDemoteNotification({
              subtype: f,
              subject: S,
              subjectClickable: R,
              participantsClickable: L,
              participantsCount: h.length,
            }),
          };
        case "invite":
          return o("WAWebSystemMessagesUtils").isMe(S)
            ? {
                l10nBodyTextInstance: s._(
                  /*BTDS*/ "You joined via an invite link",
                ),
              }
            : {
                l10nBodyTextInstance: s._(
                  /*BTDS*/ "{name} joined via an invite link",
                  [s._param("name", R)],
                ),
              };
        case "revoke_invite":
          return o("WAWebSystemMessagesUtils").isMe(c)
            ? {
                l10nBodyTextInstance: m
                  ? s._(/*BTDS*/ "You reset this group's invite link")
                  : s._(
                      /*BTDS*/ "You reset this group's invite link. Click to view the new invite link",
                    ),
              }
            : {
                l10nBodyTextInstance: m
                  ? s._(/*BTDS*/ "{name} reset this group's invite link", [
                      s._param("name", v),
                    ])
                  : s._(
                      /*BTDS*/ "{name} reset this group's invite link. Click to view the new invite link",
                      [s._param("name", v)],
                    ),
              };
        case "description":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatDescriptionNotification",
            ).formatDescriptionNotification({ author: c, authorClickable: v }),
          };
        case "parent_group_description":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatDescriptionNotification",
            ).formatDescriptionNotification({
              author: c,
              authorClickable: v,
              isParentGroup: !0,
            }),
          };
        case "announce":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatAnnounceNotification",
            ).formatAnnounceNotification({
              author: c,
              authorClickable: v,
              body: _,
            }),
          };
        case "restrict":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatRestrictNotification",
            ).formatRestrictNotification({
              author: c,
              authorClickable: v,
              templateParams: g,
            }),
          };
        case "no_frequently_forwarded":
          return _ === "on"
            ? o("WAWebSystemMessagesUtils").isMe(c)
              ? {
                  l10nBodyTextInstance: s._(
                    /*BTDS*/ "You changed this group's settings to not allow messages that have been forwarded many times.",
                  ),
                }
              : {
                  l10nBodyTextInstance: s._(
                    /*BTDS*/ "{name} changed this group's settings to not allow messages that have been forwarded many times.",
                    [s._param("name", v)],
                  ),
                }
            : o("WAWebSystemMessagesUtils").isMe(c)
              ? {
                  l10nBodyTextInstance: s._(
                    /*BTDS*/ "You changed this group's settings to allow messages that have been forwarded many times.",
                  ),
                }
              : {
                  l10nBodyTextInstance: s._(
                    /*BTDS*/ "{name} changed this group's settings to allow messages that have been forwarded many times.",
                    [s._param("name", v)],
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
              s._param("participants", L),
            ]),
          };
        case "v4_add_invite_join":
          return {
            l10nBodyTextInstance: s._(
              /*BTDS*/ "{participants} joined using your invite",
              [s._param("participants", L)],
            ),
          };
        case "ephemeral":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatEphemeralSetting",
            ).formatEphemeralSetting(o("WAWebStateUtils").unproxy(l.unsafe())),
          };
        case "initial_pHash_mismatch":
        case "default_sub_group_promote":
        case "default_sub_group_demote":
          return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(y)
            ? {
                l10nBodyTextInstance: m
                  ? s._(/*BTDS*/ "Community members have changed")
                  : s._(
                      /*BTDS*/ "Community members have changed. Click to view",
                    ),
              }
            : {
                l10nBodyTextInstance: m
                  ? s._(/*BTDS*/ "Group members have changed")
                  : s._(/*BTDS*/ "Group members have changed. Click to view"),
              };
        case "growth_locked":
          return {
            l10nBodyTextInstance: m
              ? s._(/*BTDS*/ "Invite via link became unavailable")
              : s._(
                  /*BTDS*/ "Invite via link became unavailable. Click to learn more",
                ),
          };
        case "growth_unlocked":
          return {
            l10nBodyTextInstance: m
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
            ).formatLinkNotification({
              author: c,
              clickable: a,
              subject: S,
              subtype: f,
              templateParams: g,
            }),
          };
        case "community_create":
          return {
            l10nBodyTextInstance: i
              ? o(
                  "WAWebMessageCommunityWelcomeAdminTitle.react",
                ).communityWelcomeAdminTitle({
                  author: c,
                  chat: y,
                  templateParams: g,
                })
              : d.jsx(
                  o("WAWebMessageCommunityWelcomeAdmin.react")
                    .MessageCommunityWelcomeAdmin,
                  { author: c, chat: y, templateParams: g },
                ),
          };
        case "community_participant_add_rich":
        case "community_invite_rich":
        case "community_invite_auto_add_rich":
          return {
            l10nBodyTextInstance: i
              ? o(
                  "WAWebMessageCommunityWelcomeMemberTitle.react",
                ).communityWelcomeMemberTitle()
              : d.jsx(
                  o("WAWebMessageCommunityWelcomeMember.react")
                    .MessageCommunityWelcomeMember,
                  { templateParams: g, clickable: a, author: c, chat: y },
                ),
          };
        case "subgroup_admin_triggered_auto_add":
        case "subgroup_admin_triggered_invite_auto_add":
          return {
            l10nBodyTextInstance: i
              ? o(
                  "WAWebMessageCommunityWelcomeMemberTitle.react",
                ).communityWelcomeMemberTitle()
              : d.jsx(r("WAWebMessageCommunityWelcomeSubgroup.react"), {
                  templateParams: g,
                }),
          };
        case "sub_group_participant_add_rich":
        case "sub_group_invite_rich":
          return {
            l10nBodyTextInstance: i
              ? o(
                  "WAWebMessageCommunitySubgroupWelcomeTitle.react",
                ).communitySubgroupWelcomeTitle({
                  templateParams: g,
                  clickable: a,
                  author: c,
                })
              : d.jsx(
                  o("WAWebMessageCommunitySubgroupWelcome.react")
                    .MessageCommunitySubgroupWelcome,
                  { chat: y, author: c, templateParams: g, clickable: a },
                ),
          };
        case "community_link_parent_group_rich":
          return {
            l10nBodyTextInstance: i
              ? o(
                  "WAWebMessageCommunityLinkGroupTitle.react",
                ).communityLinkGroupTitle({
                  templateParams: g,
                  clickable: a,
                  author: c,
                })
              : d.jsx(
                  o("WAWebMessageCommunityLinkGroup.react")
                    .MessageCommunityLinkGroup,
                  { chat: y, author: c, templateParams: g, clickable: a },
                ),
          };
        case "ephemeral_keep_in_chat":
          return {
            l10nBodyTextInstance: m
              ? s._(
                  /*BTDS*/ "Disappearing messages now support keeping messages in the chat.",
                )
              : s._(
                  /*BTDS*/ "Disappearing messages now support keeping messages in the chat. Click to learn more.",
                ),
          };
        case "membership_approval_mode":
        case "membership_approval_request":
        case "created_membership_requests":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatMembershipApprovalNotification",
            ).formatMembershipApprovalNotification(f, c, g),
          };
        case "allow_admin_reports":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatReportToAdminNotification",
            ).formatReportToAdminNotification(c, g),
          };
        case "allow_non_admin_sub_group_creation":
          return {
            l10nBodyTextInstance: r(
              "WAWebFormatAllowNonAdminSubGroupCreationNotification",
            )(y, g),
          };
        case "empty_subgroup_create":
          return {
            l10nBodyTextInstance: i
              ? o(
                  "WAWebMessageCommunityEmptySubgroupWelcomeTitle.react",
                ).communityEmptySubgroupWelcomeTitle(y.formattedTitle)
              : d.jsx(r("WAWebMessageCommunityEmptySubgroupWelcome.react"), {
                  templateParams: g,
                  subgroupChat: y,
                }),
          };
        case "member_add_mode": {
          var T,
            D = !!((T = y.groupMetadata) != null && T.participants.iAmAdmin());
          return {
            l10nBodyTextInstance: r("WAWebFormatMemberAddModeNotification")(
              c,
              D,
              g,
            ),
          };
        }
        case "member_link_mode": {
          var x,
            $ = !!((x = y.groupMetadata) != null && x.participants.iAmAdmin());
          return {
            l10nBodyTextInstance: r("WAWebFormatMemberLinkModeNotification")(
              c,
              $,
              g,
            ),
          };
        }
        case "join_flood_notification": {
          var P,
            N = !!((P = y.groupMetadata) != null && P.participants.iAmAdmin());
          return N
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
            )(c, g, a),
          };
        case "general_chat_add":
          return {
            l10nBodyTextInstance: i
              ? o(
                  "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
                ).communityGeneralChatWelcomeTitle(y.formattedTitle)
              : d.jsx(r("WAWebMessageCommunityGeneralChatWelcome.react"), {
                  templateParams: g,
                  subgroupChat: y,
                  author: c,
                }),
          };
        case "general_chat_auto_add_disabled":
          return {
            l10nBodyTextInstance: o(
              "WAWebMessageCommunityGeneralChatAutoAddDisabledNotification.react",
            ).communityGeneralChatAutoAddDisabledNotification(
              y.formattedTitle,
              g,
            ),
          };
        case "community_owner_update":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatCommunityOwnerUpdateNotification",
            ).formatCommunityOwnerUpdateNotification({
              author: c,
              templateParams: g,
              clickable: a,
            }),
          };
        case "is_capi_hosted_group": {
          var M;
          if (((M = y.groupMetadata) == null ? void 0 : M.hasCapi) === !0)
            return {
              l10nBodyTextInstance: "Test capi notification for group chat",
            };
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
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
            )({ msg: l.unsafe(), options: {} }),
          };
        default:
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "wa:groupNotification:unknown message subtype: ",
                "",
              ])),
            f,
          );
          break;
      }
      return { l10nBodyTextInstance: null };
    }
    l.getMsgTypeAndGroupBodyText = _;
  },
  226,
);
