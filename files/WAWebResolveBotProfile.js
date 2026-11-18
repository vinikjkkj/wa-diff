__d(
  "WAWebResolveBotProfile",
  [
    "WAWebBotProfileCollection",
    "WAWebBotStaticProfiles",
    "WAWebMuseBotIdentity",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return o("WAWebMuseBotIdentity").isMuseBotProfileProduct(
        e,
        (t = o("WAWebBotProfileCollection").BotProfileCollection.get(e)) == null
          ? void 0
          : t.product,
      );
    }
    function s(e) {
      if (!e.isFbidBot() || o("WAWebBotStaticProfiles").isStaticProfile(e))
        return !1;
      var t = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
      return (
        u(e) == null ||
        ((t == null ? void 0 : t.name) == null &&
          (t == null ? void 0 : t.lastFetchedTimeMs) == null)
      );
    }
    function u(e) {
      var t = o("WAWebBotStaticProfiles").getStaticBotSupportInput(e);
      if (t != null) return t;
      var n = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
      return n == null ||
        (n.product == null &&
          n.isDeprecated == null &&
          n.hcaEntrypointId == null &&
          n.isDeleted == null)
        ? null
        : {
            product: n.product,
            isDeprecated: n.isDeprecated,
            hcaEntrypointId: n.hcaEntrypointId,
            isDeleted: n.isDeleted,
            isSynced: !0,
          };
    }
    ((l.shouldHideMuseBotFromCachedProfile = e),
      (l.isBotProfileMissing = s),
      (l.resolveBotSupportInput = u));
  },
  98,
);
