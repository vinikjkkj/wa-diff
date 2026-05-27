__d(
  "WAWebGroupHistoryPostJoinEligibility",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes.flow",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        groupType: e.groupType,
        hasCapi: e.hasCapi,
        iAmAdmin: e.participants.iAmAdmin(),
        iAmSuperAdmin: e.participants.iAmSuperAdmin(),
        memberShareGroupHistoryMode: e.memberShareGroupHistoryMode,
      };
    }
    function s(e) {
      return e === o("WAWebGroupType").GroupType.DEFAULT ||
        e === o("WAWebGroupType").GroupType.LINKED_SUBGROUP
        ? !0
        : e === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP;
    }
    function u(e, t, n) {
      return e || t
        ? !0
        : n ===
            o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode
              .ALL_MEMBER_SHARE;
    }
    function c(e, t, n) {
      var r;
      if (
        (!o("WAWebGroupHistoryGating").isGroupHistoryPostJoinSenderEnabled() &&
          !o(
            "WAWebGroupHistoryGating",
          ).isGroupHistoryPostJoinInternalTesterEnabled()) ||
        !s(t.groupType) ||
        t.hasCapi === !0 ||
        !u(t.iAmAdmin, t.iAmSuperAdmin, t.memberShareGroupHistoryMode) ||
        o("WAWebBotUtils").isMetaAiBot(e.id) ||
        o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id)
      )
        return !1;
      var a = e.groupHistorySentState,
        i = (r = e.joinTime) != null ? r : n;
      if (
        i == null ||
        a ===
          o("WAWebGroupHistoryPostJoinTypes.flow").GroupHistorySentState
            .HISTORY_SENT ||
        a ===
          o("WAWebGroupHistoryPostJoinTypes.flow").GroupHistorySentState
            .NOTICE_SENT
      )
        return !1;
      var l = o("WAWebABProps").getABPropConfigValue(
          "group_history_new_user_threshold_secs",
        ),
        c = o("WATimeUtils").unixTime();
      return !(c - i > l);
    }
    function d(t) {
      if (!o("WAWebGroupHistoryGating").isGroupHistoryPostJoinSenderEnabled())
        return [];
      var n = e(t);
      return t.participants.getModelsArray().filter(function (e) {
        return c(e, n);
      });
    }
    ((l.groupContextFromMetadata = e),
      (l.canCurrentUserShareHistory = u),
      (l.isEligibleForPostJoinHistory = c),
      (l.getEligiblePostJoinParticipants = d));
  },
  98,
);
