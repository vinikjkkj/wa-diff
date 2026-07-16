__d(
  "WAWebStatusChainFromMyCounter",
  ["WAWebStatusGatingUtils", "WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.STATUS_CHAIN_FROM_MY_INTERACTION_COUNT,
      );
      return typeof e == "number" ? e : 0;
    }
    function s() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.STATUS_CHAIN_FROM_MY_INTERACTION_COUNT,
        e() + 1,
      );
    }
    function u() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.STATUS_CHAIN_FROM_MY_INTERACTION_COUNT,
        0,
      );
    }
    function c() {
      return (
        e() >=
        o("WAWebStatusGatingUtils").getStatusChainFromMyInteractionLimit()
      );
    }
    ((l.getStatusChainFromMyInteractionCount = e),
      (l.recordStatusChainFromMyInteraction = s),
      (l.resetStatusChainFromMyInteractionCount = u),
      (l.hasReachedStatusChainFromMyInteractionLimit = c));
  },
  98,
);
