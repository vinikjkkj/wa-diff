__d(
  "WAWebGroupHistoryPostJoinEligibility",
  [
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes.flow",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1209600;
    function s(e) {
      return {
        groupType: e.groupType,
        hasCapi: e.hasCapi,
        iAmAdmin: e.participants.iAmAdmin(),
        iAmSuperAdmin: e.participants.iAmSuperAdmin(),
        memberShareGroupHistoryMode: e.memberShareGroupHistoryMode,
      };
    }
    function u(e) {
      return e === o("WAWebGroupType").GroupType.DEFAULT ||
        e === o("WAWebGroupType").GroupType.LINKED_SUBGROUP
        ? !0
        : e === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP;
    }
    function c(e) {
      return e.iAmAdmin || e.iAmSuperAdmin
        ? !0
        : e.memberShareGroupHistoryMode ===
            o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode
              .ALL_MEMBER_SHARE;
    }
    function d(t, n) {
      if (
        !o("WAWebGroupHistoryGating").isGroupHistoryPostJoinSenderEnabled() ||
        !u(n.groupType) ||
        n.hasCapi === !0 ||
        !c(n) ||
        o("WAWebBotUtils").isMetaAiBot(t.id) ||
        o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id)
      )
        return !1;
      var r = t.groupHistorySentState,
        a = t.joinTime;
      if (
        a == null ||
        r ===
          o("WAWebGroupHistoryPostJoinTypes.flow").GroupHistorySentState
            .HISTORY_SENT ||
        r ===
          o("WAWebGroupHistoryPostJoinTypes.flow").GroupHistorySentState
            .NOTICE_SENT
      )
        return !1;
      var i = e,
        l = o("WATimeUtils").unixTime();
      return !(l - a > i);
    }
    function m(e) {
      if (!o("WAWebGroupHistoryGating").isGroupHistoryPostJoinSenderEnabled())
        return [];
      var t = s(e);
      return e.participants.getModelsArray().filter(function (e) {
        return d(e, t);
      });
    }
    ((l.groupContextFromMetadata = s),
      (l.isEligibleForPostJoinHistory = d),
      (l.getEligiblePostJoinParticipants = m));
  },
  98,
);
