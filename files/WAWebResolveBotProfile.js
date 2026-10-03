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
      (l.resolveBotSupportInput = s));
  },
  98,
);
