__d(
  "AdsPEModalAYMTTipRendererFragment.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "AdsPEModalAYMTTipRendererFragment",
      selections: [
        {
          alias: null,
          args: null,
          fragment: {
            args: null,
            kind: "FragmentSpread",
            name: "ClientAdAccount____relay_model_instance",
          },
          kind: "RelayResolver",
          name: "account_id",
          resolverModule: n("relay-runtime/experimental").resolverDataInjector(
            n("ClientAdAccount____relay_model_instance.graphql"),
            n("ClientAdAccount-resolvers").account_id,
            "__relay_model_instance",
            !0,
          ),
          path: "account_id",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "AYMTWhatsAppMarketingMessageCampaignTableProductDiscoveryModalTipContainerFragment",
        },
      ],
      type: "ClientAdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
