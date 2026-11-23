__d(
  "AdsBulkEditCampaignSpendLimitFieldContainerQuery.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
          name: "AdsBulkEditCampaignSpendLimitFieldContainerQuery",
          selections: [
            {
              kind: "ClientEdgeToClientObject",
              concreteType: "ClientAdAccount",
              modelResolvers: {
                ClientAdAccount: {
                  alias: null,
                  args: null,
                  fragment: {
                    args: null,
                    kind: "FragmentSpread",
                    name: "ClientAdAccount__id",
                  },
                  kind: "RelayLiveResolver",
                  name: "__relay_model_instance",
                  resolverModule: n(
                    "relay-runtime/experimental",
                  ).resolverDataInjector(
                    n("ClientAdAccount__id.graphql"),
                    n("ClientAdAccount-resolvers").ClientAdAccount,
                    "id",
                    !1,
                  ),
                  path: "selected_ad_account.__relay_model_instance",
                },
              },
              serverObjectOperations: null,
              backingField: {
                alias: null,
                args: null,
                fragment: null,
                kind: "RelayLiveResolver",
                name: "selected_ad_account",
                resolverModule: n("Query-selected_ad_account-resolver")
                  .selected_ad_account,
                path: "selected_ad_account",
              },
              linkedField: {
                alias: null,
                args: null,
                concreteType: "ClientAdAccount",
                kind: "LinkedField",
                name: "selected_ad_account",
                plural: !1,
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
                    name: "override_currency",
                    resolverModule: n(
                      "relay-runtime/experimental",
                    ).resolverDataInjector(
                      n("ClientAdAccount____relay_model_instance.graphql"),
                      n("ClientAdAccount-resolvers").override_currency,
                      "__relay_model_instance",
                      !0,
                    ),
                    path: "selected_ad_account.override_currency",
                  },
                ],
                storageKey: null,
              },
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdsBulkEditCampaignSpendLimitFieldContainerQuery",
          selections: [
            {
              kind: "ClientEdgeToClientObject",
              backingField: {
                name: "selected_ad_account",
                args: null,
                fragment: null,
                kind: "RelayResolver",
                storageKey: null,
                isOutputType: !1,
              },
              linkedField: {
                alias: null,
                args: null,
                concreteType: "ClientAdAccount",
                kind: "LinkedField",
                name: "selected_ad_account",
                plural: !1,
                selections: [
                  {
                    name: "override_currency",
                    args: null,
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          name: "__relay_model_instance",
                          args: null,
                          fragment: {
                            kind: "InlineFragment",
                            selections: [e],
                            type: "ClientAdAccount",
                            abstractKey: null,
                          },
                          kind: "RelayResolver",
                          storageKey: null,
                          isOutputType: !1,
                        },
                      ],
                      type: "ClientAdAccount",
                      abstractKey: null,
                    },
                    kind: "RelayResolver",
                    storageKey: null,
                    isOutputType: !0,
                  },
                  e,
                ],
                storageKey: null,
              },
            },
          ],
        },
        params: {
          cacheID: "fcb9911f59b44f49eadc960d1d86ae13",
          id: null,
          metadata: {},
          name: "AdsBulkEditCampaignSpendLimitFieldContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
