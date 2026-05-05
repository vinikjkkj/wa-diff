__d(
  "configureRelayFeatureFlagsForWWW",
  ["gkx", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      (((e = o("relay-runtime")).RelayFeatureFlags.ENABLE_RELAY_RESOLVERS = !0),
        (e.RelayFeatureFlags.ENABLE_FRIENDLY_QUERY_NAME_GQL_URL =
          r("gkx")("21089")),
        (e.RelayFeatureFlags.ENABLE_DO_NOT_WRAP_LIVE_QUERY = !0),
        (e.RelayFeatureFlags.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT = !0),
        (e.RelayFeatureFlags.STRING_INTERN_LEVEL = 2),
        (e.RelayFeatureFlags.MAX_DATA_ID_LENGTH = 100),
        (e.RelayFeatureFlags.ENABLE_NONCOMPLIANT_ERROR_HANDLING_ON_LISTS = !0),
        (e.RelayFeatureFlags.ENABLE_CYLE_DETECTION_IN_VARIABLES = !0),
        (e.RelayFeatureFlags.ENABLE_NOTIFY_SUBSCRIPTION = r("gkx")("5607")),
        (e.RelayFeatureFlags.ENABLE_ACTIVITY_COMPATIBILITY = !0),
        (e.RelayFeatureFlags.ENABLE_READ_TIME_RESOLVER_STORAGE_KEY_PREFIX = !0),
        (e.RelayFeatureFlags.ENABLE_USE_PAGINATION_IS_LOADING_FIX = !0),
        (e.RelayFeatureFlags.ENABLE_STORE_ID_COLLISION_LOGGING =
          r("gkx")("11610")),
        (e.RelayFeatureFlags.ENABLE_UI_CONTEXT_ON_RELAY_LOGGER = !1));
    }
    l.default = e;
  },
  98,
);
