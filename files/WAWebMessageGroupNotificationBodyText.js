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
    "WAWebMsgModelUtils",
    "WAWebStateUtils",
    "WAWebSystemMessageGatingUtils",
    "WAWebSystemMessagesUtils",
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
    function p(e, t, n) {
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
    function _(t) {
      var n,
        a = t.clickable,
        i = t.isLastMsg,
        l = t.msg,
        c = l.subtype,
        _ = l.author,
        f = l.body,
        g = l.recipients,
        h = g === void 0 ? [] : g,
        y = l.templateParams,
        C = o("WAWebFrontendMsgGetters").getChat(l.unsafe()),
        b = o("WAWebMsgModelUtils").getMsgDisplayName(l.unsafe()),
        v = _
          ? o("WAWebFormatParticipantNames").getFormattedName(
              _,
              p(a, C, _),
              void 0,
              "0",
            )
          : null,
        S = h[0],
        R = S
          ? o("WAWebFormatParticipantNames").getFormattedName(
              S,
              p(a, C, S),
              void 0,
              "0",
            )
          : null,
        L = o("WAWebFormatParticipantNames").getFormattedNames(
          h,
          a &&
            h.length === 1 &&
            !((n = C.groupMetadata) != null && n.isCag) &&
            (!o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              !h[0].isBot()),
          void 0,
          "0",
        );
      switch (c) {
        case "add":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatAddNotification",
            ).formatAddNotification({
              author: _,
              authorClickable: v,
              subject: S,
              subjectClickable: R,
              participantsClickable: L,
            }),
            isBodyTextClickable: !!v || !!R || !!L,
          };
        case "remove":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatRemoveNotification",
            ).formatRemoveNotification({
              author: _,
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
              body: f,
              subject: S,
              participantsClickable: L,
            }),
          };
        case "picture":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatPictureNotification",
            ).formatPictureNotification({
              author: _,
              authorClickable: v,
              body: f,
            }),
          };
        case "subject": {
          var E = d.jsx(o("WAWebSystemMessagesUtils").FormattedText, {
            text: f,
          });
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatSubjectNotification",
            ).formatSubjectNotification({
              author: _,
              authorClickable: v,
              chat: C,
              subjectValue: E,
            }),
          };
        }
        case "modify": {
          var k = o("WAWebWidFormat").widToFormattedUser(_),
            I = o("WAWebWidFormat").widToFormattedUser(S);
          return k === b
            ? {
                l10nBodyTextInstance: s._(
                  /*BTDS*/ "{name} changed to {new_number}",
                  [s._param("name", b), s._param("new_number", I)],
                ),
              }
            : {
                l10nBodyTextInstance: s._(
                  /*BTDS*/ "{name} changed their phone number to a new number.",
                  [s._param("name", b)],
                ),
              };
        }
        case "create":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatCreateNotification",
            ).formatCreateNotification({
              chat: C,
              author: _,
              authorClickable: v,
              groupSubject: f,
              groupSubjectAsString: !1,
            }),
          };
        case "delete":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatDeleteNotification",
            ).formatDeleteNotification({ chat: C }),
          };
        case "promote":
        case "demote":
        case "linked_group_promote":
        case "linked_group_demote":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatPromoteDemoteNotification",
            ).formatPromoteDemoteNotification({
              subtype: c,
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
          return o("WAWebSystemMessagesUtils").isMe(_)
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
            ).formatDescriptionNotification({ author: _, authorClickable: v }),
          };
        case "parent_group_description":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatDescriptionNotification",
            ).formatDescriptionNotification({
              author: _,
              authorClickable: v,
              isParentGroup: !0,
            }),
          };
        case "announce":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatAnnounceNotification",
            ).formatAnnounceNotification({
              author: _,
              authorClickable: v,
              body: f,
            }),
          };
        case "restrict":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatRestrictNotification",
            ).formatRestrictNotification({
              author: _,
              authorClickable: v,
              templateParams: y,
            }),
          };
        case "no_frequently_forwarded":
          return f === "on"
            ? o("WAWebSystemMessagesUtils").isMe(_)
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
            : o("WAWebSystemMessagesUtils").isMe(_)
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
          return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(C)
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
              author: _,
              clickable: a,
              subject: S,
              subtype: c,
              templateParams: y,
            }),
          };
        case "community_create":
          return {
            l10nBodyTextInstance: i
              ? o(
                  "WAWebMessageCommunityWelcomeAdmin.react",
                ).communityWelcomeAdminTitle({
                  author: _,
                  chat: C,
                  templateParams: y,
                })
              : d.jsx(
                  o("WAWebMessageCommunityWelcomeAdmin.react")
                    .MessageCommunityWelcomeAdmin,
                  { author: _, chat: C, templateParams: y },
                ),
          };
        case "community_participant_add_rich":
        case "community_invite_rich":
        case "community_invite_auto_add_rich":
          return {
            l10nBodyTextInstance: i
              ? o(
                  "WAWebMessageCommunityWelcomeMember.react",
                ).communityWelcomeMemberTitle()
              : d.jsx(
                  o("WAWebMessageCommunityWelcomeMember.react")
                    .MessageCommunityWelcomeMember,
                  { templateParams: y, clickable: a, author: _, chat: C },
                ),
          };
        case "subgroup_admin_triggered_auto_add":
        case "subgroup_admin_triggered_invite_auto_add":
          return {
            l10nBodyTextInstance: i
              ? o(
                  "WAWebMessageCommunityWelcomeMember.react",
                ).communityWelcomeMemberTitle()
              : d.jsx(r("WAWebMessageCommunityWelcomeSubgroup.react"), {
                  templateParams: y,
                }),
          };
        case "sub_group_participant_add_rich":
        case "sub_group_invite_rich":
          return {
            l10nBodyTextInstance: i
              ? o(
                  "WAWebMessageCommunitySubgroupWelcome.react",
                ).communitySubgroupWelcomeTitle({
                  templateParams: y,
                  clickable: a,
                  author: _,
                })
              : d.jsx(
                  o("WAWebMessageCommunitySubgroupWelcome.react")
                    .MessageCommunitySubgroupWelcome,
                  { chat: C, author: _, templateParams: y, clickable: a },
                ),
          };
        case "community_link_parent_group_rich":
          return {
            l10nBodyTextInstance: i
              ? o(
                  "WAWebMessageCommunityLinkGroup.react",
                ).communityLinkGroupTitle({
                  templateParams: y,
                  clickable: a,
                  author: _,
                })
              : d.jsx(
                  o("WAWebMessageCommunityLinkGroup.react")
                    .MessageCommunityLinkGroup,
                  { chat: C, author: _, templateParams: y, clickable: a },
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
            ).formatMembershipApprovalNotification(c, _, y),
          };
        case "allow_admin_reports":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatReportToAdminNotification",
            ).formatReportToAdminNotification(_, y),
          };
        case "allow_non_admin_sub_group_creation":
          return {
            l10nBodyTextInstance: r(
              "WAWebFormatAllowNonAdminSubGroupCreationNotification",
            )(C, y),
          };
        case "empty_subgroup_create":
          return {
            l10nBodyTextInstance: i
              ? o(
                  "WAWebMessageCommunityEmptySubgroupWelcomeTitle.react",
                ).communityEmptySubgroupWelcomeTitle(C.formattedTitle)
              : d.jsx(r("WAWebMessageCommunityEmptySubgroupWelcome.react"), {
                  templateParams: y,
                  subgroupChat: C,
                }),
          };
        case "member_add_mode": {
          var T,
            D = !!((T = C.groupMetadata) != null && T.participants.iAmAdmin());
          return {
            l10nBodyTextInstance: r("WAWebFormatMemberAddModeNotification")(
              _,
              D,
              y,
            ),
          };
        }
        case "member_link_mode": {
          var x,
            $ = !!((x = C.groupMetadata) != null && x.participants.iAmAdmin());
          return {
            l10nBodyTextInstance: r("WAWebFormatMemberLinkModeNotification")(
              _,
              $,
              y,
            ),
          };
        }
        case "join_flood_notification": {
          var P,
            N = !!((P = C.groupMetadata) != null && P.participants.iAmAdmin());
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
            )(_, y, a),
          };
        case "general_chat_add":
          return {
            l10nBodyTextInstance: i
              ? o(
                  "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
                ).communityGeneralChatWelcomeTitle(C.formattedTitle)
              : d.jsx(r("WAWebMessageCommunityGeneralChatWelcome.react"), {
                  templateParams: y,
                  subgroupChat: C,
                  author: _,
                }),
          };
        case "general_chat_auto_add_disabled":
          return {
            l10nBodyTextInstance: o(
              "WAWebMessageCommunityGeneralChatAutoAddDisabledNotification.react",
            ).communityGeneralChatAutoAddDisabledNotification(
              C.formattedTitle,
              y,
            ),
          };
        case "community_owner_update":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatCommunityOwnerUpdateNotification",
            ).formatCommunityOwnerUpdateNotification({
              author: _,
              templateParams: y,
              clickable: a,
            }),
          };
        case "is_capi_hosted_group": {
          var M;
          if (((M = C.groupMetadata) == null ? void 0 : M.hasCapi) === !0)
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
            c,
          );
          break;
      }
      return { l10nBodyTextInstance: null };
    }
    l.getMsgTypeAndGroupBodyText = _;
  },
  226,
);
