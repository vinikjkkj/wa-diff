__d(
  "WAWebAuthAgentFeaturePolicyQuery",
  [
    "WAWebAuthAgentFeaturePolicyQuery.graphql",
    "WAWebFeatureControlCache",
    "WAWebFeatureControlFeature",
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0 ? e : (e = n("WAWebAuthAgentFeaturePolicyQuery.graphql"));
    async function u() {
      var e = await o("WAWebFetchAdAccountToken").fetchToken();
      return e.type !== "success"
        ? { type: "error", error: r("err")("fetchToken failed: " + e.type) }
        : o("WAWebRelayClient")
            .fetchQuery(
              s,
              {},
              { environmentType: "facebook", accessToken: e.token },
            )
            .then(async function (e) {
              var t,
                n =
                  e == null
                    ? void 0
                    : e.whatsapp_authorized_agent_feature_policy;
              if (n == null)
                return (
                  await o("WAWebFeatureControlCache").clearPolicy(),
                  { type: "not_authorized_agent" }
                );
              var r = (t = n.disabled_features) != null ? t : [],
                a = d(r);
              return (
                await o("WAWebFeatureControlCache").setPolicy(a),
                { type: "success", policy: a }
              );
            })
            .catch(function (e) {
              return { type: "error", error: e };
            });
    }
    var c = new Set([
      "BUSINESS_PROFILE_NAME",
      "BUSINESS_PROFILE_DISPLAY_NAME",
      "BUSINESS_PROFILE_COVER_PHOTO",
      "BUSINESS_PROFILE_DESCRIPTION",
      "BUSINESS_PROFILE_EMAIL",
      "BUSINESS_PROFILE_WEBSITE",
      "BUSINESS_PROFILE_CATEGORY",
    ]);
    function d(e) {
      var t = new Set(e),
        n = {};
      for (var r of o("WAWebFeatureControlFeature").ALL_FEATURES)
        t.has(r)
          ? (n[r] = c.has(r) ? "LOCKED" : "DISABLED")
          : (n[r] = "ENABLED");
      return { entries: n };
    }
    l.fetchAndCacheAuthAgentFeaturePolicy = u;
  },
  98,
);
