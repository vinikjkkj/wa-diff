__d(
  "AdsBulkEditCampaignValueAdjustmentRuleContainerImpl_Query.graphql",
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
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaignGoal____relay_model_instance.graphql",
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
          args: null,
          kind: "FragmentSpread",
          name: "CombinedCampaign____relay_model_instance",
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = [o],
        i = {
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
        l = {
          kind: "InlineFragment",
          selections: [
            {
              name: "__relay_model_instance",
              args: null,
              fragment: {
                kind: "InlineFragment",
                selections: a,
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
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
          name: "AdsBulkEditCampaignValueAdjustmentRuleContainerImpl_Query",
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
                          alias: null,
                          args: null,
                          fragment: r,
                          kind: "RelayResolver",
                          name: "ad_object_id",
                          resolverModule: n(
                            "relay-runtime/experimental",
                          ).resolverDataInjector(
                            n(
                              "CombinedCampaign____relay_model_instance.graphql",
                            ),
                            n("CombinedCampaign-resolvers").ad_object_id,
                            "__relay_model_instance",
                            !0,
                          ),
                          path: "selected_ad_account.combined_campaigns.ad_object_id",
                        },
                        {
                          condition: "isRuleSetCompatibilityEnabled",
                          kind: "Condition",
                          passingValue: !0,
                          selections: [
                            {
                              kind: "ClientEdgeToClientObject",
                              concreteType: "CombinedCampaignGoal",
                              modelResolvers: null,
                              serverObjectOperations: null,
                              backingField: {
                                alias: null,
                                args: null,
                                fragment: r,
                                kind: "RelayResolver",
                                name: "campaign_goal",
                                resolverModule: n(
                                  "relay-runtime/experimental",
                                ).resolverDataInjector(
                                  n(
                                    "CombinedCampaign____relay_model_instance.graphql",
                                  ),
                                  n("CombinedCampaign-resolvers").campaign_goal,
                                  "__relay_model_instance",
                                  !0,
                                ),
                                path: "selected_ad_account.combined_campaigns.campaign_goal",
                                normalizationInfo: {
                                  kind: "WeakModel",
                                  concreteType: "CombinedCampaignGoal",
                                  plural: !1,
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
                                    alias: null,
                                    args: null,
                                    fragment: {
                                      args: null,
                                      kind: "FragmentSpread",
                                      name: "CombinedCampaignGoal____relay_model_instance",
                                    },
                                    kind: "RelayResolver",
                                    name: "type",
                                    resolverModule: n(
                                      "relay-runtime/experimental",
                                    ).resolverDataInjector(
                                      n(
                                        "CombinedCampaignGoal____relay_model_instance.graphql",
                                      ),
                                      n("CampaignGoal-resolvers").type,
                                      "__relay_model_instance",
                                      !0,
                                    ),
                                    path: "selected_ad_account.combined_campaigns.campaign_goal.type",
                                  },
                                ],
                                storageKey: null,
                              },
                            },
                          ],
                        },
                      ],
                      storageKey: null,
                    },
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "useAdsAccountValueAdjustmentRuleCollectionsFragment",
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
          name: "AdsBulkEditCampaignValueAdjustmentRuleContainerImpl_Query",
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
                    kind: "ClientEdgeToClientObject",
                    backingField: {
                      name: "combined_campaigns",
                      args: t,
                      fragment: i,
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
                          name: "ad_object_id",
                          args: null,
                          fragment: l,
                          kind: "RelayResolver",
                          storageKey: null,
                          isOutputType: !0,
                        },
                        {
                          condition: "isRuleSetCompatibilityEnabled",
                          kind: "Condition",
                          passingValue: !0,
                          selections: [
                            {
                              kind: "ClientEdgeToClientObject",
                              backingField: {
                                name: "campaign_goal",
                                args: null,
                                fragment: l,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
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
                                    fragment: {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "__relay_model_instance",
                                          storageKey: null,
                                        },
                                      ],
                                      type: "CombinedCampaignGoal",
                                      abstractKey: null,
                                    },
                                    kind: "RelayResolver",
                                    storageKey: null,
                                    isOutputType: !0,
                                  },
                                ],
                                storageKey: null,
                              },
                            },
                          ],
                        },
                        o,
                      ],
                      storageKey: null,
                    },
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            name: "legacy_account_id",
                            args: null,
                            fragment: i,
                            kind: "RelayResolver",
                            storageKey: null,
                            isOutputType: !0,
                          },
                        ],
                        type: "ClientAdAccount",
                        abstractKey: null,
                      },
                    ],
                    type: "IAdAccount",
                    abstractKey: "__isIAdAccount",
                  },
                  o,
                ],
                storageKey: null,
              },
            },
          ],
          clientAbstractTypes: {
            __isIAdAccount: ["AdAccount", "ClientAdAccount"],
          },
        },
        params: {
          cacheID: "4846a25f5984f544696db225c364e524",
          id: null,
          metadata: {},
          name: "AdsBulkEditCampaignValueAdjustmentRuleContainerImpl_Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
