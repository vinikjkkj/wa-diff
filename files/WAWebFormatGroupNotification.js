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
    "WAWebGroupAgentAddAttribution",
    "WAWebL10N",
    "WAWebMessageCommunityEmptySubgroupWelcomeTitle.react",
    "WAWebMessageCommunityGeneralChatAutoAddDisabledNotification.react",
    "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
    "WAWebMessageCommunityLinkGroupTitle.react",
    "WAWebMessageCommunitySubgroupWelcomeTitle.react",
    "WAWebMessageCommunityWelcomeAdminTitle.react",
    "WAWebMessageCommunityWelcomeMemberTitle.react",
    "WAWebMsgModelUtils",
    "WAWebSystemMessageGatingUtils",
    "WAWebUserUtils",
    "WAWebWidFormat",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(t, n) {
      var a = "",
        i = t.get("type");
      if (i !== "gp2") return a;
      var l = t.get("subtype"),
        u = o("WAWebMsgModelUtils").getMsgDisplayName(t),
        _ = t.get("author"),
        f = t.get("body"),
        g,
        h,
        y = !!n,
        C = t.recipients || [],
        b = o("WAWebFormatParticipantNames").getFormattedNames(C, !1),
        v = C[0],
        S = v ? o("WAWebContactCollection").ContactCollection.get(v) : void 0,
        R;
      switch (
        (S
          ? (R = o("WAWebFrontendContactGetters").getFormattedName(S))
          : v
            ? (R = o("WAWebWidFormat").widToFormattedUser(v))
            : (R = ""),
        l)
      ) {
        case "add":
          a = o("WAWebFormatAddNotification").formatAddNotification({
            author: _,
            authorClickable: u,
            museAgentAddAttribution: o(
              "WAWebGroupAgentAddAttribution",
            ).groupAgentAddAttributionFromBody(f),
            subject: v,
            subjectClickable: R,
            participantsClickable: b,
            recipients: C,
          });
          break;
        case "remove":
          a = o("WAWebFormatRemoveNotification").formatRemoveNotification({
            author: _,
            authorClickable: u,
            subject: v,
            subjectClickable: R,
            participantsClickable: b,
          });
          break;
        case "leave":
          a = o("WAWebFormatLeaveNotification").formatLeaveNotification({
            body: f,
            subject: v,
            participantsClickable: b,
          });
          break;
        case "picture":
          a = o("WAWebFormatPictureNotification").formatPictureNotification({
            author: _,
            authorClickable: u,
            body: f,
          });
          break;
        case "subject":
          a = o("WAWebFormatSubjectNotification").formatSubjectNotification({
            author: _,
            authorClickable: u,
            chat: o("WAWebFrontendMsgGetters").getChat(t),
            subjectValue: f,
          });
          break;
        case "modify": {
          var L = o("WAWebContactCollection").ContactCollection.get(_),
            E =
              L != null &&
              o("WAWebFrontendContactGetters").getIsUsernameContact(L);
          if (E) {
            a = s._(/*BTDS*/ "{name} updated their contact info", [
              s._param("name", u),
            ]);
            break;
          }
          ((g = o("WAWebWidFormat").widToFormattedUser(_)),
            (h = o("WAWebWidFormat").widToFormattedUser(v)),
            (a =
              g === u
                ? c(u, h)
                : s._(
                    /*BTDS*/ "{name} changed their phone number to a new number.",
                    [s._param("name", u)],
                  )));
          break;
        }
        case "create":
          a = o("WAWebFormatCreateNotification").formatCreateNotification({
            author: _,
            authorClickable: u,
            groupSubject: f,
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
            subject: v,
            subjectClickable: R,
            participantsClickable: b,
            participantsCount: C.length,
          });
          break;
        case "invite":
          a = d(o("WAWebUserUtils").isMeAccount(v), R);
          break;
        case "revoke_invite":
          a = o("WAWebUserUtils").isMeAccount(_)
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
            author: _,
            authorClickable: u,
            shouldFormatAsLastMsg: y,
          });
          break;
        case "parent_group_description":
          a = o(
            "WAWebFormatDescriptionNotification",
          ).formatDescriptionNotification({
            author: _,
            authorClickable: u,
            isParentGroup: !0,
            shouldFormatAsLastMsg: y,
          });
          break;
        case "announce":
          a = o("WAWebFormatAnnounceNotification").formatAnnounceNotification({
            author: _,
            authorClickable: u,
            body: f,
          });
          break;
        case "restrict":
          a = o("WAWebFormatRestrictNotification").formatRestrictNotification({
            author: _,
            authorClickable: u,
            templateParams: t.templateParams,
          });
          break;
        case "no_frequently_forwarded":
          f === "on"
            ? (a = o("WAWebUserUtils").isMeAccount(_)
                ? s._(
                    /*BTDS*/ "You changed this group's settings to not allow messages that have been forwarded many times.",
                  )
                : s._(
                    /*BTDS*/ "{name} changed this group's settings to not allow messages that have been forwarded many times.",
                    [s._param("name", u)],
                  ))
            : (a = o("WAWebUserUtils").isMeAccount(_)
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
          a = m(b);
          break;
        case "v4_add_invite_join":
          a = p(b);
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
          var k = o("WAWebFormatLinkNotification").formatLinkNotifAsFbt({
            author: _,
            subject: v,
            subtype: l,
            templateParams: t.templateParams,
          });
          k != null && (a = k);
          break;
        }
        case "community_participant_add_rich":
        case "community_invite_rich":
        case "community_invite_auto_add_rich":
        case "subgroup_admin_triggered_auto_add":
        case "subgroup_admin_triggered_invite_auto_add":
          a = o(
            "WAWebMessageCommunityWelcomeMemberTitle.react",
          ).communityWelcomeMemberTitle();
          break;
        case "sub_group_participant_add_rich":
        case "sub_group_invite_rich":
          a = o(
            "WAWebMessageCommunitySubgroupWelcomeTitle.react",
          ).communitySubgroupWelcomeTitle({
            templateParams: t.templateParams,
            clickable: !1,
            author: _,
          });
          break;
        case "community_link_parent_group_rich":
          a = o(
            "WAWebMessageCommunityLinkGroupTitle.react",
          ).communityLinkGroupTitle({
            templateParams: t.templateParams,
            clickable: !1,
            author: _,
          });
          break;
        case "community_create":
          a = o(
            "WAWebMessageCommunityWelcomeAdminTitle.react",
          ).communityWelcomeAdminTitle({
            templateParams: t.templateParams,
            author: _,
            groupMetadata: o("WAWebFrontendMsgGetters").getChat(t)
              .groupMetadata,
          });
          break;
        case "membership_approval_mode":
        case "membership_approval_request":
        case "created_membership_requests":
          a = o(
            "WAWebFormatMembershipApprovalNotification",
          ).formatMembershipApprovalNotification(l, _, t.templateParams);
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
          ).formatReportToAdminNotification(_, t.templateParams);
          break;
        case "allow_non_admin_sub_group_creation":
          a = r("WAWebFormatAllowNonAdminSubGroupCreationNotification")(
            o("WAWebFrontendMsgGetters").getChat(t),
            t.templateParams,
          );
          break;
        case "empty_subgroup_create": {
          var I = t.templateParams[2];
          a = o(
            "WAWebMessageCommunityEmptySubgroupWelcomeTitle.react",
          ).communityEmptySubgroupWelcomeTitle(I);
          break;
        }
        case "created_subgroup_suggestion": {
          a = r("WAWebFormatCreatedSubgroupSuggestionNotification")(
            _,
            t.templateParams,
            !1,
          );
          break;
        }
        case "general_chat_add": {
          var T = t.templateParams[1];
          a = o(
            "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
          ).communityGeneralChatWelcomeTitle(T);
          break;
        }
        case "general_group_auto_add_disabled": {
          var D, x;
          a = o(
            "WAWebMessageCommunityGeneralChatAutoAddDisabledNotification.react",
          ).communityGeneralChatAutoAddDisabledNotification(
            (D =
              (x = o("WAWebFrontendMsgGetters").getChat(t)) == null
                ? void 0
                : x.formattedTitle) != null
              ? D
              : "",
            t.templateParams,
          );
          break;
        }
        case "community_owner_update": {
          a = o(
            "WAWebFormatCommunityOwnerUpdateNotification",
          ).formatCommunityOwnerUpdateNotification({
            author: _,
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
    function c(e, t) {
      return o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageTerminalPeriodsEnabled()
        ? s._(/*BTDS*/ "{name} changed to {new_number}.", [
            s._param("name", e),
            s._param("new_number", t),
          ])
        : s._(/*BTDS*/ "{name} changed to {new_number}", [
            s._param("name", e),
            s._param("new_number", t),
          ]);
    }
    function d(e, t) {
      var n = o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageTerminalPeriodsEnabled();
      return e
        ? n
          ? s._(/*BTDS*/ "You joined via an invite link.")
          : s._(/*BTDS*/ "You joined via an invite link")
        : n
          ? s._(/*BTDS*/ "{name} joined via an invite link.", [
              s._param("name", t),
            ])
          : s._(/*BTDS*/ "{name} joined via an invite link", [
              s._param("name", t),
            ]);
    }
    function m(e) {
      return o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageTerminalPeriodsEnabled()
        ? s
            ._(/*BTDS*/ "You invited {participants}.", [
              s._param("participants", e),
            ])
            .toString()
        : s
            ._(/*BTDS*/ "You invited {participants}", [
              s._param("participants", e),
            ])
            .toString();
    }
    function p(e) {
      return o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageTerminalPeriodsEnabled()
        ? s
            ._(/*BTDS*/ "{participants} joined using your invite.", [
              s._param("participants", e),
            ])
            .toString()
        : s
            ._(/*BTDS*/ "{participants} joined using your invite", [
              s._param("participants", e),
            ])
            .toString();
    }
    l.default = u;
  },
  226,
);
