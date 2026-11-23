__d(
  "AdsCAAPBulkEditControlFieldQuery.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
    "relay-runtime/experimental",
    "CombinedCampaign__id.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "campaignRelayIDs",
          },
        ],
        t = [
          { kind: "Variable", name: "ids", variableName: "campaignRelayIDs" },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = [r];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { hasClientEdges: !0 },
          name: "AdsCAAPBulkEditControlFieldQuery",
          selections: [
            {
              kind: "RequiredField",
              field: {
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
                    path: "client_ad_account.__relay_model_instance",
                  },
                },
                serverObjectOperations: null,
                backingField: {
                  alias: "client_ad_account",
                  args: null,
                  fragment: null,
                  kind: "RelayLiveResolver",
                  name: "selected_ad_account",
                  resolverModule: n("Query-selected_ad_account-resolver")
                    .selected_ad_account,
                  path: "client_ad_account",
                },
                linkedField: {
                  alias: "client_ad_account",
                  args: null,
                  concreteType: "ClientAdAccount",
                  kind: "LinkedField",
                  name: "selected_ad_account",
                  plural: !1,
                  selections: [
                    {
                      kind: "RequiredField",
                      field: {
                        kind: "ClientEdgeToClientObject",
                        concreteType: "CombinedCampaign",
                        modelResolvers: {
                          CombinedCampaign: {
                            alias: null,
                            args: null,
                            fragment: {
                              args: null,
                              kind: "FragmentSpread",
                              name: "CombinedCampaign__id",
                            },
                            kind: "RelayLiveResolver",
                            name: "__relay_model_instance",
                            resolverModule: n(
                              "relay-runtime/experimental",
                            ).resolverDataInjector(
                              n("CombinedCampaign__id.graphql"),
                              n("CombinedCampaign-resolvers").CombinedCampaign,
                              "id",
                              !0,
                            ),
                            path: "client_ad_account.combined_campaigns.__relay_model_instance",
                          },
                        },
                        serverObjectOperations: null,
                        backingField: {
                          alias: null,
                          args: t,
                          fragment: {
                            args: null,
                            kind: "FragmentSpread",
                            name: "ClientAdAccount____relay_model_instance",
                          },
                          kind: "RelayResolver",
                          name: "combined_campaigns",
                          resolverModule: n(
                            "relay-runtime/experimental",
                          ).resolverDataInjector(
                            n(
                              "ClientAdAccount____relay_model_instance.graphql",
                            ),
                            n("ClientAdAccount-resolvers").combined_campaigns,
                            "__relay_model_instance",
                            !0,
                          ),
                          path: "client_ad_account.combined_campaigns",
                        },
                        linkedField: {
                          alias: null,
                          args: t,
                          concreteType: "CombinedCampaign",
                          kind: "LinkedField",
                          name: "combined_campaigns",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              fragment: {
                                args: null,
                                kind: "FragmentSpread",
                                name: "CombinedCampaign____relay_model_instance",
                              },
                              kind: "RelayResolver",
                              name: "regional_regulated_categories",
                              resolverModule: n(
                                "relay-runtime/experimental",
                              ).resolverDataInjector(
                                n(
                                  "CombinedCampaign____relay_model_instance.graphql",
                                ),
                                n("CombinedCampaign-resolvers")
                                  .regional_regulated_categories,
                                "__relay_model_instance",
                                !0,
                              ),
                              path: "client_ad_account.combined_campaigns.regional_regulated_categories",
                            },
                          ],
                          storageKey: null,
                        },
                      },
                      action: "THROW",
                    },
                  ],
                  storageKey: null,
                },
              },
              action: "THROW",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsCAAPBulkEditControlFieldQuery",
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
                alias: "client_ad_account",
                args: null,
                concreteType: "ClientAdAccount",
                kind: "LinkedField",
                name: "selected_ad_account",
                plural: !1,
                selections: [
                  {
                    kind: "ClientEdgeToClientObject",
                    backingField: {
                      name: "combined_campaigns",
                      args: t,
                      fragment: {
                        kind: "InlineFragment",
                        selections: [
                          {
                            name: "__relay_model_instance",
                            args: null,
                            fragment: {
                              kind: "InlineFragment",
                              selections: o,
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
                      isOutputType: !1,
                    },
                    linkedField: {
                      alias: null,
                      args: t,
                      concreteType: "CombinedCampaign",
                      kind: "LinkedField",
                      name: "combined_campaigns",
                      plural: !0,
                      selections: [
                        {
                          name: "regional_regulated_categories",
                          args: null,
                          fragment: {
                            kind: "InlineFragment",
                            selections: [
                              {
                                name: "__relay_model_instance",
                                args: null,
                                fragment: {
                                  kind: "InlineFragment",
                                  selections: o,
                                  type: "CombinedCampaign",
                                  abstractKey: null,
                                },
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !1,
                              },
                            ],
                            type: "CombinedCampaign",
                            abstractKey: null,
                          },
                          kind: "RelayResolver",
                          storageKey: null,
                          isOutputType: !0,
                        },
                        r,
                      ],
                      storageKey: null,
                    },
                  },
                  r,
                ],
                storageKey: null,
              },
            },
          ],
        },
        params: {
          cacheID: "cda69b5b10155c68ab8eefeb534a6831",
          id: null,
          metadata: {},
          name: "AdsCAAPBulkEditControlFieldQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
