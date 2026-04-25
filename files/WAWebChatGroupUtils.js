__d(
  "WAWebChatGroupUtils",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBotBaseGating",
    "WAWebBotFrontendGating",
    "WAWebBotGating",
    "WAWebBotTos",
    "WAWebChatGetters",
    "WAWebCommunityGatingUtils",
    "WAWebCurrentUser",
    "WAWebDBUpdateChatTable",
    "WAWebFrontendContactGetters",
    "WAWebGroupType",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebLid1X1MigrationGating",
    "WAWebNewsletterMembershipUtil",
    "WAWebNoop",
    "WAWebReachoutTimelockUtils",
    "WAWebStateUtils",
    "WAWebTosCountryGating",
    "WAWebTosGating",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      var t;
      if (!e) return !1;
      var n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        ((t = n.groupMetadata) == null ? void 0 : t.support) === !0
      );
    }
    function m(e) {
      var t;
      if (!e) return !1;
      var n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        ((t = n.groupMetadata) == null ? void 0 : t.isOpenBotGroup) === !0
      );
    }
    function p(e) {
      var t;
      if (!e) return !1;
      var n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        ((t = n.groupMetadata) == null ? void 0 : t.isTeeBotGroup) === !0
      );
    }
    function _(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        !!((t = n.groupMetadata) != null && t.terminated)
      );
    }
    function f(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        ((t = n.groupMetadata) == null ? void 0 : t.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      );
    }
    function g(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        ((t = n.groupMetadata) == null ? void 0 : t.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
      );
    }
    function h(e) {
      var t;
      if (!e) return !1;
      var n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        !!((t = n.groupMetadata) != null && t.suspended)
      );
    }
    function y(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return t.canSend && !h(t) && !_(t);
    }
    function C(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        ((t = n.groupMetadata) == null ? void 0 : t.growthLockType) ===
          "invite" &&
        (n.groupMetadata.growthLockExpiration || 0) >
          o("WATimeUtils").unixTime()
      );
    }
    function b(e) {
      var t;
      if (!e) return !1;
      var n = o("WAWebStateUtils").unproxy(e),
        r = _(n),
        a =
          h(n) &&
          !((t = n.groupMetadata) != null && t.participants.iAmMember());
      return (r || a) && !f(n);
    }
    function v(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        ((t = n.groupMetadata) == null ? void 0 : t.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
        h(n) &&
        o("WAWebCommunityGatingUtils").isCommunitySuspendAppealEnabled()
      );
    }
    function S(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        ((t = n.groupMetadata) == null ? void 0 : t.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
        h(n) &&
        _(n)
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_suspend_appeal_include_entity_id_enabled",
      );
    }
    function L(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        ((t = n.groupMetadata) == null ? void 0 : t.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && _(n)
      );
    }
    function E(e) {
      return h(e) || _(e);
    }
    function k(t) {
      var a,
        i = o("WAWebStateUtils").unproxy(t);
      if (!(d(i) && i.isReadOnly)) {
        var l = (c || (c = n("Promise"))).resolve();
        if (o("WAWebChatGetters").getIsNewsletter(i)) {
          var s =
            !o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
              i.newsletterMetadata,
            ) || i.isSuspendedOrTerminated();
          i.isReadOnly !== s &&
            o("WAWebDBUpdateChatTable")
              .updateChatTable(i.id, { isReadOnly: s })
              .then(function () {
                ((i.isReadOnly = s), P(i));
              })
              .catch(r("WAWebNoop"));
          return;
        }
        if (
          o("WAWebChatGetters").getIsGroup(i) &&
          !((a = i.groupMetadata) != null && a.stale)
        ) {
          var u,
            m,
            p =
              ((u = i.groupMetadata) == null ? void 0 : u.groupType) !==
                o("WAWebGroupType").GroupType.COMMUNITY &&
              (!((m = i.groupMetadata) != null && m.participants.iAmMember()) ||
                _(i));
          i.isReadOnly !== p &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "chat:updateReadOnly:old ",
                  ", new ",
                  "",
                ])),
              i.isReadOnly,
              p,
            ),
            (l = o("WAWebDBUpdateChatTable")
              .updateChatTable(i.id, { isReadOnly: p })
              .then(function () {
                ((i.isReadOnly = p), P(i));
              })));
        }
        l.then(function () {
          o("WAWebChatGetters").getIsBroadcast(i) && $(i);
        });
      }
    }
    function I(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        ((t = n.groupMetadata) == null ? void 0 : t.participants.length) || 1
      );
    }
    function T(e, t, n) {
      var r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
      if (r.equals(e)) return o("WAWebUserPrefsMeUser").getMeUser();
      if (
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() ||
        !e.isLid()
      )
        return e;
      var a = o("WAWebApiContact").getPhoneNumber(e);
      return a == null
        ? (o("WAWebCurrentUser").isEmployee() &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[getOneToOneContactFromGroupContact] PN not found for Lid ",
                  "",
                ])),
              e.toString(),
            ),
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[getOneToOneContactFromGroupContact] LID->PN missing ctx=",
                  " ",
                  "",
                ])),
              t,
              n,
            )
            .sendLogs("lid-group-get-one-to-one-contact"),
          null)
        : a;
    }
    function D(e) {
      var t,
        n = e.participants,
        r = (t = e.size) != null ? t : 0,
        o = n.iAmAdmin() ? r : n.length;
      return o;
    }
    function x(e) {
      var t,
        n,
        r = e.name;
      if (r != null && r.trim().length > 0) return r;
      var a = e.contact.name;
      return a != null && a.trim().length > 0
        ? a
        : ((t = (n = e.broadcastMetadata) == null ? void 0 : n.recipients) !=
          null
            ? t
            : []
          )
            .map(function (e) {
              return o("WAWebFrontendContactGetters").getFormattedShortName(
                e.contact,
              );
            })
            .join(", ");
    }
    function $(e) {
      if (o("WAWebChatGetters").getIsBroadcast(e)) e.formattedTitle = x(e);
      else if (o("WAWebChatGetters").getIsUser(e)) {
        var t;
        e.formattedTitle =
          (t = o("WAWebFrontendContactGetters").getFormattedUser(e.contact)) !=
          null
            ? t
            : "";
      } else if (o("WAWebChatGetters").getIsGroup(e)) {
        var n, r;
        e.formattedTitle =
          (n = e.contact.name) != null
            ? n
            : (r = e.groupMetadata) == null
              ? void 0
              : r.subject;
      } else if (o("WAWebChatGetters").getIsNewsletter(e)) {
        var a, i;
        e.formattedTitle =
          (a = e.contact.name) != null
            ? a
            : (i = e.newsletterMetadata) == null
              ? void 0
              : i.name;
      }
    }
    function P(e, t) {
      var n;
      return e.isReadOnly ||
        e.isAnnounceGrpRestrict === !0 ||
        o("WAWebTosGating").shouldBlockByTos(e.contact) ||
        o("WAWebTosGating").shouldBlockByBotTos(e.contact) ||
        o("WAWebTosCountryGating").shouldBlockByCountry(e.contact) ||
        (!o("WAWebBotBaseGating").isBotEnabled() &&
          !o("WAWebBotFrontendGating").isManusIntegrationEnabled() &&
          e.id.isBot()) ||
        (!o("WAWebBotGating").isFbidBotEnabled() && e.id.isFbidBot()) ||
        (o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
          o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(e)) ||
        ((n = t != null ? t : e.contact.businessProfile) != null &&
          n.isBizBot3p &&
          (!o("WAWebBotGating").isBizBot3pAvailable() ||
            !o("WAWebBotTos").hasAcceptedBizBotTos()))
        ? ((e.canSend = !1), !1)
        : o("WAWebChatGetters").getIsUser(e)
          ? (e.canSend = !(
              e.contact.isContactBlocked ||
              o("WAWebChatGetters").getIsPSA(e) ||
              o("WAWebChatGetters").getIsIAS(e) ||
              (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() &&
                !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
                  chat: e,
                  contact: e.contact,
                })) ||
              (o(
                "WAWebIndividualNewChatMessageCappingLimitUtils",
              ).isUserCapped() &&
                !o(
                  "WAWebIndividualNewChatMessageCappingLimitUtils",
                ).canSendMsgWhileCapped({ chat: e, contact: e.contact }))
            ))
          : o("WAWebChatGetters").getIsNewsletter(e)
            ? (e.canSend = o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
                e.newsletterMetadata,
              ))
            : ((e.canSend = !0), !0);
    }
    function N(e) {
      return o("WAWebChatGetters").getIsGroup(e) && !f(e) && !e.isReadOnly;
    }
    ((l.isSupportGroup = d),
      (l.isAIGroupOpen = m),
      (l.isAIGroupTee = p),
      (l.isTerminatedGroup = _),
      (l.isCommunityAnnouncementGroup = f),
      (l.isCommunityGeneralGroup = g),
      (l.isSuspendedGroup = h),
      (l.canSendToGroup = y),
      (l.isInviteGrowthLockedGroup = C),
      (l.isTerminatedGroupOrNotMember = b),
      (l.isSuspendedCommunityAnnouncementGroup = v),
      (l.isIntegrityDeactivatedCommunityAnnouncementGroup = S),
      (l.shouldIncludeEntityIdInAppealRequest = R),
      (l.isDeactivatedCommunityAnnouncementGroup = L),
      (l.shouldBlockCall = E),
      (l.updateReadOnly = k),
      (l.getParticipantCount = I),
      (l.getOneToOneContactFromGroupContact = T),
      (l.getGroupParticipantsCount = D),
      (l.getBroadcastChatTitle = x),
      (l.updateTitle = $),
      (l.updateCanSend = P),
      (l.shouldShowLeaveAndReportGroupModalForChat = N));
  },
  98,
);
