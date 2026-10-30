__d(
  "WAWebChatGroupUtils",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAgentTransitionUtils",
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
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["isReadOnly"],
      s,
      u;
    function c(e) {
      var t;
      if (!e) return !1;
      var n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        ((t = n.groupMetadata) == null ? void 0 : t.support) === !0
      );
    }
    function d(e) {
      var t;
      if (!e) return !1;
      var n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        ((t = n.groupMetadata) == null ? void 0 : t.isOpenBotGroup) === !0
      );
    }
    function m(e) {
      return e ? p(G(e)) : !1;
    }
    function p(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return t.isGroup() && (n == null ? void 0 : n.isTeeBotGroup) === !0;
    }
    function _(e) {
      return f(G(e));
    }
    function f(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return t.isGroup() && !!(n != null && n.terminated);
    }
    function g(e) {
      return h(G(e));
    }
    function h(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return (
        t.isGroup() &&
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(n) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      );
    }
    function y(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(t) &&
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
      );
    }
    function C(e) {
      return e ? b(G(e)) : !1;
    }
    function b(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return t.isGroup() && !!(n != null && n.suspended);
    }
    function v(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        t.canSend &&
        !C(t) &&
        !_(t) &&
        !o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(t)
      );
    }
    function S(e) {
      return R(G(e));
    }
    function R(e) {
      var t = e.chatId,
        n = e.groupMetadata;
      return (
        t.isGroup() &&
        (n == null ? void 0 : n.growthLockType) === "invite" &&
        (n.growthLockExpiration || 0) > o("WATimeUtils").unixTime()
      );
    }
    function L(e) {
      return e ? E(G(e)) : !1;
    }
    function E(e) {
      var t,
        n = f(e),
        r =
          b(e) &&
          !((t = e.groupMetadata) != null && t.participants.iAmMember());
      return (n || r) && !h(e);
    }
    function k(e) {
      return I(G(e));
    }
    function I(e) {
      return (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && b(e)
      );
    }
    function T(e) {
      return D(G(e));
    }
    function D(e) {
      return (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
        b(e) &&
        f(e)
      );
    }
    function x(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && _(t)
      );
    }
    function $(e) {
      return C(e) || _(e);
    }
    function P(e) {
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
            o("WAWebDBUpdateChatTable")
              .updateChatTable(a.id, { isReadOnly: d })
              .then(function () {
                ((a.isReadOnly = d), O(a));
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
                _(a));
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
            (i = o("WAWebDBUpdateChatTable")
              .updateChatTable(a.id, { isReadOnly: p })
              .then(function () {
                ((a.isReadOnly = p), O(a));
              })));
        }
        i.then(function () {
          o("WAWebChatGetters").getIsBroadcast(a) && F(a);
        });
      }
    }
    function N(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        ((t = n.groupMetadata) == null ? void 0 : t.participants.length) || 1
      );
    }
    function M(e, t, n) {
      var r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
      return r.equals(e) ? o("WAWebUserPrefsMeUser").getMeUserOrThrow() : e;
    }
    function w(e) {
      var t,
        n = e.participants,
        r = (t = e.size) != null ? t : 0,
        o = n.iAmAdmin() ? r : n.length;
      return o;
    }
    function A(e) {
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
    function F(e) {
      if (o("WAWebChatGetters").getIsBroadcast(e)) e.formattedTitle = A(e);
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
    function O(e, t) {
      var n = q(e, { businessProfile: t, ignoreAiAgentBlock: !1 });
      return ((e.canSend = n), n);
    }
    function B(e) {
      return (
        o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
        o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(e)
      );
    }
    function W(e) {
      return e.contact == null
        ? !1
        : q(e, { businessProfile: null, ignoreAiAgentBlock: !0 });
    }
    function q(e, t) {
      var n = t.businessProfile,
        r = t.ignoreAiAgentBlock;
      if (
        e.isReadOnly ||
        e.isAnnounceGrpRestrict === !0 ||
        o("WAWebTosGating").shouldBlockByTos(e.contact) ||
        o("WAWebTosGating").shouldBlockByBotTos(e.contact) ||
        o("WAWebTosCountryGating").shouldBlockByCountry(e.contact) ||
        U(e.id) ||
        (!r && B(e))
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
    function U(e) {
      return (
        o("WAWebBotFrontendGating").isBotChatUnavailable(e) ||
        o("WAWebBotFrontendGating").isBotChatReadOnly(e) ||
        o("WAWebBotComposerTreatment").isBotSupportComposerBlocked(e)
      );
    }
    function V(e) {
      return H(babelHelpers.extends({}, G(e), { isReadOnly: e.isReadOnly }));
    }
    function H(t) {
      var n = t.isReadOnly,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return r.chatId.isGroup() && !h(r) && !n;
    }
    function G(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return { chatId: t.id, groupMetadata: t.groupMetadata };
    }
    ((l.isSupportGroup = c),
      (l.isAIGroupOpen = d),
      (l.isAIGroupTee = m),
      (l.isAIGroupTeeFor = p),
      (l.isTerminatedGroup = _),
      (l.isTerminatedGroupFor = f),
      (l.isCommunityAnnouncementGroup = g),
      (l.isCommunityAnnouncementGroupFor = h),
      (l.isCommunityGeneralGroup = y),
      (l.isSuspendedGroup = C),
      (l.isSuspendedGroupFor = b),
      (l.canSendToGroup = v),
      (l.isInviteGrowthLockedGroup = S),
      (l.isInviteGrowthLockedGroupFor = R),
      (l.isTerminatedGroupOrNotMember = L),
      (l.isTerminatedGroupOrNotMemberFor = E),
      (l.isSuspendedCommunityAnnouncementGroup = k),
      (l.isSuspendedCommunityAnnouncementGroupFor = I),
      (l.isIntegrityDeactivatedCommunityAnnouncementGroup = T),
      (l.isIntegrityDeactivatedCommunityAnnouncementGroupFor = D),
      (l.isDeactivatedCommunityAnnouncementGroup = x),
      (l.shouldBlockCall = $),
      (l.updateReadOnly = P),
      (l.getParticipantCount = N),
      (l.getOneToOneContactFromGroupContact = M),
      (l.getGroupParticipantsCount = w),
      (l.getBroadcastChatTitle = A),
      (l.updateTitle = F),
      (l.updateCanSend = O),
      (l.canSendIgnoringAiAgentBlock = W),
      (l.shouldShowLeaveAndReportGroupModalForChat = V),
      (l.shouldShowLeaveAndReportGroupModalFor = H));
  },
  98,
);
