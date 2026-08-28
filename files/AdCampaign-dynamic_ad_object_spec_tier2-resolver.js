__d(
  "AdCampaign-dynamic_ad_object_spec_tier2-resolver",
  [
    "AdCampaignDynamicAdObjectSpecTier2Resolver.graphql",
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
          : (e = n("AdCampaignDynamicAdObjectSpecTier2Resolver.graphql")),
        t,
      );
      return o("AdCampaignSpecUtil").coerceDynamicGraphQLSpecTier2ToGraphAPI(r);
    }
    l.dynamic_campaign_spec_tier2 = s;
  },
  98,
);
