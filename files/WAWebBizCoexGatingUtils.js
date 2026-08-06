__d(
  "WAWebBizCoexGatingUtils",
  [
    "WAWebABProps",
    "WAWebAgentTransitionUtils",
    "WAWebUserPrefsMultiDevice",
    "cr:37209",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = n("cr:37209")) != null ? e : {},
      u = s.isSMB;
    function c() {
      return !!(u != null && u());
    }
    function d() {
      return u != null && u()
        ? o("WAWebABProps").getABPropConfigValue(
            "lazy_system_message_insertion_enabled",
          )
        : !1;
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "auth_agents_consumer_offboarding_exp_enabled",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_auth_agent_offboarding_enabled",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_auth_agents_feature_control_enabled",
      );
    }
    function f() {
      return (
        (u == null ? void 0 : u()) === !0 &&
        !o(
          "WAWebUserPrefsMultiDevice",
        ).getIsHostedMeAccountFromLocalStorage() &&
        o("WAWebAgentTransitionUtils").getMeSmbOffboardingState() &&
        p()
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_auth_agents_feature_control_enabled",
      );
    }
    ((l.smbHostedPrimaryPairingAllowed = c),
      (l.smbHostedLazySystemMsgInsertInHistorySyncEnabled = d),
      (l.agentOffboardingEnabled = m),
      (l.agentSmbOffboardingEnabled = p),
      (l.agentBizProfileFeatureControlEnabled = _),
      (l.isCallingDisabledOnAuthAgentSoftOffboarded = f),
      (l.authAgentFeatureControlEnabled = g));
  },
  98,
);
