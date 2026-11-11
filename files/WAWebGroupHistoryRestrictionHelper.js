__d(
  "WAWebGroupHistoryRestrictionHelper",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupAgentProfileRouting",
    "WAWebGroupHistoryGating",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebBotUtils").isMetaAiBot(e) ||
        o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
        ? !0
        : o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) &&
            (o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
              o("WAWebGroupHistoryGating").isMuseGroupHistoryShareEnabled());
    }
    function s(t) {
      return (
        e(t) &&
        !(
          o("WAWebGroupAgentProfileRouting").isViewerOwnLiveMuseAgent(t) &&
          o("WAWebGroupHistoryGating").isMuseGroupHistoryShareEnabled()
        )
      );
    }
    function u(t, n) {
      n === void 0 && (n = e);
      var r = [],
        a = [];
      for (var i of t)
        n(i)
          ? a.push(o("WAWebWidFactory").asUserWidOrThrow(i))
          : r.push(o("WAWebWidFactory").asUserWidOrThrow(i));
      return { historyReceivers: r, nonHistoryReceivers: a };
    }
    function c(t) {
      return t.some(function (t) {
        return !e(t.id);
      });
    }
    ((l.isHistoryRestrictedWid = e),
      (l.isPostJoinHistoryRestrictedWid = s),
      (l.filterParticipants = u),
      (l.hasUnrestrictedParticipants = c));
  },
  98,
);
