__d(
  "AdCampaign-dynamic_ad_object_spec_tier1-resolver",
  [
    "AdCampaignDynamicAdObjectSpecTier1Resolver.graphql",
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
          : (e = n("AdCampaignDynamicAdObjectSpecTier1Resolver.graphql")),
        t,
      );
      return o("AdCampaignSpecUtil").coerceDynamicGraphQLSpecTier1ToGraphAPI(r);
    }
    l.dynamic_campaign_spec_tier1 = s;
  },
  98,
);
