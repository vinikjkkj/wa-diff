__d(
  "WAWebGroupHistoryRestrictionHelper",
  ["WAWebBotGroupGatingUtils", "WAWebBotUtils", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebBotUtils").isMetaAiBot(e) ||
        o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
        ? !0
        : o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) &&
            o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function s(t) {
      var n = [],
        r = [];
      for (var a of t)
        e(a)
          ? r.push(o("WAWebWidFactory").asUserWidOrThrow(a))
          : n.push(o("WAWebWidFactory").asUserWidOrThrow(a));
      return { historyReceivers: n, nonHistoryReceivers: r };
    }
    function u(t) {
      return t.some(function (t) {
        return !e(t.id);
      });
    }
    ((l.isHistoryRestrictedWid = e),
      (l.filterParticipants = s),
      (l.hasUnrestrictedParticipants = u));
  },
  98,
);
