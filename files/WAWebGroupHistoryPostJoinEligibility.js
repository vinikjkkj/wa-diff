__d(
  "WAWebGroupHistoryPostJoinEligibility",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupHistoryShareMode",
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
    function u(e, t, n) {
      return e || t
        ? !0
        : n ===
            o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode
              .ALL_MEMBER_SHARE;
    }
    function c(e, t, n) {
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
    function d(e, t, n) {
      return m(t) && p(e, n).eligible;
    }
    function m(e) {
      return !o(
        "WAWebGroupHistoryGating",
      ).isGroupHistoryPostJoinSenderOrInternalTesterEnabled(e.groupWid) ||
        !s(e.groupType) ||
        e.hasCapi === !0
        ? !1
        : u(e.iAmAdmin, e.iAmSuperAdmin, e.memberShareGroupHistoryMode);
    }
    function p(e, t) {
      var n;
      if (
        o("WAWebBotUtils").isMetaAiBot(e.id) ||
        o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id)
      )
        return { eligible: !1, reason: "bot" };
      var r = (n = e.joinTime) != null ? n : t;
      if (r == null) return { eligible: !1, reason: "no_join_time" };
      var a = e.groupHistorySentState;
      if (
        a ===
          o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState
            .HISTORY_SENT ||
        a ===
          o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.NOTICE_SENT
      )
        return { eligible: !1, reason: "already_received" };
      var i = o("WAWebABProps").getABPropConfigValue(
        "group_history_new_user_threshold_secs",
      );
      return o("WATimeUtils").unixTime() - r > i
        ? { eligible: !1, reason: "window_expired" }
        : { eligible: !0 };
    }
    function _(e, t, n) {
      if (e == null || !e.startOfHistoryLoaded) return !1;
      var r = e.earliestShareableMsgT,
        a = e.latestShareableMsgT;
      if (r == null) return !0;
      if (t == null) return !1;
      if (r > t) return !0;
      if (n != null && a != null) {
        var i = o(
          "WAWebGroupHistoryGating",
        ).getGroupHistoryMessagesTimeLimitSecs(n);
        if (a < t - i) return !0;
      }
      return !1;
    }
    function f(e, t, n, r) {
      var o;
      return d(e, t, n) && !_(r, (o = e.joinTime) != null ? o : n, t.groupWid);
    }
    function g(t) {
      if (
        !o(
          "WAWebGroupHistoryGating",
        ).isGroupHistoryPostJoinSenderOrInternalTesterEnabled(t.id)
      )
        return [];
      var n = e(t);
      return t.participants.getModelsArray().filter(function (e) {
        return d(e, n);
      });
    }
    ((l.groupContextFromMetadata = e),
      (l.canCurrentUserShareHistory = u),
      (l.hasResolvableNonSelfRecipient = c),
      (l.isEligibleForPostJoinHistory = d),
      (l.isPostJoinHistoryGroupEligible = m),
      (l.getParticipantPostJoinEligibility = p),
      (l.hasNoShareableHistoryBeforeJoin = _),
      (l.canSendPostJoinHistoryToParticipant = f),
      (l.getEligiblePostJoinParticipants = g));
  },
  98,
);
