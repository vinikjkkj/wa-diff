__d(
  "AdsBulkEditCampaignLeadAdsValueExpressionFieldContainerFragment.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        args: null,
        kind: "FragmentSpread",
        name: "ClientAdAccount____relay_model_instance",
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { throwOnFieldError: !0 },
        name: "AdsBulkEditCampaignLeadAdsValueExpressionFieldContainerFragment",
        selections: [
          {
            alias: null,
            args: null,
            fragment: e,
            kind: "RelayResolver",
            name: "account_id",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("ClientAdAccount____relay_model_instance.graphql"),
              n("ClientAdAccount-resolvers").account_id,
              "__relay_model_instance",
              !0,
            ),
            path: "account_id",
          },
          {
            alias: null,
            args: null,
            fragment: e,
            kind: "RelayResolver",
            name: "timezone_id",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("ClientAdAccount____relay_model_instance.graphql"),
              n("ClientAdAccount-resolvers").timezone_id,
              "__relay_model_instance",
              !0,
            ),
            path: "timezone_id",
          },
        ],
        type: "ClientAdAccount",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
