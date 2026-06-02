__d(
  "WAWebSubscriptionsBridgeApi",
  [
    "WAWebAuraBenefitProviderInit",
    "WAWebAuraRingtoneSubscriptionCheck",
    "WAWebFeatureFlagCollection",
    "WAWebSchemaFeatureFlag",
    "WAWebSchemaSubscription",
    "WAWebSubscriptionCollection",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = await o("WAWebSchemaSubscription").getSubscriptionTable().all();
      o(
        "WAWebSubscriptionCollection",
      ).SubscriptionCollection.initializeFromCache(e);
    }
    async function s() {
      if (o("WAWebSchemaFeatureFlag").isFeatureFlagTableAvailable()) {
        var e = await o("WAWebSchemaFeatureFlag").getFeatureFlagTable().all();
        o(
          "WAWebFeatureFlagCollection",
        ).FeatureFlagCollection.initializeFromCache(e);
      }
    }
    var u = {
      initializePME: async function () {
        (await Promise.all([e(), s()]),
          o(
            "WAWebAuraBenefitProviderInit",
          ).initAuraBenefitFeatureFlagProvider(),
          o("WAWebAuraRingtoneSubscriptionCheck").initSubscriptionCheck());
      },
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
        o("WAWebAuraRingtoneSubscriptionCheck").initSubscriptionCheck();
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
    l.SubscriptionsBridgeApi = u;
  },
  98,
);
