__d(
  "WAWebBizCoexGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "adv_accept_hosted_devices",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "adv_accept_hosted_devices",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "adv_accept_hosted_devices",
      );
    }
    function c() {
      return !!o("WAWebMobilePlatforms").isSMB();
    }
    function d() {
      return !o("WAWebMobilePlatforms").isSMB() || !e()
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "lazy_system_message_insertion_enabled",
          );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "auth_agents_consumer_exp_enabled",
      );
    }
    ((l.bizHostedDevicesEnabled = e),
      (l.bizHostedDevicesSystemMessageEnabled = s),
      (l.hostedDeviceSecurityCodeVerificationEnabled = u),
      (l.smbHostedPrimaryPairingAllowed = c),
      (l.smbHostedLazySystemMsgInsertInHistorySyncEnabled = d),
      (l.authorizedAgentsEnabled = m));
  },
  98,
);
