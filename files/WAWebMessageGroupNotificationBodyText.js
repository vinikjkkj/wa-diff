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
        (!r.isUser() ||
          !o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(
            t,
            o("WAWebContactCollection").ContactCollection.gadd(r),
          ))
      );
    }
    function _(t) {
      var n = t.clickable,
        a = t.isLastMsg,
        i = t.msg,
        l = i.subtype,
        c = i.author,
        _ = i.body,
        f = i.recipients,
        g = f === void 0 ? [] : f,
        h = i.templateParams,
        y = o("WAWebFrontendMsgGetters").getChat(i.unsafe()),
        C = o("WAWebMsgModelUtils").getMsgDisplayName(i.unsafe()),
        b = c
          ? o("WAWebFormatParticipantNames").getFormattedName(
              c,
              p({ chat: y, clickable: n, id: c }),
              void 0,
              "0",
            )
          : null,
        v = g[0],
        S = v
          ? o("WAWebFormatParticipantNames").getFormattedName(
              v,
              p({ chat: y, clickable: n, id: v }),
              void 0,
              "0",
            )
          : null,
        R = o("WAWebFormatParticipantNames").getFormattedNames(
          g,
          n &&
            g.length === 1 &&
            !(
              y.groupMetadata != null &&
              o("WAWebGroupMetadataGetters").getIsCag(y.groupMetadata)
            ) &&
            (!o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              !g[0].isBot()),
          void 0,
          "0",
        );
      switch (l) {
        case "add":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatAddNotification",
            ).formatAddNotification({
              author: c,
              authorClickable: b,
              subject: v,
              subjectClickable: S,
              participantsClickable: R,
            }),
            isBodyTextClickable: !!b || !!S || !!R,
          };
        case "remove":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatRemoveNotification",
            ).formatRemoveNotification({
              author: c,
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
              body: _,
              subject: v,
              participantsClickable: R,
            }),
          };
        case "picture":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatPictureNotification",
            ).formatPictureNotification({
              author: c,
              authorClickable: b,
              body: _,
            }),
          };
        case "subject": {
          var L = d.jsx(o("WAWebSystemMessagesUtils").FormattedText, {
            text: _,
          });
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatSubjectNotification",
            ).formatSubjectNotification({
              author: c,
              authorClickable: b,
              chat: y,
              subjectValue: L,
            }),
          };
        }
        case "modify": {
          var E = o("WAWebWidFormat").widToFormattedUser(c),
            k = o("WAWebWidFormat").widToFormattedUser(v);
          return E === C
            ? {
                l10nBodyTextInstance: s._(
                  /*BTDS*/ "{name} changed to {new_number}",
                  [s._param("name", C), s._param("new_number", k)],
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
              authorClickable: b,
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
              subtype: l,
              subject: v,
              subjectClickable: S,
              participantsClickable: R,
              participantsCount: g.length,
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
            ).formatDescriptionNotification({ author: c, authorClickable: b }),
          };
        case "parent_group_description":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatDescriptionNotification",
            ).formatDescriptionNotification({
              author: c,
              authorClickable: b,
              isParentGroup: !0,
            }),
          };
        case "announce":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatAnnounceNotification",
            ).formatAnnounceNotification({
              author: c,
              authorClickable: b,
              body: _,
            }),
          };
        case "restrict":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatRestrictNotification",
            ).formatRestrictNotification({
              author: c,
              authorClickable: b,
              templateParams: h,
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
                    [s._param("name", b)],
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
            ).formatEphemeralSetting(o("WAWebStateUtils").unproxy(i.unsafe())),
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
              clickable: n,
              subject: v,
              subtype: l,
              templateParams: h,
            }),
          };
        case "community_create":
          return {
            l10nBodyTextInstance: a
              ? o(
                  "WAWebMessageCommunityWelcomeAdminTitle.react",
                ).communityWelcomeAdminTitle({
                  author: c,
                  chat: y,
                  templateParams: h,
                })
              : d.jsx(
                  o("WAWebMessageCommunityWelcomeAdmin.react")
                    .MessageCommunityWelcomeAdmin,
                  { author: c, chat: y, templateParams: h },
                ),
          };
        case "community_participant_add_rich":
        case "community_invite_rich":
        case "community_invite_auto_add_rich":
          return {
            l10nBodyTextInstance: a
              ? o(
                  "WAWebMessageCommunityWelcomeMemberTitle.react",
                ).communityWelcomeMemberTitle()
              : d.jsx(
                  o("WAWebMessageCommunityWelcomeMember.react")
                    .MessageCommunityWelcomeMember,
                  { templateParams: h, clickable: n, author: c, chat: y },
                ),
          };
        case "subgroup_admin_triggered_auto_add":
        case "subgroup_admin_triggered_invite_auto_add":
          return {
            l10nBodyTextInstance: a
              ? o(
                  "WAWebMessageCommunityWelcomeMemberTitle.react",
                ).communityWelcomeMemberTitle()
              : d.jsx(r("WAWebMessageCommunityWelcomeSubgroup.react"), {
                  templateParams: h,
                }),
          };
        case "sub_group_participant_add_rich":
        case "sub_group_invite_rich":
          return {
            l10nBodyTextInstance: a
              ? o(
                  "WAWebMessageCommunitySubgroupWelcomeTitle.react",
                ).communitySubgroupWelcomeTitle({
                  templateParams: h,
                  clickable: n,
                  author: c,
                })
              : d.jsx(
                  o("WAWebMessageCommunitySubgroupWelcome.react")
                    .MessageCommunitySubgroupWelcome,
                  { chat: y, author: c, templateParams: h, clickable: n },
                ),
          };
        case "community_link_parent_group_rich":
          return {
            l10nBodyTextInstance: a
              ? o(
                  "WAWebMessageCommunityLinkGroupTitle.react",
                ).communityLinkGroupTitle({
                  templateParams: h,
                  clickable: n,
                  author: c,
                })
              : d.jsx(
                  o("WAWebMessageCommunityLinkGroup.react")
                    .MessageCommunityLinkGroup,
                  { chat: y, author: c, templateParams: h, clickable: n },
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
            ).formatMembershipApprovalNotification(l, c, h),
          };
        case "allow_admin_reports":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatReportToAdminNotification",
            ).formatReportToAdminNotification(c, h),
          };
        case "allow_non_admin_sub_group_creation":
          return {
            l10nBodyTextInstance: r(
              "WAWebFormatAllowNonAdminSubGroupCreationNotification",
            )(y, h),
          };
        case "empty_subgroup_create":
          return {
            l10nBodyTextInstance: a
              ? o(
                  "WAWebMessageCommunityEmptySubgroupWelcomeTitle.react",
                ).communityEmptySubgroupWelcomeTitle(y.formattedTitle)
              : d.jsx(r("WAWebMessageCommunityEmptySubgroupWelcome.react"), {
                  templateParams: h,
                  subgroupChat: y,
                }),
          };
        case "member_add_mode": {
          var I,
            T = !!((I = y.groupMetadata) != null && I.participants.iAmAdmin());
          return {
            l10nBodyTextInstance: r("WAWebFormatMemberAddModeNotification")(
              c,
              T,
              h,
            ),
          };
        }
        case "member_link_mode": {
          var D,
            x = !!((D = y.groupMetadata) != null && D.participants.iAmAdmin());
          return {
            l10nBodyTextInstance: r("WAWebFormatMemberLinkModeNotification")(
              c,
              x,
              h,
            ),
          };
        }
        case "join_flood_notification": {
          var $,
            P = !!(($ = y.groupMetadata) != null && $.participants.iAmAdmin());
          return P
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
            )(c, h, n),
          };
        case "general_chat_add":
          return {
            l10nBodyTextInstance: a
              ? o(
                  "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
                ).communityGeneralChatWelcomeTitle(y.formattedTitle)
              : d.jsx(r("WAWebMessageCommunityGeneralChatWelcome.react"), {
                  templateParams: h,
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
              h,
            ),
          };
        case "community_owner_update":
          return {
            l10nBodyTextInstance: o(
              "WAWebFormatCommunityOwnerUpdateNotification",
            ).formatCommunityOwnerUpdateNotification({
              author: c,
              templateParams: h,
              clickable: n,
            }),
          };
        case "is_capi_hosted_group": {
          var N;
          if (((N = y.groupMetadata) == null ? void 0 : N.hasCapi) === !0)
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
            )({ msg: i.unsafe(), options: {} }),
          };
        default:
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "wa:groupNotification:unknown message subtype: ",
                "",
              ])),
            l,
          );
          break;
      }
      return { l10nBodyTextInstance: null };
    }
    l.getMsgTypeAndGroupBodyText = _;
  },
  226,
);
