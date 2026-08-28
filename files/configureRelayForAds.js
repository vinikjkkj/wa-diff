__d(
  "configureRelayForAds",
  ["configureRelayFeatureFlagsForWWW", "gkx", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      (r("configureRelayFeatureFlagsForWWW")(),
        (o(
          "relay-runtime",
        ).RelayFeatureFlags.MARK_RESOLVER_VALUES_AS_CLEAN_AFTER_FRAGMENT_REREAD =
          !0),
        r("gkx")("5289") &&
          (o("relay-runtime").RelayFeatureFlags.OPTIMIZE_NOTIFY = !0),
        (r("gkx")("20372") || r("gkx")("5620")) &&
          (o(
            "relay-runtime",
          ).RelayFeatureFlags.ENABLE_READER_FRAGMENTS_LOGGING = !0));
    }
    l.default = e;
  },
  98,
);
