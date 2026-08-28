__d(
  "AdsPEFragmentSelectors_adgroupFragment.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-adgroup_fragments-resolver",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsPEFragmentSelectors_adgroupFragment",
      selections: [
        {
          alias: null,
          args: null,
          fragment: {
            args: null,
            kind: "FragmentSpread",
            name: "ClientAdAccount____relay_model_instance",
          },
          kind: "RelayLiveResolver",
          name: "adgroup_fragments",
          resolverModule: n("relay-runtime/experimental").resolverDataInjector(
            n("ClientAdAccount____relay_model_instance.graphql"),
            n("ClientAdAccount-adgroup_fragments-resolver").adgroup_fragments,
            "__relay_model_instance",
            !0,
          ),
          path: "adgroup_fragments",
        },
      ],
      type: "ClientAdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
