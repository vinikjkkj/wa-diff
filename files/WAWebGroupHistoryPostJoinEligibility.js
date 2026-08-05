__d(
  "WAWebGroupHistoryPostJoinEligibility",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        groupType: e.groupType,
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
      return d(t) && m(e, n).eligible;
    }
    function d(e) {
      return !o(
        "WAWebGroupHistoryGating",
      ).isGroupHistoryPostJoinSenderOrInternalTesterEnabled(e.groupWid) ||
        !s(e.groupType) ||
        e.hasCapi === !0
        ? !1
        : u(e.iAmAdmin, e.iAmSuperAdmin, e.memberShareGroupHistoryMode);
    }
    function m(e, t) {
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
    function p(e, t, n) {
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
    function _(e, t, n, r) {
      var o;
      return c(e, t, n) && !p(r, (o = e.joinTime) != null ? o : n, t.groupWid);
    }
    function f(t) {
      if (
        !o(
          "WAWebGroupHistoryGating",
        ).isGroupHistoryPostJoinSenderOrInternalTesterEnabled(t.id)
      )
        return [];
      var n = e(t);
      return t.participants.getModelsArray().filter(function (e) {
        return c(e, n);
      });
    }
    ((l.groupContextFromMetadata = e),
      (l.canCurrentUserShareHistory = u),
      (l.isEligibleForPostJoinHistory = c),
      (l.isPostJoinHistoryGroupEligible = d),
      (l.getParticipantPostJoinEligibility = m),
      (l.hasNoShareableHistoryBeforeJoin = p),
      (l.canSendPostJoinHistoryToParticipant = _),
      (l.getEligiblePostJoinParticipants = f));
  },
  98,
);
