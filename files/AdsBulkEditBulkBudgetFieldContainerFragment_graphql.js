__d(
  "AdsBulkEditBulkBudgetFieldContainerFragment.graphql",
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
        name: "AdsBulkEditBulkBudgetFieldContainerFragment",
        selections: [
          {
            alias: "currency",
            args: null,
            fragment: e,
            kind: "RelayResolver",
            name: "override_currency",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("ClientAdAccount____relay_model_instance.graphql"),
              n("ClientAdAccount-resolvers").override_currency,
              "__relay_model_instance",
              !0,
            ),
            path: "currency",
          },
          {
            alias: "min_daily_budget",
            args: null,
            fragment: e,
            kind: "RelayResolver",
            name: "override_min_daily_budget",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("ClientAdAccount____relay_model_instance.graphql"),
              n("ClientAdAccount-resolvers").override_min_daily_budget,
              "__relay_model_instance",
              !0,
            ),
            path: "min_daily_budget",
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
