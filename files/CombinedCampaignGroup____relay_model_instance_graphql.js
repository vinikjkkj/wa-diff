__d(
  "CombinedCampaignGroup____relay_model_instance.graphql",
  [
    "relay-runtime/experimental",
    "CombinedCampaignGroup__id.graphql",
    "CombinedCampaignGroup-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CombinedCampaignGroup____relay_model_instance",
      selections: [
        {
          alias: null,
          args: null,
          fragment: {
            args: null,
            kind: "FragmentSpread",
            name: "CombinedCampaignGroup__id",
          },
          kind: "RelayLiveResolver",
          name: "__relay_model_instance",
          resolverModule: n("relay-runtime/experimental").resolverDataInjector(
            n("CombinedCampaignGroup__id.graphql"),
            n("CombinedCampaignGroup-resolvers").CombinedCampaignGroup,
            "id",
            !0,
          ),
          path: "__relay_model_instance",
        },
      ],
      type: "CombinedCampaignGroup",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
