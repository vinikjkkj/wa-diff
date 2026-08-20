__d(
  "WAWebBotExposedName",
  [
    "fbt",
    "WAWebBotBaseGating",
    "WAWebBotProductGating",
    "WAWebBotStaticProfiles",
    "WAWebBotSupportState",
    "WAWebPrimaryFeaturesModel",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "Unknown account").toString();
    }
    function u(e, t) {
      return o("WAWebBotStaticProfiles").isStaticProfile(e) ? !0 : !c(t);
    }
    function c(e) {
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
    function d() {
      return s._(/*BTDS*/ "Agent").toString();
    }
    ((l.getUnknownAccountName = e),
      (l.shouldDisplayProfileName = u),
      (l.isBotProfileViewOnly = c),
      (l.getAgentSubtitle = d));
  },
  226,
);
