__d(
  "WAWebBizCoexGatingUtils",
  ["WAWebABProps", "cr:37209"],
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
      return o("WAWebABProps").getABPropConfigValue(
        "adv_accept_hosted_devices",
      );
    }
    function p() {
      return !!(u != null && u());
    }
    function _() {
      return !(u != null && u()) || !c()
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "lazy_system_message_insertion_enabled",
          );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "auth_agents_consumer_exp_enabled",
      );
    }
    ((l.bizHostedDevicesEnabled = c),
      (l.bizHostedDevicesSystemMessageEnabled = d),
      (l.hostedDeviceSecurityCodeVerificationEnabled = m),
      (l.smbHostedPrimaryPairingAllowed = p),
      (l.smbHostedLazySystemMsgInsertInHistorySyncEnabled = _),
      (l.authorizedAgentsEnabled = f));
  },
  98,
);
