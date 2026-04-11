__d(
  "WAWebSubscriptionsBridgeApi",
  [
    "WAWebAuraBenefitProviderInit",
    "WAWebFeatureFlagCollection",
    "WAWebSchemaFeatureFlag",
    "WAWebSchemaSubscription",
    "WAWebSubscriptionCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaSubscription")
            .getSubscriptionTable()
            .all();
          o(
            "WAWebSubscriptionCollection",
          ).SubscriptionCollection.initializeFromCache(e);
        })),
        s.apply(this, arguments)
      );
    }
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebSchemaFeatureFlag").isFeatureFlagTableAvailable()) {
            var e = yield o("WAWebSchemaFeatureFlag")
              .getFeatureFlagTable()
              .all();
            o(
              "WAWebFeatureFlagCollection",
            ).FeatureFlagCollection.initializeFromCache(e);
          }
        })),
        c.apply(this, arguments)
      );
    }
    var d = {
      initializePME: (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield e(),
            yield u(),
            o(
              "WAWebAuraBenefitProviderInit",
            ).initAuraBenefitFeatureFlagProvider());
        });
        function r() {
          return t.apply(this, arguments);
        }
        return r;
      })(),
      updateFeatureFlags: function (t) {
        e: {
          var e = t;
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.command === "update" &&
            "featureFlags" in e
          ) {
            var n = e.featureFlags;
            o(
              "WAWebFeatureFlagCollection",
            ).FeatureFlagCollection.initializeFromCache(n);
            break e;
          }
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.command === "rewrite" &&
            "featureFlags" in e
          ) {
            var r = e.featureFlags;
            o("WAWebFeatureFlagCollection").FeatureFlagCollection.replaceWith(
              r,
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        }
      },
      updateSubscriptions: function (t) {
        e: {
          var e = t;
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.command === "reset"
          ) {
            o("WAWebSubscriptionCollection").SubscriptionCollection.reset();
            break e;
          }
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.command === "update" &&
            "subscriptions" in e
          ) {
            var n = e.subscriptions;
            o(
              "WAWebSubscriptionCollection",
            ).SubscriptionCollection.initializeFromCache(n);
            break e;
          }
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.command === "rewrite" &&
            "subscriptions" in e
          ) {
            var r = e.subscriptions;
            o("WAWebSubscriptionCollection").SubscriptionCollection.replaceWith(
              r,
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        }
      },
    };
    l.SubscriptionsBridgeApi = d;
  },
  98,
);
