__d(
  "L1LiveTrueTieredReverseInteropStoreSourceTier2ServerFragment.graphql",
  ["Adgroup-ad_object_spec-tier2-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "fetch_instagram_field" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "L1LiveTrueTieredReverseInteropStoreSourceTier2ServerFragment",
      selections: [
        {
          alias: null,
          args: [],
          fragment: {
            args: [
              {
                kind: "Variable",
                name: "fetch_instagram_field",
                variableName: "fetch_instagram_field",
              },
            ],
            kind: "FragmentSpread",
            name: "AdgroupAdObjectSpecTier2Resolver",
          },
          kind: "RelayResolver",
          name: "adgroup_spec_tier2",
          resolverModule: n("Adgroup-ad_object_spec-tier2-resolver")
            .adgroup_spec_tier2,
          path: "adgroup_spec_tier2",
        },
      ],
      type: "Adgroup",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
