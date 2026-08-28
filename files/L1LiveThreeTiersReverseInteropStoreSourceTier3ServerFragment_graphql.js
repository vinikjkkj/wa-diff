__d(
  "L1LiveThreeTiersReverseInteropStoreSourceTier3ServerFragment.graphql",
  ["Adgroup-ad_object_spec-tier3-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "L1LiveThreeTiersReverseInteropStoreSourceTier3ServerFragment",
      selections: [
        {
          alias: null,
          args: null,
          fragment: {
            args: null,
            kind: "FragmentSpread",
            name: "AdgroupAdObjectSpecTier3Resolver",
          },
          kind: "RelayResolver",
          name: "adgroup_spec_tier3",
          resolverModule: n("Adgroup-ad_object_spec-tier3-resolver")
            .adgroup_spec_tier3,
          path: "adgroup_spec_tier3",
        },
      ],
      type: "Adgroup",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
