__d(
  "WAWebFormatGroupNotification",
  [
    "fbt",
    "WALogger",
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
    "WAWebFormatMembershipApprovalNotification",
    "WAWebFormatParticipantNames",
    "WAWebFormatPictureNotification",
    "WAWebFormatPromoteDemoteNotification",
    "WAWebFormatRemoveNotification",
    "WAWebFormatReportToAdminNotification",
    "WAWebFormatRestrictNotification",
    "WAWebFormatSubjectNotification",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageCommunityEmptySubgroupWelcomeTitle.react",
    "WAWebMessageCommunityGeneralChatAutoAddDisabledNotification.react",
    "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
    "WAWebMessageCommunityLinkGroup.react",
    "WAWebMessageCommunitySubgroupWelcome.react",
    "WAWebMessageCommunityWelcomeAdmin.react",
    "WAWebMessageCommunityWelcomeMember.react",
    "WAWebUserPrefsMeUser",
    "WAWebWidFormat",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(t, n) {
      var a = "",
        i = t.get("type");
      if (i !== "gp2") return a;
      var l = t.get("subtype"),
        u = t.displayName(),
        c = t.get("author"),
        d = t.get("body"),
        m,
        p,
        _ = !!n,
        f = t.recipients || [],
        g = o("WAWebFormatParticipantNames").getFormattedNames(f, !1),
        h = f[0],
        y = h ? o("WAWebContactCollection").ContactCollection.get(h) : void 0,
        C = y
          ? o("WAWebFrontendContactGetters").getFormattedName(y)
          : h
            ? o("WAWebWidFormat").widToFormattedUser(h)
            : "";
      switch (l) {
        case "add":
          a = o("WAWebFormatAddNotification").formatAddNotification({
            author: c,
            authorClickable: u,
            subject: h,
            subjectClickable: C,
            participantsClickable: g,
          });
          break;
        case "remove":
          a = o("WAWebFormatRemoveNotification").formatRemoveNotification({
            author: c,
            authorClickable: u,
            subject: h,
            subjectClickable: C,
            participantsClickable: g,
          });
          break;
        case "leave":
          a = o("WAWebFormatLeaveNotification").formatLeaveNotification({
            body: d,
            subject: h,
            participantsClickable: g,
          });
          break;
        case "picture":
          a = o("WAWebFormatPictureNotification").formatPictureNotification({
            author: c,
            authorClickable: u,
            body: d,
          });
          break;
        case "subject":
          a = o("WAWebFormatSubjectNotification").formatSubjectNotification(
            o("WAWebFrontendMsgGetters").getChat(t),
            c,
            u,
            d,
          );
          break;
        case "modify":
          ((m = o("WAWebWidFormat").widToFormattedUser(c)),
            (p = o("WAWebWidFormat").widToFormattedUser(h)),
            (a =
              m === u
                ? s._(/*BTDS*/ "{name} changed to {new_number}", [
                    s._param("name", u),
                    s._param("new_number", p),
                  ])
                : s._(
                    /*BTDS*/ "{name} changed their phone number to a new number.",
                    [s._param("name", u)],
                  )));
          break;
        case "create":
          a = o("WAWebFormatCreateNotification").formatCreateNotification({
            author: c,
            authorClickable: u,
            groupSubject: d,
            groupSubjectAsString: !0,
          });
          break;
        case "delete":
          a = o("WAWebFormatDeleteNotification").formatDeleteNotification({
            chat: o("WAWebFrontendMsgGetters").getChat(t),
          });
          break;
        case "promote":
        case "demote":
        case "linked_group_promote":
        case "linked_group_demote":
          a = o(
            "WAWebFormatPromoteDemoteNotification",
          ).formatPromoteDemoteNotification({
            subtype: l,
            subject: h,
            subjectClickable: C,
            participantsClickable: g,
            participantsCount: f.length,
          });
          break;
        case "invite":
          a = o("WAWebUserPrefsMeUser").isMeAccount(h)
            ? s._(/*BTDS*/ "You joined via an invite link")
            : s._(/*BTDS*/ "{name} joined via an invite link", [
                s._param("name", C),
              ]);
          break;
        case "revoke_invite":
          a = o("WAWebUserPrefsMeUser").isMeAccount(c)
            ? s._(
                /*BTDS*/ "You reset this group's invite link. Click to view the new invite link.",
              )
            : s._(
                /*BTDS*/ "{name} reset this group's invite link. Click to view the new invite link.",
                [s._param("name", u)],
              );
          break;
        case "description":
          a = o(
            "WAWebFormatDescriptionNotification",
          ).formatDescriptionNotification({
            author: c,
            authorClickable: u,
            shouldFormatAsLastMsg: _,
          });
          break;
        case "parent_group_description":
          a = o(
            "WAWebFormatDescriptionNotification",
          ).formatDescriptionNotification({
            author: c,
            authorClickable: u,
            isParentGroup: !0,
            shouldFormatAsLastMsg: _,
          });
          break;
        case "announce":
          a = o("WAWebFormatAnnounceNotification").formatAnnounceNotification({
            author: c,
            authorClickable: u,
            body: d,
          });
          break;
        case "restrict":
          a = o("WAWebFormatRestrictNotification").formatRestrictNotification({
            author: c,
            authorClickable: u,
            templateParams: t.templateParams,
          });
          break;
        case "no_frequently_forwarded":
          d === "on"
            ? (a = o("WAWebUserPrefsMeUser").isMeAccount(c)
                ? s._(
                    /*BTDS*/ "You changed this group's settings to not allow messages that have been forwarded many times.",
                  )
                : s._(
                    /*BTDS*/ "{name} changed this group's settings to not allow messages that have been forwarded many times.",
                    [s._param("name", u)],
                  ))
            : (a = o("WAWebUserPrefsMeUser").isMeAccount(c)
                ? s._(
                    /*BTDS*/ "You changed this group's settings to allow messages that have been forwarded many times.",
                  )
                : s._(
                    /*BTDS*/ "{name} changed this group's settings to allow messages that have been forwarded many times.",
                    [s._param("name", u)],
                  ));
          break;
        case "announce_msg_bounce":
          a = s._(/*BTDS*/ "Only admins can message this group.");
          break;
        case "v4_add_invite_sent":
          a = s
            ._(/*BTDS*/ "You invited {participants}", [
              s._param("participants", g),
            ])
            .toString();
          break;
        case "v4_add_invite_join":
          a = s
            ._(/*BTDS*/ "{participants} joined using your invite", [
              s._param("participants", g),
            ])
            .toString();
          break;
        case "ephemeral":
          return o("WAWebFormatEphemeralSetting").formatEphemeralSetting(t);
        case "growth_locked":
          a = s._(
            /*BTDS*/ "Invite via link became unavailable. Click to learn more.",
          );
          break;
        case "growth_unlocked":
          a = s._(
            /*BTDS*/ "Invite via link became available again. Click to view the new invite link.",
          );
          break;
        case "linked_group_join":
        case "parent_group_link":
        case "sibling_group_link":
        case "sub_group_link":
        case "parent_group_unlink":
        case "sibling_group_unlink":
        case "sub_group_unlink":
        case "integrity_parent_group_unlink":
        case "delete_parent_group":
        case "delete_parent_group_unlink":
        case "auto_add":
        case "default_sub_group_admin_add":
        case "invite_auto_add": {
          var b = o("WAWebFormatLinkNotification").formatLinkNotifAsFbt(
            l,
            c,
            h,
            t.templateParams,
          );
          b != null && (a = b);
          break;
        }
        case "community_participant_add_rich":
        case "community_invite_rich":
        case "community_invite_auto_add_rich":
        case "subgroup_admin_triggered_auto_add":
        case "subgroup_admin_triggered_invite_auto_add":
          a = o(
            "WAWebMessageCommunityWelcomeMember.react",
          ).communityWelcomeMemberTitle();
          break;
        case "sub_group_participant_add_rich":
        case "sub_group_invite_rich":
          a = o(
            "WAWebMessageCommunitySubgroupWelcome.react",
          ).communitySubgroupWelcomeTitle({
            templateParams: t.templateParams,
            clickable: !1,
            author: c,
          });
          break;
        case "community_link_parent_group_rich":
          a = o("WAWebMessageCommunityLinkGroup.react").communityLinkGroupTitle(
            { templateParams: t.templateParams, clickable: !1, author: c },
          );
          break;
        case "community_create":
          a = o(
            "WAWebMessageCommunityWelcomeAdmin.react",
          ).communityWelcomeAdminTitle({
            templateParams: t.templateParams,
            author: c,
            chat: o("WAWebFrontendMsgGetters").getChat(t),
          });
          break;
        case "membership_approval_mode":
        case "membership_approval_request":
        case "created_membership_requests":
          a = o(
            "WAWebFormatMembershipApprovalNotification",
          ).formatMembershipApprovalNotification(l, c, t.templateParams);
          break;
        case "ephemeral_keep_in_chat":
          a = s._(
            /*BTDS*/ "Disappearing messages now support keeping messages in the chat. Click to learn more.",
          );
          break;
        case "initial_pHash_mismatch":
        case "default_sub_group_promote":
        case "default_sub_group_demote":
          o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(
            o("WAWebFrontendMsgGetters").getChat(t),
          )
            ? (a = s._(
                /*BTDS*/ "Community members have changed. Click to view",
              ))
            : (a = s._(/*BTDS*/ "Group members have changed. Click to view"));
          break;
        case "allow_admin_reports":
          a = o(
            "WAWebFormatReportToAdminNotification",
          ).formatReportToAdminNotification(c, t.templateParams);
          break;
        case "allow_non_admin_sub_group_creation":
          a = r("WAWebFormatAllowNonAdminSubGroupCreationNotification")(
            o("WAWebFrontendMsgGetters").getChat(t),
            t.templateParams,
          );
          break;
        case "empty_subgroup_create": {
          var v = t.templateParams[2];
          a = o(
            "WAWebMessageCommunityEmptySubgroupWelcomeTitle.react",
          ).communityEmptySubgroupWelcomeTitle(v);
          break;
        }
        case "created_subgroup_suggestion": {
          a = r("WAWebFormatCreatedSubgroupSuggestionNotification")(
            c,
            t.templateParams,
            !1,
          );
          break;
        }
        case "general_chat_add": {
          var S = t.templateParams[1];
          a = o(
            "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
          ).communityGeneralChatWelcomeTitle(S);
          break;
        }
        case "general_group_auto_add_disabled": {
          a = o(
            "WAWebMessageCommunityGeneralChatAutoAddDisabledNotification.react",
          ).communityGeneralChatAutoAddDisabledNotification(
            o("WAWebFrontendMsgGetters").getChat(t).formattedTitle,
            t.templateParams,
          );
          break;
        }
        case "community_owner_update": {
          a = o(
            "WAWebFormatCommunityOwnerUpdateNotification",
          ).formatCommunityOwnerUpdateNotification({
            author: c,
            templateParams: t.templateParams,
            clickable: !1,
          });
          break;
        }
        default:
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "wa:formatGroupNotification:unknown message subtype: ",
                "",
              ])),
            l,
          );
          break;
      }
      return (
        r("WAWebL10N").isRTL() && (a = r("WAWebL10N").forceRTL(String(a))),
        a
      );
    }
    l.default = u;
  },
  226,
);
