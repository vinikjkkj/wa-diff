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
      return e ? d(K(e)) : !1;
    }
    function d(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return t.isGroup() && (n == null ? void 0 : n.support) === !0;
    }
    function m(e) {
      return e ? p(K(e)) : !1;
    }
    function p(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return t.isGroup() && (n == null ? void 0 : n.isOpenBotGroup) === !0;
    }
    function _(e) {
      return e ? f(K(e)) : !1;
    }
    function f(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return t.isGroup() && (n == null ? void 0 : n.isTeeBotGroup) === !0;
    }
    function g(e) {
      return h(K(e));
    }
    function h(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return t.isGroup() && !!(n != null && n.terminated);
    }
    function y(e) {
      return C(K(e));
    }
    function C(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return (
        t.isGroup() &&
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(n) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      );
    }
    function b(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(t) &&
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
      );
    }
    function v(e) {
      return e ? S(K(e)) : !1;
    }
    function S(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return t.isGroup() && !!(n != null && n.suspended);
    }
    function R(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        t.canSend &&
        !v(t) &&
        !g(t) &&
        !o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(t)
      );
    }
    function L(e) {
      return E(K(e));
    }
    function E(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return (
        t.isGroup() &&
        (n == null ? void 0 : n.growthLockType) === "invite" &&
        (n.growthLockExpiration || 0) > o("WATimeUtils").unixTime()
      );
    }
    function k(e) {
      return e ? I(K(e)) : !1;
    }
    function I(e) {
      var t,
        n = h(e),
        r =
          S(e) &&
          !((t = e.groupMetadata) != null && t.participants.iAmMember());
      return (n || r) && !C(e);
    }
    function T(e) {
      return D(K(e));
    }
    function D(e) {
      return (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && S(e)
      );
    }
    function x(e) {
      return $(K(e));
    }
    function $(e) {
      return (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
        S(e) &&
        h(e)
      );
    }
    function P(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && g(t)
      );
    }
    function N(e) {
      return M(K(e));
    }
    function M(e) {
      return S(e) || h(e);
    }
    function w(e) {
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
                ((a.isReadOnly = d), q(a));
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
                g(a));
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
              ((a.isReadOnly = p), q(a));
            })));
        }
        i.then(function () {
          o("WAWebChatGetters").getIsBroadcast(a) && W(a);
        });
      }
    }
    function A(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        ((t = n.groupMetadata) == null ? void 0 : t.participants.length) || 1
      );
    }
    function F(e, t, n) {
      var r = o("WAWebUserUtils").getMeLidUserOrThrow();
      return r.equals(e) ? o("WAWebUserUtils").getMeUserOrThrow() : e;
    }
    function O(e) {
      var t,
        n = e.participants,
        r = (t = e.size) != null ? t : 0,
        o = n.iAmAdmin() ? r : n.length;
      return o;
    }
    function B(e) {
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
    function W(e) {
      if (o("WAWebChatGetters").getIsBroadcast(e)) e.formattedTitle = B(e);
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
    function q(e, t) {
      var n = H(e, { businessProfile: t, ignoreAiAgentBlock: !1 });
      return ((e.canSend = n), n);
    }
    function U(e) {
      return (
        o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
        o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(e)
      );
    }
    function V(e) {
      return e.contact == null
        ? !1
        : H(e, { businessProfile: null, ignoreAiAgentBlock: !0 });
    }
    function H(e, t) {
      var n = t.businessProfile,
        r = t.ignoreAiAgentBlock;
      if (
        e.isReadOnly ||
        e.isAnnounceGrpRestrict === !0 ||
        o("WAWebTosGating").shouldBlockByTos(e.contact) ||
        o("WAWebTosGating").shouldBlockByBotTos(e.contact) ||
        o("WAWebTosCountryGating").shouldBlockByCountry(e.contact) ||
        G(e.id) ||
        (!r && U(e))
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
    function G(e) {
      return (
        o("WAWebBotFrontendGating").isBotChatUnavailable(e) ||
        o("WAWebBotFrontendGating").isBotChatReadOnly(e) ||
        o("WAWebBotComposerTreatment").isBotSupportComposerBlocked(e)
      );
    }
    function z(e) {
      return j(babelHelpers.extends({}, K(e), { isReadOnly: e.isReadOnly }));
    }
    function j(t) {
      var n = t.isReadOnly,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return r.chatId.isGroup() && !C(r) && !n;
    }
    function K(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return { chatId: t.id, groupMetadata: t.groupMetadata };
    }
    ((l.isSupportGroup = c),
      (l.isSupportGroupFor = d),
      (l.isAIGroupOpen = m),
      (l.isAIGroupOpenFor = p),
      (l.isAIGroupTee = _),
      (l.isAIGroupTeeFor = f),
      (l.isTerminatedGroup = g),
      (l.isTerminatedGroupFor = h),
      (l.isCommunityAnnouncementGroup = y),
      (l.isCommunityAnnouncementGroupFor = C),
      (l.isCommunityGeneralGroup = b),
      (l.isSuspendedGroup = v),
      (l.isSuspendedGroupFor = S),
      (l.canSendToGroup = R),
      (l.isInviteGrowthLockedGroup = L),
      (l.isInviteGrowthLockedGroupFor = E),
      (l.isTerminatedGroupOrNotMember = k),
      (l.isTerminatedGroupOrNotMemberFor = I),
      (l.isSuspendedCommunityAnnouncementGroup = T),
      (l.isSuspendedCommunityAnnouncementGroupFor = D),
      (l.isIntegrityDeactivatedCommunityAnnouncementGroup = x),
      (l.isIntegrityDeactivatedCommunityAnnouncementGroupFor = $),
      (l.isDeactivatedCommunityAnnouncementGroup = P),
      (l.shouldBlockCall = N),
      (l.shouldBlockCallFor = M),
      (l.updateReadOnly = w),
      (l.getParticipantCount = A),
      (l.getOneToOneContactFromGroupContact = F),
      (l.getGroupParticipantsCount = O),
      (l.getBroadcastChatTitle = B),
      (l.updateTitle = W),
      (l.updateCanSend = q),
      (l.canSendIgnoringAiAgentBlock = V),
      (l.shouldShowLeaveAndReportGroupModalForChat = z),
      (l.shouldShowLeaveAndReportGroupModalFor = j));
  },
  98,
);
