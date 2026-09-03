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
    function u(e, t, n) {
      return o("WAWebBotStaticProfiles").isStaticProfile(e) ||
        (n != null && n !== "")
        ? !0
        : !c(t);
    }
    function c(e) {
      if (!o("WAWebBotBaseGating").isStandardBotProfileEnabled()) return !1;
      var t = o("WAWebBotSupportState").evaluateBotSupport(e, function (e) {
        return o("WAWebBotProductGating").isBotProductGateOn(
          e,
          o("WAWebPrimaryFeaturesModel").PrimaryFeatures
            .aiBotIntegrationEnabled,
        );
      });
      return t.kind ===
        o("WAWebBotSupportState").BotSupportStateKind.UNRESOLVED ||
        t.kind === o("WAWebBotSupportState").BotSupportStateKind.DEPRECATED ||
        t.kind === o("WAWebBotSupportState").BotSupportStateKind.UNSUPPORTED
        ? !0
        : t.kind === o("WAWebBotSupportState").BotSupportStateKind.DELETED
          ? !o("WAWebBotSupportState").hasCustomDeletedTombstone(t)
          : t.kind === o("WAWebBotSupportState").BotSupportStateKind.SUPPORTED
            ? !1
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t.kind,
                );
              })();
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
