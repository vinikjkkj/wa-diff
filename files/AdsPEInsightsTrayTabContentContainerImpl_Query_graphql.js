__d(
  "AdsPEInsightsTrayTabContentContainerImpl_Query.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
    "relay-runtime/experimental",
    "CombinedCampaignGroup__id.graphql",
    "CombinedCampaignGroup-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaignGroup____relay_model_instance.graphql",
    "CombinedCampaignGroup-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "campaignGroupRelayIDs",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "ids",
            variableName: "campaignGroupRelayIDs",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = [o];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
          name: "AdsPEInsightsTrayTabContentContainerImpl_Query",
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
                    name: "useAdsMgmtAdgroupSelection_fragment",
                  },
                  {
                    kind: "ClientEdgeToClientObject",
                    concreteType: "CombinedCampaignGroup",
                    modelResolvers: {
                      CombinedCampaignGroup: {
                        alias: null,
                        args: null,
                        fragment: {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CombinedCampaignGroup__id",
                        },
                        kind: "RelayLiveResolver",
                        name: "__relay_model_instance",
                        resolverModule: n(
                          "relay-runtime/experimental",
                        ).resolverDataInjector(
                          n("CombinedCampaignGroup__id.graphql"),
                          n("CombinedCampaignGroup-resolvers")
                            .CombinedCampaignGroup,
                          "id",
                          !0,
                        ),
                        path: "selected_ad_account.combined_campaign_groups.__relay_model_instance",
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
                      name: "combined_campaign_groups",
                      resolverModule: n(
                        "relay-runtime/experimental",
                      ).resolverDataInjector(
                        n("ClientAdAccount____relay_model_instance.graphql"),
                        n("ClientAdAccount-resolvers").combined_campaign_groups,
                        "__relay_model_instance",
                        !0,
                      ),
                      path: "selected_ad_account.combined_campaign_groups",
                    },
                    linkedField: {
                      alias: null,
                      args: t,
                      concreteType: "CombinedCampaignGroup",
                      kind: "LinkedField",
                      name: "combined_campaign_groups",
                      plural: !0,
                      selections: [
                        r,
                        {
                          alias: null,
                          args: null,
                          fragment: {
                            args: null,
                            kind: "FragmentSpread",
                            name: "CombinedCampaignGroup____relay_model_instance",
                          },
                          kind: "RelayResolver",
                          name: "buying_type",
                          resolverModule: n(
                            "relay-runtime/experimental",
                          ).resolverDataInjector(
                            n(
                              "CombinedCampaignGroup____relay_model_instance.graphql",
                            ),
                            n("CombinedCampaignGroup-resolvers").buying_type,
                            "__relay_model_instance",
                            !0,
                          ),
                          path: "selected_ad_account.combined_campaign_groups.buying_type",
                        },
                      ],
                      storageKey: null,
                    },
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
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsPEInsightsTrayTabContentContainerImpl_Query",
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
                  r,
                  {
                    kind: "ClientEdgeToClientObject",
                    backingField: {
                      name: "combined_campaign_groups",
                      args: t,
                      fragment: {
                        kind: "InlineFragment",
                        selections: [
                          {
                            name: "__relay_model_instance",
                            args: null,
                            fragment: {
                              kind: "InlineFragment",
                              selections: a,
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
                      concreteType: "CombinedCampaignGroup",
                      kind: "LinkedField",
                      name: "combined_campaign_groups",
                      plural: !0,
                      selections: [
                        r,
                        {
                          name: "buying_type",
                          args: null,
                          fragment: {
                            kind: "InlineFragment",
                            selections: [
                              {
                                name: "__relay_model_instance",
                                args: null,
                                fragment: {
                                  kind: "InlineFragment",
                                  selections: a,
                                  type: "CombinedCampaignGroup",
                                  abstractKey: null,
                                },
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !1,
                              },
                            ],
                            type: "CombinedCampaignGroup",
                            abstractKey: null,
                          },
                          kind: "RelayResolver",
                          storageKey: null,
                          isOutputType: !0,
                        },
                        o,
                      ],
                      storageKey: null,
                    },
                  },
                  o,
                ],
                storageKey: null,
              },
            },
          ],
        },
        params: {
          cacheID: "c64ab90e657a8544b3f054851c8f241e",
          id: null,
          metadata: {},
          name: "AdsPEInsightsTrayTabContentContainerImpl_Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
