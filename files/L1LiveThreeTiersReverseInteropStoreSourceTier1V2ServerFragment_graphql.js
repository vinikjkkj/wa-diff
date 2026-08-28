__d(
  "L1LiveThreeTiersReverseInteropStoreSourceTier1V2ServerFragment.graphql",
  ["Adgroup-ad_object_spec_tier1_v2-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "thumbnail_size" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "L1LiveThreeTiersReverseInteropStoreSourceTier1V2ServerFragment",
      selections: [
        {
          alias: null,
          args: [],
          fragment: {
            args: [
              {
                kind: "Variable",
                name: "thumbnail_size",
                variableName: "thumbnail_size",
              },
            ],
            kind: "FragmentSpread",
            name: "AdgroupAdObjectSpecTier1V2Resolver",
          },
          kind: "RelayResolver",
          name: "adgroup_spec_tier1_v2",
          resolverModule: n("Adgroup-ad_object_spec_tier1_v2-resolver")
            .adgroup_spec_tier1_v2,
          path: "adgroup_spec_tier1_v2",
        },
      ],
      type: "Adgroup",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
