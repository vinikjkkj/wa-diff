__d(
  "WAWebChatGroupUtils",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAgentTransitionUtils",
    "WAWebBackendRuntime",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiStrings",
    "WAWebBizBotProfileUtils",
    "WAWebBizCoexGatingUtils",
    "WAWebBotComposerTreatment",
    "WAWebBotFrontendGating",
    "WAWebBotGating",
    "WAWebBotTos",
    "WAWebChatGetters",
    "WAWebChatStoreService",
    "WAWebConversationDeprecatedLidChatUtils",
    "WAWebDBUpdateChatTable",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebNoop",
    "WAWebReachoutTimelockUtils",
    "WAWebStateUtils",
    "WAWebTosCountryGating",
    "WAWebTosGating",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["isReadOnly"],
      s,
      u;
    function c(e) {
      return e ? d(j(e)) : !1;
    }
    function d(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return t.isGroup() && (n == null ? void 0 : n.support) === !0;
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
      return e ? _(j(e)) : !1;
    }
    function _(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return t.isGroup() && (n == null ? void 0 : n.isTeeBotGroup) === !0;
    }
    function f(e) {
      return g(j(e));
    }
    function g(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return t.isGroup() && !!(n != null && n.terminated);
    }
    function h(e) {
      return y(j(e));
    }
    function y(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return (
        t.isGroup() &&
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(n) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      );
    }
    function C(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(t) &&
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
      );
    }
    function b(e) {
      return e ? v(j(e)) : !1;
    }
    function v(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return t.isGroup() && !!(n != null && n.suspended);
    }
    function S(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        t.canSend &&
        !b(t) &&
        !f(t) &&
        !o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(t)
      );
    }
    function R(e) {
      return L(j(e));
    }
    function L(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return (
        t.isGroup() &&
        (n == null ? void 0 : n.growthLockType) === "invite" &&
        (n.growthLockExpiration || 0) > o("WATimeUtils").unixTime()
      );
    }
    function E(e) {
      return e ? k(j(e)) : !1;
    }
    function k(e) {
      var t,
        n = g(e),
        r =
          v(e) &&
          !((t = e.groupMetadata) != null && t.participants.iAmMember());
      return (n || r) && !y(e);
    }
    function I(e) {
      return T(j(e));
    }
    function T(e) {
      return (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && v(e)
      );
    }
    function D(e) {
      return x(j(e));
    }
    function x(e) {
      return (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
        v(e) &&
        g(e)
      );
    }
    function $(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && f(t)
      );
    }
    function P(e) {
      return N(j(e));
    }
    function N(e) {
      return v(e) || g(e);
    }
    function M(e) {
      var t,
        a = o("WAWebStateUtils").unproxy(e);
      if (!(c(a) && a.isReadOnly)) {
        var i = (u || (u = n("Promise"))).resolve();
        if (o("WAWebChatGetters").getIsNewsletter(a)) {
          var l,
            d =
              !((l = a.newsletterMetadata) != null && l.iAmAdminOrOwner()) ||
              a.isSuspendedOrTerminated();
          a.isReadOnly !== d &&
            (o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebChatStoreService").ChatStoreService,
                ).updateChatTable
              : o("WAWebDBUpdateChatTable").updateChatTable)(a.id, {
              isReadOnly: d,
            })
              .then(function () {
                ((a.isReadOnly = d), W(a));
              })
              .catch(r("WAWebNoop"));
          return;
        }
        if (
          o("WAWebChatGetters").getIsGroup(a) &&
          !((t = a.groupMetadata) != null && t.stale)
        ) {
          var m,
            p =
              o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(
                a.groupMetadata,
              ) !== o("WAWebGroupType").GroupType.COMMUNITY &&
              (!((m = a.groupMetadata) != null && m.participants.iAmMember()) ||
                f(a));
          a.isReadOnly !== p &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "chat:updateReadOnly:old ",
                  ", new ",
                  "",
                ])),
              a.isReadOnly,
              p,
            ),
            (i = (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebChatStoreService").ChatStoreService,
                  ).updateChatTable
                : o("WAWebDBUpdateChatTable").updateChatTable
            )(a.id, { isReadOnly: p }).then(function () {
              ((a.isReadOnly = p), W(a));
            })));
        }
        i.then(function () {
          o("WAWebChatGetters").getIsBroadcast(a) && B(a);
        });
      }
    }
    function w(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        ((t = n.groupMetadata) == null ? void 0 : t.participants.length) || 1
      );
    }
    function A(e, t, n) {
      var r = o("WAWebUserUtils").getMeLidUserOrThrow();
      return r.equals(e) ? o("WAWebUserUtils").getMeUserOrThrow() : e;
    }
    function F(e) {
      var t,
        n = e.participants,
        r = (t = e.size) != null ? t : 0,
        o = n.iAmAdmin() ? r : n.length;
      return o;
    }
    function O(e) {
      var t,
        n,
        r = e.name;
      return r != null && r.trim().length > 0
        ? r
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
    function B(e) {
      if (o("WAWebChatGetters").getIsBroadcast(e)) e.formattedTitle = O(e);
      else if (o("WAWebChatGetters").getIsUser(e)) {
        var t;
        e.formattedTitle = e.id.isAiHub()
          ? o("WAWebBizAiStrings").getBizAiHubTitle().toString()
          : (t = o("WAWebFrontendContactGetters").getFormattedUser(
                e.contact,
              )) != null
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
    function W(e, t) {
      var n = V(e, { businessProfile: t, ignoreAiAgentBlock: !1 });
      return ((e.canSend = n), n);
    }
    function q(e) {
      return (
        o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
        o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(e)
      );
    }
    function U(e) {
      return e.contact == null
        ? !1
        : V(e, { businessProfile: null, ignoreAiAgentBlock: !0 });
    }
    function V(e, t) {
      var n = t.businessProfile,
        r = t.ignoreAiAgentBlock;
      if (
        e.isReadOnly ||
        e.isAnnounceGrpRestrict === !0 ||
        o("WAWebTosGating").shouldBlockByTos(e.contact) ||
        o("WAWebTosGating").shouldBlockByBotTos(e.contact) ||
        o("WAWebTosCountryGating").shouldBlockByCountry(e.contact) ||
        H(e.id) ||
        (!r && q(e))
      )
        return !1;
      if (
        o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(
          n != null ? n : e.contact.businessProfile,
        ) &&
        (!o("WAWebBotGating").isBizBot3pAvailable() ||
          !o("WAWebBotTos").hasAcceptedBizBotTos())
      )
        return !1;
      if (o("WAWebChatGetters").getIsUser(e))
        return !(
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
        );
      if (o("WAWebChatGetters").getIsNewsletter(e)) {
        var a, i;
        return (a =
          (i = e.newsletterMetadata) == null ? void 0 : i.iAmAdminOrOwner()) !=
          null
          ? a
          : !1;
      }
      return !0;
    }
    function H(e) {
      return (
        o("WAWebBotFrontendGating").isBotChatUnavailable(e) ||
        o("WAWebBotFrontendGating").isBotChatReadOnly(e) ||
        o("WAWebBotComposerTreatment").isBotSupportComposerBlocked(e)
      );
    }
    function G(e) {
      return z(babelHelpers.extends({}, j(e), { isReadOnly: e.isReadOnly }));
    }
    function z(t) {
      var n = t.isReadOnly,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return r.chatId.isGroup() && !y(r) && !n;
    }
    function j(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return { chatId: t.id, groupMetadata: t.groupMetadata };
    }
    ((l.isSupportGroup = c),
      (l.isSupportGroupFor = d),
      (l.isAIGroupOpen = m),
      (l.isAIGroupTee = p),
      (l.isAIGroupTeeFor = _),
      (l.isTerminatedGroup = f),
      (l.isTerminatedGroupFor = g),
      (l.isCommunityAnnouncementGroup = h),
      (l.isCommunityAnnouncementGroupFor = y),
      (l.isCommunityGeneralGroup = C),
      (l.isSuspendedGroup = b),
      (l.isSuspendedGroupFor = v),
      (l.canSendToGroup = S),
      (l.isInviteGrowthLockedGroup = R),
      (l.isInviteGrowthLockedGroupFor = L),
      (l.isTerminatedGroupOrNotMember = E),
      (l.isTerminatedGroupOrNotMemberFor = k),
      (l.isSuspendedCommunityAnnouncementGroup = I),
      (l.isSuspendedCommunityAnnouncementGroupFor = T),
      (l.isIntegrityDeactivatedCommunityAnnouncementGroup = D),
      (l.isIntegrityDeactivatedCommunityAnnouncementGroupFor = x),
      (l.isDeactivatedCommunityAnnouncementGroup = $),
      (l.shouldBlockCall = P),
      (l.shouldBlockCallFor = N),
      (l.updateReadOnly = M),
      (l.getParticipantCount = w),
      (l.getOneToOneContactFromGroupContact = A),
      (l.getGroupParticipantsCount = F),
      (l.getBroadcastChatTitle = O),
      (l.updateTitle = B),
      (l.updateCanSend = W),
      (l.canSendIgnoringAiAgentBlock = U),
      (l.shouldShowLeaveAndReportGroupModalForChat = G),
      (l.shouldShowLeaveAndReportGroupModalFor = z));
  },
  98,
);
