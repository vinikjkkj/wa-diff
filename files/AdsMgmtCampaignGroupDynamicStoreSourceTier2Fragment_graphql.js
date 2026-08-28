__d(
  "AdsMgmtCampaignGroupDynamicStoreSourceTier2Fragment.graphql",
  ["AdCampaignGroup-dynamic_ad_object_spec_tier2-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsMgmtCampaignGroupDynamicStoreSourceTier2Fragment",
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
            name: "AdCampaignGroupDynamicAdObjectSpecTier2Resolver",
          },
          kind: "RelayResolver",
          name: "dynamic_ad_object_spec_tier2",
          resolverModule: n(
            "AdCampaignGroup-dynamic_ad_object_spec_tier2-resolver",
          ).dynamic_ad_object_spec_tier2,
          path: "dynamic_ad_object_spec_tier2",
        },
      ],
      type: "AdCampaignGroup",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
