__d(
  "WAWebBizCoexGatingUtils",
  [
    "WAWebABProps",
    "WAWebAgentTransitionUtils",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMultiDevice",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("gkx")("10314") ? null : o("WAWebMobilePlatforms").isSMB;
    function s() {
      return !!(e != null && e());
    }
    function u() {
      return e != null && e()
        ? o("WAWebABProps").getABPropConfigValue(
            "lazy_system_message_insertion_enabled",
          )
        : !1;
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "auth_agents_consumer_offboarding_exp_enabled",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_auth_agent_offboarding_enabled",
      );
    }
    function m() {
      return (
        (e == null ? void 0 : e()) === !0 &&
        !o(
          "WAWebUserPrefsMultiDevice",
        ).getIsHostedMeAccountFromLocalStorage() &&
        o("WAWebAgentTransitionUtils").getMeSmbOffboardingState() &&
        d()
      );
    }
    ((l.smbHostedPrimaryPairingAllowed = s),
      (l.smbHostedLazySystemMsgInsertInHistorySyncEnabled = u),
      (l.agentOffboardingEnabled = c),
      (l.agentSmbOffboardingEnabled = d),
      (l.isCallingDisabledOnAuthAgentSoftOffboarded = m));
  },
  98,
);
