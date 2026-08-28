__d(
  "CombinedCampaign____relay_model_instance.graphql",
  [
    "relay-runtime/experimental",
    "CombinedCampaign__id.graphql",
    "CombinedCampaign-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CombinedCampaign____relay_model_instance",
      selections: [
        {
          alias: null,
          args: null,
          fragment: {
            args: null,
            kind: "FragmentSpread",
            name: "CombinedCampaign__id",
          },
          kind: "RelayLiveResolver",
          name: "__relay_model_instance",
          resolverModule: n("relay-runtime/experimental").resolverDataInjector(
            n("CombinedCampaign__id.graphql"),
            n("CombinedCampaign-resolvers").CombinedCampaign,
            "id",
            !0,
          ),
          path: "__relay_model_instance",
        },
      ],
      type: "CombinedCampaign",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
