__d(
  "AdsMgmtAdgroupDynamicStoreSourceTier4Fragment.graphql",
  ["Adgroup-dynamic_ad_object_spec_tier4-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsMgmtAdgroupDynamicStoreSourceTier4Fragment",
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
            name: "AdgroupDynamicAdObjectSpecTier4Resolver",
          },
          kind: "RelayResolver",
          name: "dynamic_ad_object_spec_tier4",
          resolverModule: n("Adgroup-dynamic_ad_object_spec_tier4-resolver")
            .dynamic_ad_object_spec_tier4,
          path: "dynamic_ad_object_spec_tier4",
        },
      ],
      type: "Adgroup",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
