__d(
  "WAWebBotExposedName",
  [
    "fbt",
    "WAWebBotBaseGating",
    "WAWebBotProductGating",
    "WAWebBotSupportState",
    "WAWebPrimaryFeaturesModel",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "Unknown account").toString();
    }
    function u(e) {
      if (!o("WAWebBotBaseGating").isStandardBotProfileEnabled()) return !1;
      var t = o("WAWebBotSupportState").evaluateBotSupport(e, function (e) {
          return o("WAWebBotProductGating").isBotProductGateOn(
            e,
            o("WAWebPrimaryFeaturesModel").PrimaryFeatures
              .aiBotIntegrationEnabled,
          );
        }),
        n = t.kind;
      return (
        n === o("WAWebBotSupportState").BotSupportStateKind.UNRESOLVED ||
        n === o("WAWebBotSupportState").BotSupportStateKind.DEPRECATED ||
        n === o("WAWebBotSupportState").BotSupportStateKind.UNSUPPORTED
      );
    }
    function c() {
      return s._(/*BTDS*/ "Lorem").toString();
    }
    ((l.getUnknownAccountName = e),
      (l.isBotProfileViewOnly = u),
      (l.getAgentSubtitle = c));
  },
  226,
);
