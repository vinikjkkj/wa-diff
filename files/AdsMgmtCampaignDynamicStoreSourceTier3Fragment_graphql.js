__d(
  "AdsMgmtCampaignDynamicStoreSourceTier3Fragment.graphql",
  ["AdCampaign-dynamic_ad_object_spec_tier3-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsMgmtCampaignDynamicStoreSourceTier3Fragment",
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
            name: "AdCampaignDynamicAdObjectSpecTier3Resolver",
          },
          kind: "RelayResolver",
          name: "dynamic_campaign_spec_tier3",
          resolverModule: n("AdCampaign-dynamic_ad_object_spec_tier3-resolver")
            .dynamic_campaign_spec_tier3,
          path: "dynamic_campaign_spec_tier3",
        },
      ],
      type: "AdCampaign",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
