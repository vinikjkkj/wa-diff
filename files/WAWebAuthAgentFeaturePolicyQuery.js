__d(
  "WAWebAuthAgentFeaturePolicyQuery",
  [
    "WAWebAuthAgentFeaturePolicyQuery.graphql",
    "WAWebFeatureControlCache",
    "WAWebFeatureControlFeature",
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0 ? e : (e = n("WAWebAuthAgentFeaturePolicyQuery.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebFetchAdAccountToken").fetchToken();
          return e.type !== "success"
            ? { type: "error", error: r("err")("fetchToken failed: " + e.type) }
            : o("WAWebRelayClient")
                .fetchQuery(
                  s,
                  {},
                  { environmentType: "facebook", accessToken: e.token },
                )
                .then(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t,
                          n =
                            e == null
                              ? void 0
                              : e.whatsapp_authorized_agent_feature_policy;
                        if (n == null)
                          return (
                            yield o("WAWebFeatureControlCache").clearPolicy(),
                            { type: "not_authorized_agent" }
                          );
                        var r = (t = n.disabled_features) != null ? t : [],
                          a = m(r);
                        return (
                          yield o("WAWebFeatureControlCache").setPolicy(a),
                          { type: "success", policy: a }
                        );
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                )
                .catch(function (e) {
                  return { type: "error", error: e };
                });
        })),
        c.apply(this, arguments)
      );
    }
    var d = new Set([
      "BUSINESS_PROFILE_NAME",
      "BUSINESS_PROFILE_DISPLAY_NAME",
      "BUSINESS_PROFILE_COVER_PHOTO",
      "BUSINESS_PROFILE_DESCRIPTION",
      "BUSINESS_PROFILE_EMAIL",
      "BUSINESS_PROFILE_WEBSITE",
      "BUSINESS_PROFILE_CATEGORY",
    ]);
    function m(e) {
      var t = new Set(e),
        n = {};
      for (var r of o("WAWebFeatureControlFeature").ALL_FEATURES)
        t.has(r)
          ? (n[r] = d.has(r) ? "LOCKED" : "DISABLED")
          : (n[r] = "ENABLED");
      return { entries: n };
    }
    l.fetchAndCacheAuthAgentFeaturePolicy = u;
  },
  98,
);
