__d(
  "configureRelayFeatureFlagsForWWW",
  ["gkx", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e, t;
      (((t = o("relay-runtime")).RelayFeatureFlags.ENABLE_RELAY_RESOLVERS = !0),
        (t.RelayFeatureFlags.ENABLE_FRIENDLY_QUERY_NAME_GQL_URL = (e =
          r("gkx"))("21089")),
        (t.RelayFeatureFlags.ENABLE_DO_NOT_WRAP_LIVE_QUERY = !0),
        (t.RelayFeatureFlags.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT = !0),
        (t.RelayFeatureFlags.STRING_INTERN_LEVEL = 2),
        (t.RelayFeatureFlags.MAX_DATA_ID_LENGTH = 100),
        (t.RelayFeatureFlags.ENABLE_NONCOMPLIANT_ERROR_HANDLING_ON_LISTS = !0),
        (t.RelayFeatureFlags.ENABLE_CYLE_DETECTION_IN_VARIABLES = !e("7366")),
        (t.RelayFeatureFlags.ENABLE_NOTIFY_SUBSCRIPTION = e("5607")),
        (t.RelayFeatureFlags.ENABLE_ACTIVITY_COMPATIBILITY = !0),
        (t.RelayFeatureFlags.ENABLE_READ_TIME_RESOLVER_STORAGE_KEY_PREFIX = !0),
        (t.RelayFeatureFlags.ENABLE_USE_PAGINATION_IS_LOADING_FIX = !0),
        (t.RelayFeatureFlags.ENABLE_STORE_ID_COLLISION_LOGGING = e("11610")),
        (t.RelayFeatureFlags.ENABLE_UI_CONTEXT_ON_RELAY_LOGGER = !1));
    }
    l.default = e;
  },
  98,
);
