__d(
  "AdsUEditorCampaignGoalEngagedAudienceInclusionBulkEditContainer_AdsUEditorCampaignGoalEngagedAudienceInclusionBulkEditContainerWithRootQuery.graphql",
  [
    "ClientAudienceType-resolvers",
    "ClientAudienceType-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign__id.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
    "ClientAdAccount-resolvers",
    "CombinedCampaign-resolvers",
    "ClientAdAccount-resolvers",
    "CombinedCampaign-resolvers",
    "CampaignGoal-resolvers",
    "CampaignGoal-resolvers",
    "CampaignGoal-resolvers",
    "CampaignGoal-resolvers",
    "CampaignGoal-resolvers",
    "CombinedCampaign-resolvers",
    "CombinedTargeting-resolvers",
    "CombinedTargeting-resolvers",
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
        t = {
          args: null,
          kind: "FragmentSpread",
          name: "ClientAdAccount____relay_model_instance",
        },
        r = [
          { kind: "Variable", name: "ids", variableName: "campaignRelayIDs" },
        ],
        o = [
          {
            name: "audience_id",
            args: null,
            kind: "RelayResolver",
            storageKey: null,
            isOutputType: !0,
            resolverInfo: {
              resolverFunction: n("ClientAudienceType-resolvers").audience_id,
              rootFragment: null,
            },
          },
          {
            name: "name",
            args: null,
            kind: "RelayResolver",
            storageKey: null,
            isOutputType: !0,
            resolverInfo: {
              resolverFunction: n("ClientAudienceType-resolvers").name,
              rootFragment: null,
            },
          },
        ],
        a = {
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
          name: "AdsUEditorCampaignGoalEngagedAudienceInclusionBulkEditContainer_AdsUEditorCampaignGoalEngagedAudienceInclusionBulkEditContainerWithRootQuery",
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
                    path: "selected_ad_account.account_id",
                  },
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
                      args: r,
                      fragment: t,
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
                      args: r,
                      concreteType: "CombinedCampaign",
                      kind: "LinkedField",
                      name: "combined_campaigns",
                      plural: !0,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "AdsUEditorCampaignGoalEngagedAudienceInclusionEditorFragment",
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
          name: "AdsUEditorCampaignGoalEngagedAudienceInclusionBulkEditContainer_AdsUEditorCampaignGoalEngagedAudienceInclusionBulkEditContainerWithRootQuery",
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
                    name: "account_id",
                    args: null,
                    kind: "RelayResolver",
                    storageKey: null,
                    isOutputType: !0,
                    resolverInfo: {
                      resolverFunction: n("ClientAdAccount-resolvers")
                        .account_id,
                      rootFragment: null,
                    },
                  },
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
                      args: r,
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
                      args: r,
                      concreteType: "CombinedCampaign",
                      kind: "LinkedField",
                      name: "combined_campaigns",
                      plural: !0,
                      selections: [
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
                                name: "engaged_audiences_exclusions",
                                args: null,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                                resolverInfo: {
                                  resolverFunction: n("CampaignGoal-resolvers")
                                    .engaged_audiences_exclusions,
                                  rootFragment: null,
                                },
                              },
                              {
                                name: "engaged_audiences_inclusions",
                                args: null,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                                resolverInfo: {
                                  resolverFunction: n("CampaignGoal-resolvers")
                                    .engaged_audiences_inclusions,
                                  rootFragment: null,
                                },
                              },
                              {
                                name: "engaged_audiences_audience_label_inclusions",
                                args: null,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                                resolverInfo: {
                                  resolverFunction: n("CampaignGoal-resolvers")
                                    .engaged_audiences_audience_label_inclusions,
                                  rootFragment: null,
                                },
                              },
                              {
                                name: "is_ca_expansion_enabled",
                                args: null,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                                resolverInfo: {
                                  resolverFunction: n("CampaignGoal-resolvers")
                                    .is_ca_expansion_enabled,
                                  rootFragment: null,
                                },
                              },
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
                        {
                          kind: "ClientEdgeToClientObject",
                          backingField: {
                            name: "targeting",
                            args: null,
                            kind: "RelayResolver",
                            storageKey: null,
                            isOutputType: !0,
                            resolverInfo: {
                              resolverFunction: n("CombinedCampaign-resolvers")
                                .targeting,
                              rootFragment: null,
                            },
                          },
                          linkedField: {
                            alias: null,
                            args: null,
                            concreteType: "CombinedTargeting",
                            kind: "LinkedField",
                            name: "targeting",
                            plural: !1,
                            selections: [
                              {
                                kind: "ClientEdgeToClientObject",
                                backingField: {
                                  name: "custom_audiences",
                                  args: null,
                                  kind: "RelayResolver",
                                  storageKey: null,
                                  isOutputType: !0,
                                  resolverInfo: {
                                    resolverFunction: n(
                                      "CombinedTargeting-resolvers",
                                    ).custom_audiences,
                                    rootFragment: null,
                                  },
                                },
                                linkedField: {
                                  alias: null,
                                  args: null,
                                  concreteType: "ClientAudienceType",
                                  kind: "LinkedField",
                                  name: "custom_audiences",
                                  plural: !0,
                                  selections: o,
                                  storageKey: null,
                                },
                              },
                              {
                                kind: "ClientEdgeToClientObject",
                                backingField: {
                                  name: "excluded_custom_audiences",
                                  args: null,
                                  kind: "RelayResolver",
                                  storageKey: null,
                                  isOutputType: !0,
                                  resolverInfo: {
                                    resolverFunction: n(
                                      "CombinedTargeting-resolvers",
                                    ).excluded_custom_audiences,
                                    rootFragment: null,
                                  },
                                },
                                linkedField: {
                                  alias: null,
                                  args: null,
                                  concreteType: "ClientAudienceType",
                                  kind: "LinkedField",
                                  name: "excluded_custom_audiences",
                                  plural: !0,
                                  selections: o,
                                  storageKey: null,
                                },
                              },
                            ],
                            storageKey: null,
                          },
                        },
                        a,
                      ],
                      storageKey: null,
                    },
                  },
                  a,
                ],
                storageKey: null,
              },
            },
          ],
          use_exec_time_resolvers: !0,
        },
        params: {
          cacheID: "3b305ee3c56250d1a699349899995180",
          id: null,
          metadata: {},
          name: "AdsUEditorCampaignGoalEngagedAudienceInclusionBulkEditContainer_AdsUEditorCampaignGoalEngagedAudienceInclusionBulkEditContainerWithRootQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    ((e.params.metadata.operation = e.operation), (a.exports = e));
  },
  null,
);
