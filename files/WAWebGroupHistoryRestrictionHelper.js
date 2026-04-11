__d(
  "WAWebGroupHistoryRestrictionHelper",
  ["WAWebBotUtils", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        o("WAWebBotUtils").isMetaAiBot(e.id) ||
        o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id)
      );
    }
    function s(e) {
      return (
        o("WAWebBotUtils").isMetaAiBot(e) ||
        o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
      );
    }
    function u(e) {
      var t = [],
        n = [];
      for (var r of e)
        s(r)
          ? n.push(o("WAWebWidFactory").asUserWidOrThrow(r))
          : t.push(o("WAWebWidFactory").asUserWidOrThrow(r));
      return { historyReceivers: t, nonHistoryReceivers: n };
    }
    function c(t) {
      return t.some(function (t) {
        return !e(t);
      });
    }
    ((l.filterParticipants = u), (l.hasUnrestrictedParticipants = c));
  },
  98,
);
