__d(
  "WAWebPQGatingUtils",
  ["WAWebABProps", "WAWebSessionScope"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      return (
        e == null &&
          (e = o("WAWebABProps").getABPropConfigValue("pq_keys_upload") === !0),
        e
      );
    }
    function c() {
      return (
        s == null &&
          (s =
            u() &&
            o("WAWebABProps").getABPropConfigValue(
              "pq_1on1_message_enabled",
            ) === !0),
        s
      );
    }
    function d() {
      return c()
        ? o("WAWebSessionScope").SessionScope.PQ
        : o("WAWebSessionScope").SessionScope.DEFAULT;
    }
    function m() {
      var e = c()
          ? o("WAWebABProps").getABPropConfigValue(
              "pq_session_upgrade_period_days",
            )
          : 0,
        t =
          e > 0
            ? o("WAWebABProps").getABPropConfigValue(
                "pq_session_upgrade_max_devices_per_period",
              )
            : 0;
      return t > 0 &&
        !o("WAWebABProps").getABPropConfigValue("pq_1on1_messaging_killswitch")
        ? { maxDevices: t, periodDays: e }
        : null;
    }
    function p() {
      return !1;
    }
    ((l.isPqKeysUploadEnabled = u),
      (l.isPq1on1MessageEnabled = c),
      (l.getOneToOneChatSessionScope = d),
      (l.getPqSessionUpgradePolicy = m),
      (l.isPqKeyRollbackEnabled = p));
  },
  98,
);
