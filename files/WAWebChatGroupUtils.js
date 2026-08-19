__d(
  "WAWebChatGroupUtils",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAgentTransitionUtils",
    "WAWebApiContact",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizBotProfileUtils",
    "WAWebBizCoexGatingUtils",
    "WAWebBotComposerTreatment",
    "WAWebBotFrontendGating",
    "WAWebBotGating",
    "WAWebBotTos",
    "WAWebChatGetters",
    "WAWebConversationDeprecatedLidChatUtils",
    "WAWebCurrentUser",
    "WAWebDBUpdateChatTable",
    "WAWebFrontendContactGetters",
    "WAWebGroupType",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebLid1X1MigrationGating",
    "WAWebMobilePlatforms",
    "WAWebNoop",
    "WAWebReachoutTimelockUtils",
    "WAWebStateUtils",
    "WAWebTosCountryGating",
    "WAWebTosGating",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
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
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && h(n)
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
    function R(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        ((t = n.groupMetadata) == null ? void 0 : t.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && _(n)
      );
    }
    function L(e) {
      return h(e) || _(e);
    }
    function E(t) {
      var a,
        i = o("WAWebStateUtils").unproxy(t);
      if (!(d(i) && i.isReadOnly)) {
        var l = (c || (c = n("Promise"))).resolve();
        if (o("WAWebChatGetters").getIsNewsletter(i)) {
          var s,
            u =
              !((s = i.newsletterMetadata) != null && s.iAmAdminOrOwner()) ||
              i.isSuspendedOrTerminated();
          i.isReadOnly !== u &&
            o("WAWebDBUpdateChatTable")
              .updateChatTable(i.id, { isReadOnly: u })
              .then(function () {
                ((i.isReadOnly = u), $(i));
              })
              .catch(r("WAWebNoop"));
          return;
        }
        if (
          o("WAWebChatGetters").getIsGroup(i) &&
          !((a = i.groupMetadata) != null && a.stale)
        ) {
          var m,
            p,
            f =
              ((m = i.groupMetadata) == null ? void 0 : m.groupType) !==
                o("WAWebGroupType").GroupType.COMMUNITY &&
              (!((p = i.groupMetadata) != null && p.participants.iAmMember()) ||
                _(i));
          i.isReadOnly !== f &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "chat:updateReadOnly:old ",
                  ", new ",
                  "",
                ])),
              i.isReadOnly,
              f,
            ),
            (l = o("WAWebDBUpdateChatTable")
              .updateChatTable(i.id, { isReadOnly: f })
              .then(function () {
                ((i.isReadOnly = f), $(i));
              })));
        }
        l.then(function () {
          o("WAWebChatGetters").getIsBroadcast(i) && x(i);
        });
      }
    }
    function k(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        ((t = n.groupMetadata) == null ? void 0 : t.participants.length) || 1
      );
    }
    function I(e, t, n) {
      var r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
      if (r.equals(e)) return o("WAWebUserPrefsMeUser").getMeUserOrThrow();
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
    function T(e) {
      var t,
        n = e.participants,
        r = (t = e.size) != null ? t : 0,
        o = n.iAmAdmin() ? r : n.length;
      return o;
    }
    function D(e) {
      var t,
        n,
        r = e.name;
      if (r != null && r.trim().length > 0) return r;
      var o = e.contact.name;
      return o != null && o.trim().length > 0
        ? o
        : ((t = (n = e.broadcastMetadata) == null ? void 0 : n.recipients) !=
          null
            ? t
            : []
          )
            .map(function (e) {
              return e.formattedShortName;
            })
            .join(", ");
    }
    function x(e) {
      if (o("WAWebChatGetters").getIsBroadcast(e)) e.formattedTitle = D(e);
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
    function $(e, t) {
      if (
        e.isReadOnly ||
        e.isAnnounceGrpRestrict === !0 ||
        o("WAWebTosGating").shouldBlockByTos(e.contact) ||
        o("WAWebTosGating").shouldBlockByBotTos(e.contact) ||
        o("WAWebTosCountryGating").shouldBlockByCountry(e.contact) ||
        o("WAWebBotFrontendGating").isBotChatUnavailable(e.id) ||
        (o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
          o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(e)) ||
        o("WAWebBotComposerTreatment").isBotSupportComposerBlocked(e.id)
      )
        return ((e.canSend = !1), !1);
      if (
        o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(
          t != null ? t : e.contact.businessProfile,
        ) &&
        (!o("WAWebBotGating").isBizBot3pAvailable() ||
          !o("WAWebBotTos").hasAcceptedBizBotTos())
      )
        return ((e.canSend = !1), !1);
      if (o("WAWebChatGetters").getIsUser(e))
        return (e.canSend = !(
          (o("WAWebMobilePlatforms").isSMB() &&
            !o(
              "WAWebUserPrefsMultiDevice",
            ).getIsHostedMeAccountFromLocalStorage() &&
            o("WAWebAgentTransitionUtils").getMeSmbOffboardingState() &&
            o("WAWebBizCoexGatingUtils").agentSmbOffboardingEnabled()) ||
          e.contact.isContactBlocked ||
          o("WAWebChatGetters").getIsPSA(e) ||
          o("WAWebChatGetters").getIsIAS(e) ||
          (e.parentCompanyName != null &&
            e.obaPhoneNumber != null &&
            e.contact.type === "out" &&
            o("WAWebBizCoexGatingUtils").agentOffboardingEnabled()) ||
          (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() &&
            !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
              chat: e,
              contact: e.contact,
            })) ||
          (o("WAWebIndividualNewChatMessageCappingLimitUtils").isUserCapped() &&
            !o(
              "WAWebIndividualNewChatMessageCappingLimitUtils",
            ).canSendMsgWhileCapped({ chat: e, contact: e.contact })) ||
          o(
            "WAWebConversationDeprecatedLidChatUtils",
          ).isDeprecatedLidChatSendBlocked(e)
        ));
      if (o("WAWebChatGetters").getIsNewsletter(e)) {
        var n, r;
        return (e.canSend =
          (n =
            (r = e.newsletterMetadata) == null
              ? void 0
              : r.iAmAdminOrOwner()) != null
            ? n
            : !1);
      }
      return ((e.canSend = !0), !0);
    }
    function P(e) {
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
      (l.isDeactivatedCommunityAnnouncementGroup = R),
      (l.shouldBlockCall = L),
      (l.updateReadOnly = E),
      (l.getParticipantCount = k),
      (l.getOneToOneContactFromGroupContact = I),
      (l.getGroupParticipantsCount = T),
      (l.getBroadcastChatTitle = D),
      (l.updateTitle = x),
      (l.updateCanSend = $),
      (l.shouldShowLeaveAndReportGroupModalForChat = P));
  },
  98,
);
