__d(
  "AdsUEditorCampaignTopLevelGoalEditorContainer_AdsUEditorCampaignTopLevelGoalEditorContainerWithRootQuery.graphql",
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
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
    "CombinedCampaign-resolvers",
    "ClientAdAccount-resolvers",
    "CombinedCampaign-resolvers",
    "CombinedCampaign-resolvers",
    "CombinedCampaign-resolvers",
    "CampaignGoal-resolvers",
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
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "isRuleSetCompatibilityEnabled",
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
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
          name: "AdsUEditorCampaignTopLevelGoalEditorContainer_AdsUEditorCampaignTopLevelGoalEditorContainerWithRootQuery",
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
                        path: "selected_ad_account.combined_campaigns.__relay_model_instance",
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
                        n("ClientAdAccount____relay_model_instance.graphql"),
                        n("ClientAdAccount-resolvers").combined_campaigns,
                        "__relay_model_instance",
                        !0,
                      ),
                      path: "selected_ad_account.combined_campaigns",
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
                          args: [
                            {
                              kind: "Variable",
                              name: "isRuleSetCompatibilityEnabled",
                              variableName: "isRuleSetCompatibilityEnabled",
                            },
                          ],
                          kind: "FragmentSpread",
                          name: "AdsUEditorCampaignTopLevelGoalEditorFragment",
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
          name: "AdsUEditorCampaignTopLevelGoalEditorContainer_AdsUEditorCampaignTopLevelGoalEditorContainerWithRootQuery",
          selections: [
            {
              kind: "ClientEdgeToClientObject",
              modelResolvers: {
                ClientAdAccount: {
                  resolverModule: n("ClientAdAccount-resolvers")
                    .ClientAdAccount,
                },
              },
              backingField: {
                name: "selected_ad_account",
                args: null,
                kind: "RelayLiveResolver",
                storageKey: null,
                isOutputType: !1,
                resolverInfo: {
                  resolverFunction: n("Query-selected_ad_account-resolver")
                    .selected_ad_account,
                  rootFragment: null,
                },
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
                    kind: "ClientEdgeToClientObject",
                    modelResolvers: {
                      CombinedCampaign: {
                        resolverModule: n("CombinedCampaign-resolvers")
                          .CombinedCampaign,
                      },
                    },
                    backingField: {
                      name: "combined_campaigns",
                      args: t,
                      kind: "RelayResolver",
                      storageKey: null,
                      isOutputType: !1,
                      resolverInfo: {
                        resolverFunction: n("ClientAdAccount-resolvers")
                          .combined_campaigns,
                        rootFragment: null,
                      },
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
                          condition: "isRuleSetCompatibilityEnabled",
                          kind: "Condition",
                          passingValue: !0,
                          selections: [
                            {
                              name: "ad_object_id",
                              args: null,
                              kind: "RelayResolver",
                              storageKey: null,
                              isOutputType: !0,
                              resolverInfo: {
                                resolverFunction: n(
                                  "CombinedCampaign-resolvers",
                                ).ad_object_id,
                                rootFragment: null,
                              },
                            },
                            {
                              name: "value_rule_set_id",
                              args: null,
                              kind: "RelayResolver",
                              storageKey: null,
                              isOutputType: !0,
                              resolverInfo: {
                                resolverFunction: n(
                                  "CombinedCampaign-resolvers",
                                ).value_rule_set_id,
                                rootFragment: null,
                              },
                            },
                          ],
                        },
                        {
                          kind: "ClientEdgeToClientObject",
                          backingField: {
                            name: "campaign_goal",
                            args: null,
                            kind: "RelayResolver",
                            storageKey: null,
                            isOutputType: !0,
                            resolverInfo: {
                              resolverFunction: n("CombinedCampaign-resolvers")
                                .campaign_goal,
                              rootFragment: null,
                            },
                          },
                          linkedField: {
                            alias: null,
                            args: null,
                            concreteType: "CombinedCampaignGoal",
                            kind: "LinkedField",
                            name: "campaign_goal",
                            plural: !1,
                            selections: [
                              {
                                name: "type",
                                args: null,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                                resolverInfo: {
                                  resolverFunction: n("CampaignGoal-resolvers")
                                    .type,
                                  rootFragment: null,
                                },
                              },
                            ],
                            storageKey: null,
                          },
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
          use_exec_time_resolvers: !0,
        },
        params: {
          cacheID: "90c9702649c71a6d9b2f35857eab8f9b",
          id: null,
          metadata: {},
          name: "AdsUEditorCampaignTopLevelGoalEditorContainer_AdsUEditorCampaignTopLevelGoalEditorContainerWithRootQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    ((e.params.metadata.operation = e.operation), (a.exports = e));
  },
  null,
);
