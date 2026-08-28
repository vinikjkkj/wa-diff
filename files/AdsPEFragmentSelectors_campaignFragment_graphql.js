__d(
  "AdsPEFragmentSelectors_campaignFragment.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-campaign_fragments-resolver",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsPEFragmentSelectors_campaignFragment",
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
          name: "campaign_fragments",
          resolverModule: n("relay-runtime/experimental").resolverDataInjector(
            n("ClientAdAccount____relay_model_instance.graphql"),
            n("ClientAdAccount-campaign_fragments-resolver").campaign_fragments,
            "__relay_model_instance",
            !0,
          ),
          path: "campaign_fragments",
        },
      ],
      type: "ClientAdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
