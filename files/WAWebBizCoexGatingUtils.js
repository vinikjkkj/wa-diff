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
      return o("WAWebABProps").getABPropConfigValue(
        "adv_accept_hosted_devices",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "adv_accept_hosted_devices",
      );
    }
    function m() {
      return !!(u != null && u());
    }
    function p() {
      return u != null && u()
        ? o("WAWebABProps").getABPropConfigValue(
            "lazy_system_message_insertion_enabled",
          )
        : !1;
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "auth_agents_consumer_exp_enabled",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "auth_agents_consumer_offboarding_exp_enabled",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_auth_agent_offboarding_enabled",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_auth_agents_feature_control_enabled",
      );
    }
    function y() {
      return (
        (u == null ? void 0 : u()) === !0 &&
        !o(
          "WAWebUserPrefsMultiDevice",
        ).getIsHostedMeAccountFromLocalStorage() &&
        o("WAWebAgentTransitionUtils").getMeSmbOffboardingState() &&
        g()
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_auth_agents_feature_control_enabled",
      );
    }
    ((l.bizHostedDevicesSystemMessageEnabled = c),
      (l.hostedDeviceSecurityCodeVerificationEnabled = d),
      (l.smbHostedPrimaryPairingAllowed = m),
      (l.smbHostedLazySystemMsgInsertInHistorySyncEnabled = p),
      (l.authorizedAgentsEnabled = _),
      (l.agentOffboardingEnabled = f),
      (l.agentSmbOffboardingEnabled = g),
      (l.agentBizProfileFeatureControlEnabled = h),
      (l.isCallingDisabledOnAuthAgentSoftOffboarded = y),
      (l.authAgentFeatureControlEnabled = C));
  },
  98,
);
