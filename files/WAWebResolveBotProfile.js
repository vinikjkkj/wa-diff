__d(
  "WAWebResolveBotProfile",
  ["WAWebBotProfileCollection", "WAWebBotStaticProfiles"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebBotStaticProfiles").getStaticBotSupportInput(e);
      if (t != null) return t;
      var n = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
      return n == null ||
        (n.product == null && n.isDeprecated == null && n.isDeleted == null)
        ? null
        : {
            product: n.product,
            isDeprecated: n.isDeprecated,
            isDeleted: n.isDeleted,
            isSynced: !0,
          };
    }
    l.resolveBotSupportInput = e;
  },
  98,
);
