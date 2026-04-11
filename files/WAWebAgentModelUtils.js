__d(
  "WAWebAgentModelUtils",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebConnModel",
    "WAWebFeatureFlagName",
    "WAWebSubscriptionFeatureFlagActions",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "{business-name} (Admin)", [
        s._param("business-name", o("WAWebConnModel").Conn.pushname),
      ]);
    }
    function u() {
      return (
        o("WAWebBizGatingUtils").isMultiDeviceMessageAttributionEnabled() &&
        o(
          "WAWebSubscriptionFeatureFlagActions",
        ).isSubscriptionFeatureFlagEnabled(
          o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
        )
      );
    }
    var c = 0;
    function d(t, n) {
      return n === c ? e().toString() : t;
    }
    function m(e) {
      return d(e.name, e.deviceId);
    }
    ((l.canUserSeeMessageAttribution = u),
      (l.PRIMARY_DEVICE_ID = c),
      (l.getFormattedAgentName = d),
      (l.getFormattedAgentNameForAgent = m));
  },
  226,
);
