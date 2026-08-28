__d(
  "AdCampaign-dynamic_ad_object_field_error_spec_tier1-resolver",
  [
    "AdCampaignDynamicAdObjectFieldErrorSpecTier1Resolver.graphql",
    "AdCampaignSpecUtil",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n(
              "AdCampaignDynamicAdObjectFieldErrorSpecTier1Resolver.graphql",
            )),
        t,
      );
      return o("AdCampaignSpecUtil").coerceDynamicGraphQLSpecTier1ToGraphAPI(r);
    }
    l.dynamic_campaign_field_error_spec_tier1 = s;
  },
  98,
);
