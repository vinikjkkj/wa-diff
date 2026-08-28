__d(
  "AdCampaignGroup-dynamic_ad_object_spec_tier1_v2-resolver",
  [
    "AdCampaignGroupDynamicAdObjectSpecTier1V2Resolver.graphql",
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
          : (e = n(
              "AdCampaignGroupDynamicAdObjectSpecTier1V2Resolver.graphql",
            )),
        t,
      );
      return o(
        "AdCampaignGroupSpecUtil",
      ).coerceDynamicGraphQLSpecTier1V2ToGraphAPI(r);
    }
    l.dynamic_ad_object_spec_tier1_v2 = s;
  },
  98,
);
