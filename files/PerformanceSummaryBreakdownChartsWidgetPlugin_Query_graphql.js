__d(
  "PerformanceSummaryBreakdownChartsWidgetPlugin_Query.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      fragment: {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
        name: "PerformanceSummaryBreakdownChartsWidgetPlugin_Query",
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
                  args: null,
                  kind: "FragmentSpread",
                  name: "PerformanceSummaryBreakdownChartsContainerFragment",
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
        name: "PerformanceSummaryBreakdownChartsWidgetPlugin_Query",
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
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          },
        ],
      },
      params: {
        cacheID: "6f0ccaad1e64a7563c6edb2cddd6d469",
        id: null,
        metadata: {},
        name: "PerformanceSummaryBreakdownChartsWidgetPlugin_Query",
        operationKind: "query",
        text: null,
      },
    };
    a.exports = e;
  },
  null,
);
