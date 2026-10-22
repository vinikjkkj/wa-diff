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
    var e, s;
    function u(e) {
      var t;
      if (!e) return !1;
      var n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        ((t = n.groupMetadata) == null ? void 0 : t.support) === !0
      );
    }
    function c(e) {
      var t;
      if (!e) return !1;
      var n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        ((t = n.groupMetadata) == null ? void 0 : t.isOpenBotGroup) === !0
      );
    }
    function d(e) {
      var t;
      if (!e) return !1;
      var n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        ((t = n.groupMetadata) == null ? void 0 : t.isTeeBotGroup) === !0
      );
    }
    function m(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        !!((t = n.groupMetadata) != null && t.terminated)
      );
    }
    function p(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(t) &&
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      );
    }
    function _(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(t) &&
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
      );
    }
    function f(e) {
      var t;
      if (!e) return !1;
      var n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        !!((t = n.groupMetadata) != null && t.suspended)
      );
    }
    function g(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        t.canSend &&
        !f(t) &&
        !m(t) &&
        !o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(t)
      );
    }
    function h(e) {
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
    function y(e) {
      var t;
      if (!e) return !1;
      var n = o("WAWebStateUtils").unproxy(e),
        r = m(n),
        a =
          f(n) &&
          !((t = n.groupMetadata) != null && t.participants.iAmMember());
      return (r || a) && !p(n);
    }
    function C(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && f(t)
      );
    }
    function b(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
        f(t) &&
        m(t)
      );
    }
    function v(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && m(t)
      );
    }
    function S(e) {
      return f(e) || m(e);
    }
    function R(t) {
      var a,
        i = o("WAWebStateUtils").unproxy(t);
      if (!(u(i) && i.isReadOnly)) {
        var l = (s || (s = n("Promise"))).resolve();
        if (o("WAWebChatGetters").getIsNewsletter(i)) {
          var c,
            d =
              !((c = i.newsletterMetadata) != null && c.iAmAdminOrOwner()) ||
              i.isSuspendedOrTerminated();
          i.isReadOnly !== d &&
            o("WAWebDBUpdateChatTable")
              .updateChatTable(i.id, { isReadOnly: d })
              .then(function () {
                ((i.isReadOnly = d), D(i));
              })
              .catch(r("WAWebNoop"));
          return;
        }
        if (
          o("WAWebChatGetters").getIsGroup(i) &&
          !((a = i.groupMetadata) != null && a.stale)
        ) {
          var p,
            _ =
              o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(
                i.groupMetadata,
              ) !== o("WAWebGroupType").GroupType.COMMUNITY &&
              (!((p = i.groupMetadata) != null && p.participants.iAmMember()) ||
                m(i));
          i.isReadOnly !== _ &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "chat:updateReadOnly:old ",
                  ", new ",
                  "",
                ])),
              i.isReadOnly,
              _,
            ),
            (l = o("WAWebDBUpdateChatTable")
              .updateChatTable(i.id, { isReadOnly: _ })
              .then(function () {
                ((i.isReadOnly = _), D(i));
              })));
        }
        l.then(function () {
          o("WAWebChatGetters").getIsBroadcast(i) && T(i);
        });
      }
    }
    function L(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        ((t = n.groupMetadata) == null ? void 0 : t.participants.length) || 1
      );
    }
    function E(e, t, n) {
      var r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
      return r.equals(e) ? o("WAWebUserPrefsMeUser").getMeUserOrThrow() : e;
    }
    function k(e) {
      var t,
        n = e.participants,
        r = (t = e.size) != null ? t : 0,
        o = n.iAmAdmin() ? r : n.length;
      return o;
    }
    function I(e) {
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
    function T(e) {
      if (o("WAWebChatGetters").getIsBroadcast(e)) e.formattedTitle = I(e);
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
    function D(e, t) {
      var n = P(e, { businessProfile: t, ignoreAiAgentBlock: !1 });
      return ((e.canSend = n), n);
    }
    function x(e) {
      return (
        o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
        o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(e)
      );
    }
    function $(e) {
      return e.contact == null
        ? !1
        : P(e, { businessProfile: null, ignoreAiAgentBlock: !0 });
    }
    function P(e, t) {
      var n = t.businessProfile,
        r = t.ignoreAiAgentBlock;
      if (
        e.isReadOnly ||
        e.isAnnounceGrpRestrict === !0 ||
        o("WAWebTosGating").shouldBlockByTos(e.contact) ||
        o("WAWebTosGating").shouldBlockByBotTos(e.contact) ||
        o("WAWebTosCountryGating").shouldBlockByCountry(e.contact) ||
        o("WAWebBotFrontendGating").isBotChatUnavailable(e.id) ||
        (!r && x(e)) ||
        o("WAWebBotComposerTreatment").isBotSupportComposerBlocked(e.id)
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
    function N(e) {
      return o("WAWebChatGetters").getIsGroup(e) && !p(e) && !e.isReadOnly;
    }
    ((l.isSupportGroup = u),
      (l.isAIGroupOpen = c),
      (l.isAIGroupTee = d),
      (l.isTerminatedGroup = m),
      (l.isCommunityAnnouncementGroup = p),
      (l.isCommunityGeneralGroup = _),
      (l.isSuspendedGroup = f),
      (l.canSendToGroup = g),
      (l.isInviteGrowthLockedGroup = h),
      (l.isTerminatedGroupOrNotMember = y),
      (l.isSuspendedCommunityAnnouncementGroup = C),
      (l.isIntegrityDeactivatedCommunityAnnouncementGroup = b),
      (l.isDeactivatedCommunityAnnouncementGroup = v),
      (l.shouldBlockCall = S),
      (l.updateReadOnly = R),
      (l.getParticipantCount = L),
      (l.getOneToOneContactFromGroupContact = E),
      (l.getGroupParticipantsCount = k),
      (l.getBroadcastChatTitle = I),
      (l.updateTitle = T),
      (l.updateCanSend = D),
      (l.canSendIgnoringAiAgentBlock = $),
      (l.shouldShowLeaveAndReportGroupModalForChat = N));
  },
  98,
);
