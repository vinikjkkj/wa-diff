__d(
  "AdsMgmtAdgroupDynamicStoreSourceTier3V2Fragment.graphql",
  ["Adgroup-dynamic_ad_object_spec_tier3_v2-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsMgmtAdgroupDynamicStoreSourceTier3V2Fragment",
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
            name: "AdgroupDynamicAdObjectSpecTier3V2Resolver",
          },
          kind: "RelayResolver",
          name: "dynamic_ad_object_spec_tier3_v2",
          resolverModule: n("Adgroup-dynamic_ad_object_spec_tier3_v2-resolver")
            .dynamic_ad_object_spec_tier3_v2,
          path: "dynamic_ad_object_spec_tier3_v2",
        },
      ],
      type: "Adgroup",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
