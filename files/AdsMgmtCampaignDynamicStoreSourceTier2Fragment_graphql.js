__d(
  "AdsMgmtCampaignDynamicStoreSourceTier2Fragment.graphql",
  ["AdCampaign-dynamic_ad_object_spec_tier2-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsMgmtCampaignDynamicStoreSourceTier2Fragment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          fragment: {
            args: null,
            kind: "FragmentSpread",
            name: "AdCampaignDynamicAdObjectSpecTier2Resolver",
          },
          kind: "RelayResolver",
          name: "dynamic_campaign_spec_tier2",
          resolverModule: n("AdCampaign-dynamic_ad_object_spec_tier2-resolver")
            .dynamic_campaign_spec_tier2,
          path: "dynamic_campaign_spec_tier2",
        },
      ],
      type: "AdCampaign",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
