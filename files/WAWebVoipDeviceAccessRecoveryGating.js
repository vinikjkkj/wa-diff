__d(
  "WAWebVoipDeviceAccessRecoveryGating",
  ["WAWebABProps", "WAWebEnvironment", "WAWebUA"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        !r("WAWebEnvironment").isWindows &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_device_access_recovery_enabled",
        ) === !0
      );
    }
    function s() {
      return (
        (o("WAWebUA").UA.isBlink || o("WAWebUA").UA.isGecko) &&
        !r("WAWebEnvironment").isWindows &&
        e()
      );
    }
    function u() {
      return o("WAWebUA").UA.isWebkit && e();
    }
    ((l.isDeviceAccessRecoveryEnabled = e),
      (l.canAllowBlockedDeviceDuringCall = s),
      (l.isRefusalKeptUntilReload = u));
  },
  98,
);
