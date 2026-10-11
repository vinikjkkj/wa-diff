__d(
  "WAWebPairEligibilityConfig",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return !0;
    }
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "capi_messaging_pairs_client_enabled",
        ) === !0
      );
    }
    function u(e) {
      return o("WAWebABProps").getABPropConfigValue(e.gate) === !0;
    }
    ((l.isPairConsumerUnderEpd = e),
      (l.isPairMasterGateEnabled = s),
      (l.isPairAdopterGateEnabled = u));
  },
  98,
);
