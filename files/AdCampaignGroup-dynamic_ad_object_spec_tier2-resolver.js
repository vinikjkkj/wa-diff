__d(
  "AdCampaignGroup-dynamic_ad_object_spec_tier2-resolver",
  [
    "AdCampaignGroupDynamicAdObjectSpecTier2Resolver.graphql",
    "AdCampaignGroupSpecUtil",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n("AdCampaignGroupDynamicAdObjectSpecTier2Resolver.graphql")),
        t,
      );
      return o(
        "AdCampaignGroupSpecUtil",
      ).coerceDynamicGraphQLSpecTier2ToGraphAPI(r);
    }
    l.dynamic_ad_object_spec_tier2 = s;
  },
  98,
);
