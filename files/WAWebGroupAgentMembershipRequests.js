__d(
  "WAWebGroupAgentMembershipRequests",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotStaticProfiles",
    "WAWebBotUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
        e.length === 0 ||
        t.length === 0
      )
        return [];
      var r = new Set(
        t.flatMap(function (e) {
          return u(e, n.getAlternateUserWid);
        }),
      );
      return e.filter(function (e) {
        return r.has(String(e.addedBy)) && c(e.id, n.getAgentProfile);
      });
    }
    function s(e) {
      return (
        o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) &&
        !o("WAWebBotStaticProfiles").isStaticProfile(e)
      );
    }
    function u(e, t) {
      var n = e.isBot() ? null : t(o("WAWebWidFactory").asUserWidOrThrow(e));
      return n == null ? [String(e)] : [String(e), String(n)];
    }
    function c(e, t) {
      if (!s(e)) return !1;
      var n = t(e);
      if ((n == null ? void 0 : n.lastFetchedTimeMs) == null) return !0;
      var r = o("WAWebBotProduct").botProductFromServerValue(n.product);
      return (
        r === o("WAWebBotProduct").BotProduct.MUSE ||
        (r === o("WAWebBotProduct").BotProduct.HATCH &&
          !e.equals(o("WAWebBotUtils").HATCH_BOT_FBID_WID))
      );
    }
    ((l.selectMuseAgentRequestsOfRemovedMembers = e),
      (l.isMuseAgentRequestCandidate = s));
  },
  98,
);
