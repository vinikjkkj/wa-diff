__d(
  "WAWebGroupHistoryPostJoinEligibility",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        groupType: o("WAWebGroupMetadataGetters").getGroupType(e),
        groupWid: e.id,
        hasCapi: e.hasCapi,
        iAmAdmin: e.participants.iAmAdmin(),
        iAmSuperAdmin: e.participants.iAmSuperAdmin(),
        isAnnouncementGroup: e.announce === !0,
        memberShareGroupHistoryMode: e.memberShareGroupHistoryMode,
      };
    }
    function s(e) {
      return e === o("WAWebGroupType").GroupType.DEFAULT ||
        e === o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
        e === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
        ? !0
        : e === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
    }
    function u(e) {
      var t = e.groupType,
        n = e.iAmAdmin,
        r = e.iAmSuperAdmin,
        a = e.memberShareGroupHistoryMode;
      return n || r
        ? !0
        : t !== o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
            a ===
              o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode
                .ALL_MEMBER_SHARE;
    }
    function c(e) {
      return u({
        groupType: o("WAWebGroupMetadataGetters").getGroupType(e),
        iAmAdmin: e.participants.iAmAdmin(),
        iAmSuperAdmin: e.participants.iAmSuperAdmin(),
        memberShareGroupHistoryMode: e.memberShareGroupHistoryMode,
      });
    }
    function d(e, t, n) {
      return e == null
        ? !1
        : e.some(function (e) {
            return (
              e != null &&
              !o("WAWebUserPrefsMeUser").isMeAccount(e) &&
              (n == null || n.get(e.toString()) === t)
            );
          });
    }
    function m(e, t, n, r) {
      return p(t) && y(e, t, n, r).eligible;
    }
    function p(e) {
      return _(e);
    }
    function _(e) {
      return f(e).eligible;
    }
    function f(e) {
      return s(e.groupType)
        ? e.hasCapi === !0
          ? { eligible: !1, reason: "group_type_ineligible" }
          : u({
                groupType: e.groupType,
                iAmAdmin: e.iAmAdmin,
                iAmSuperAdmin: e.iAmSuperAdmin,
                memberShareGroupHistoryMode: e.memberShareGroupHistoryMode,
              })
            ? { eligible: !0 }
            : { eligible: !1, reason: "sender_not_allowed" }
        : { eligible: !1, reason: "group_type_ineligible" };
    }
    function g(e) {
      return o(
        "WAWebGroupHistoryGating",
      ).isGroupHistoryPostJoinSenderOrInternalTesterEnabled(e);
    }
    function h(e, t, n) {
      var r;
      if (
        (n === void 0 &&
          (n = o("WAWebGroupHistoryRestrictionHelper").isHistoryRestrictedWid),
        n(e.id))
      )
        return { eligible: !1, reason: "bot" };
      var a = (r = e.joinTime) != null ? r : t;
      if (a == null) return { eligible: !1, reason: "no_join_time" };
      if (C(e.groupHistorySentState))
        return { eligible: !1, reason: "already_received" };
      var i = o("WAWebABProps").getABPropConfigValue(
        "group_history_new_user_threshold_secs",
      );
      return o("WATimeUtils").unixTime() - a > i
        ? { eligible: !1, reason: "window_expired" }
        : { eligible: !0 };
    }
    function y(e, t, n, r) {
      return t.isAnnouncementGroup &&
        o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e.id)
        ? { eligible: !1, reason: "agent_in_announcement_group" }
        : h(e, n, r);
    }
    function C(e) {
      return (
        e ===
          o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState
            .HISTORY_SENT ||
        e ===
          o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.NOTICE_SENT
      );
    }
    function b(e) {
      var t,
        n =
          (t = r("WAWebGroupMetadataCollection").get(e)) == null
            ? void 0
            : t.participants.getModelsArray().find(function (e) {
                return (
                  o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e.id) &&
                  C(e.groupHistorySentState)
                );
              });
      return n == null ||
        !o("WAWebGroupHistoryGating").isMuseGroupHistoryShareEnabled()
        ? null
        : o("WAWebFrontendContactGetters").getFormattedName(n.contact);
    }
    function v(e, t, n) {
      if (e == null || !e.startOfHistoryLoaded) return !1;
      var r = e.earliestShareableMsgT,
        a = e.latestShareableMsgT;
      if (r == null) return !0;
      if (t == null) return !1;
      if (r > t) return !0;
      if (n != null && a != null) {
        var i = o(
          "WAWebGroupHistoryGating",
        ).getGroupHistoryMessagesTimeLimitSecs();
        if (a < t - i) return !0;
      }
      return !1;
    }
    function S(e, t, n, r, o) {
      var a;
      return (
        m(e, t, n, o) && !v(r, (a = e.joinTime) != null ? a : n, t.groupWid)
      );
    }
    function R(e, t, n, r) {
      return (
        S(
          e,
          t,
          n,
          r,
          o("WAWebGroupHistoryRestrictionHelper")
            .isPostJoinHistoryRestrictedWid,
        ) && g(t.groupWid)
      );
    }
    function L(t) {
      if (
        !o(
          "WAWebGroupHistoryGating",
        ).isGroupHistoryPostJoinSenderOrInternalTesterEnabled(t.id)
      )
        return [];
      var n = e(t);
      return t.participants.getModelsArray().filter(function (e) {
        return m(e, n);
      });
    }
    ((l.groupContextFromMetadata = e),
      (l.canCurrentUserShareHistory = u),
      (l.canCurrentUserShareHistoryInGroup = c),
      (l.hasResolvableNonSelfRecipient = d),
      (l.isEligibleForPostJoinHistory = m),
      (l.isPostJoinHistoryGroupEligible = p),
      (l.isPostJoinHistoryGroupStructurallyEligible = _),
      (l.getPostJoinHistoryGroupEligibility = f),
      (l.isPostJoinHistoryExperimentArmEnabled = g),
      (l.getParticipantPostJoinEligibility = h),
      (l.getParticipantPostJoinEligibilityInGroup = y),
      (l.isAlreadyReceivedState = C),
      (l.getNameOfMuseAgentWithSharedHistory = b),
      (l.hasNoShareableHistoryBeforeJoin = v),
      (l.canSendPostJoinHistoryToParticipant = S),
      (l.shouldOfferPostJoinHistoryToParticipant = R),
      (l.getEligiblePostJoinParticipants = L));
  },
  98,
);
