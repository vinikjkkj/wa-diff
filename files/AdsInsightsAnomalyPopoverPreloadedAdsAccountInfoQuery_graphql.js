__d(
  "AdsInsightsAnomalyPopoverPreloadedAdsAccountInfoQuery.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "ClientEdgeQuery_AdsInsightsAnomalyPopoverPreloadedAdsAccountInfoQuery_selected_ad_account_server_ref.graphql",
    "Query-selected_ad_account-resolver",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "gk_relay_e2e_ad_account_codemod_2026_week_45",
          },
        ],
        t = {
          args: null,
          kind: "FragmentSpread",
          name: "ClientAdAccount____relay_model_instance",
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          kind: "InlineFragment",
          selections: [
            {
              name: "__relay_model_instance",
              args: null,
              fragment: {
                kind: "InlineFragment",
                selections: [r],
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
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
          name: "AdsInsightsAnomalyPopoverPreloadedAdsAccountInfoQuery",
          selections: [
            {
              condition: "gk_relay_e2e_ad_account_codemod_2026_week_45",
              kind: "Condition",
              passingValue: !1,
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
                      path: "ad_account.__relay_model_instance",
                    },
                  },
                  serverObjectOperations: null,
                  backingField: {
                    alias: "ad_account",
                    args: null,
                    fragment: null,
                    kind: "RelayLiveResolver",
                    name: "selected_ad_account",
                    resolverModule: n("Query-selected_ad_account-resolver")
                      .selected_ad_account,
                    path: "ad_account",
                  },
                  linkedField: {
                    alias: "ad_account",
                    args: null,
                    concreteType: "ClientAdAccount",
                    kind: "LinkedField",
                    name: "selected_ad_account",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        fragment: t,
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
                        path: "ad_account.account_id",
                      },
                      {
                        alias: null,
                        args: null,
                        fragment: t,
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
                        path: "ad_account.override_currency",
                      },
                    ],
                    storageKey: null,
                  },
                },
              ],
            },
            {
              condition: "gk_relay_e2e_ad_account_codemod_2026_week_45",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  kind: "ClientEdgeToServerObject",
                  operation: n(
                    "ClientEdgeQuery_AdsInsightsAnomalyPopoverPreloadedAdsAccountInfoQuery_selected_ad_account_server_ref.graphql",
                  ),
                  backingField: {
                    alias: null,
                    args: null,
                    fragment: null,
                    kind: "RelayLiveResolver",
                    name: "selected_ad_account_server_ref",
                    resolverModule: n("Query-selected_ad_account-resolver")
                      .selected_ad_account_server_ref,
                    path: "selected_ad_account_server_ref",
                  },
                  linkedField: {
                    alias: null,
                    args: null,
                    concreteType: "AdAccountRef",
                    kind: "LinkedField",
                    name: "selected_ad_account_server_ref",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "AdAccount",
                        kind: "LinkedField",
                        name: "ad_account",
                        plural: !1,
                        selections: [
                          {
                            kind: "CatchField",
                            field: {
                              alias: "account_id",
                              args: null,
                              kind: "ScalarField",
                              name: "legacy_account_id",
                              storageKey: null,
                            },
                            to: "NULL",
                          },
                          {
                            kind: "CatchField",
                            field: {
                              alias: "override_currency",
                              args: null,
                              kind: "ScalarField",
                              name: "currency",
                              storageKey: null,
                            },
                            to: "NULL",
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsInsightsAnomalyPopoverPreloadedAdsAccountInfoQuery",
          selections: [
            {
              condition: "gk_relay_e2e_ad_account_codemod_2026_week_45",
              kind: "Condition",
              passingValue: !1,
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
                    alias: "ad_account",
                    args: null,
                    concreteType: "ClientAdAccount",
                    kind: "LinkedField",
                    name: "selected_ad_account",
                    plural: !1,
                    selections: [
                      {
                        name: "account_id",
                        args: null,
                        fragment: o,
                        kind: "RelayResolver",
                        storageKey: null,
                        isOutputType: !0,
                      },
                      {
                        name: "override_currency",
                        args: null,
                        fragment: o,
                        kind: "RelayResolver",
                        storageKey: null,
                        isOutputType: !0,
                      },
                      r,
                    ],
                    storageKey: null,
                  },
                },
              ],
            },
            {
              condition: "gk_relay_e2e_ad_account_codemod_2026_week_45",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  name: "selected_ad_account_server_ref",
                  args: null,
                  fragment: null,
                  kind: "RelayResolver",
                  storageKey: null,
                  isOutputType: !1,
                },
              ],
            },
          ],
        },
        params: {
          cacheID: "fa19c6ef7a328ece65ccfeb67a8ed349",
          id: null,
          metadata: {},
          name: "AdsInsightsAnomalyPopoverPreloadedAdsAccountInfoQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
