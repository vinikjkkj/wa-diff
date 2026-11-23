__d(
  "AdsUEditorCampaignPlacementSectionContainer_fragment.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-account-controls-resolver",
    "relay-runtime/experimental",
    "ClientAdAccountAccountControlsResponseData____relay_model_instance.graphql",
    "ClientAdAccountAccountControls-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccountAccountControlInfoData____relay_model_instance.graphql",
    "ClientAdAccountAccountControlInfoData-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccountPlacementControlInfoData____relay_model_instance.graphql",
    "ClientAdAccountPlacementControlInfoData-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign__id.graphql",
    "CombinedCampaign-resolvers",
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
        },
        t = [
          {
            kind: "Variable",
            name: "ids",
            variableName: "selected_campaign_relay_ids",
          },
        ];
      return {
        argumentDefinitions: [
          {
            kind: "RootArgument",
            name: "__relay_internal__pv__perseusL4ColocatePlacementSectionWrapperrelayprovider",
          },
          { kind: "RootArgument", name: "enable_industry_benchmark_insight" },
          { kind: "RootArgument", name: "selected_campaign_relay_ids" },
        ],
        kind: "Fragment",
        metadata: { hasClientEdges: !0 },
        name: "AdsUEditorCampaignPlacementSectionContainer_fragment",
        selections: [
          {
            kind: "ClientEdgeToClientObject",
            concreteType: "ClientAdAccountAccountControlsResponseData",
            modelResolvers: null,
            serverObjectOperations: null,
            backingField: {
              alias: null,
              args: null,
              fragment: e,
              kind: "RelayLiveResolver",
              name: "account_controls",
              resolverModule: n(
                "relay-runtime/experimental",
              ).resolverDataInjector(
                n("ClientAdAccount____relay_model_instance.graphql"),
                n("ClientAdAccount-account-controls-resolver").account_controls,
                "__relay_model_instance",
                !0,
              ),
              path: "account_controls",
              normalizationInfo: {
                kind: "WeakModel",
                concreteType: "ClientAdAccountAccountControlsResponseData",
                plural: !1,
              },
            },
            linkedField: {
              alias: null,
              args: null,
              concreteType: "ClientAdAccountAccountControlsResponseData",
              kind: "LinkedField",
              name: "account_controls",
              plural: !1,
              selections: [
                {
                  kind: "ClientEdgeToClientObject",
                  concreteType: "ClientAdAccountAccountControlInfoData",
                  modelResolvers: null,
                  serverObjectOperations: null,
                  backingField: {
                    alias: null,
                    args: null,
                    fragment: {
                      args: null,
                      kind: "FragmentSpread",
                      name: "ClientAdAccountAccountControlsResponseData____relay_model_instance",
                    },
                    kind: "RelayResolver",
                    name: "data",
                    resolverModule: n(
                      "relay-runtime/experimental",
                    ).resolverDataInjector(
                      n(
                        "ClientAdAccountAccountControlsResponseData____relay_model_instance.graphql",
                      ),
                      n("ClientAdAccountAccountControls-resolvers").data,
                      "__relay_model_instance",
                      !0,
                    ),
                    path: "account_controls.data",
                    normalizationInfo: {
                      kind: "WeakModel",
                      concreteType: "ClientAdAccountAccountControlInfoData",
                      plural: !0,
                    },
                  },
                  linkedField: {
                    alias: null,
                    args: null,
                    concreteType: "ClientAdAccountAccountControlInfoData",
                    kind: "LinkedField",
                    name: "data",
                    plural: !0,
                    selections: [
                      {
                        kind: "ClientEdgeToClientObject",
                        concreteType: "ClientAdAccountPlacementControlInfoData",
                        modelResolvers: null,
                        serverObjectOperations: null,
                        backingField: {
                          alias: null,
                          args: null,
                          fragment: {
                            args: null,
                            kind: "FragmentSpread",
                            name: "ClientAdAccountAccountControlInfoData____relay_model_instance",
                          },
                          kind: "RelayResolver",
                          name: "placement_controls",
                          resolverModule: n(
                            "relay-runtime/experimental",
                          ).resolverDataInjector(
                            n(
                              "ClientAdAccountAccountControlInfoData____relay_model_instance.graphql",
                            ),
                            n("ClientAdAccountAccountControlInfoData-resolvers")
                              .placement_controls,
                            "__relay_model_instance",
                            !0,
                          ),
                          path: "account_controls.data.placement_controls",
                          normalizationInfo: {
                            kind: "WeakModel",
                            concreteType:
                              "ClientAdAccountPlacementControlInfoData",
                            plural: !1,
                          },
                        },
                        linkedField: {
                          alias: null,
                          args: null,
                          concreteType:
                            "ClientAdAccountPlacementControlInfoData",
                          kind: "LinkedField",
                          name: "placement_controls",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              fragment: {
                                args: null,
                                kind: "FragmentSpread",
                                name: "ClientAdAccountPlacementControlInfoData____relay_model_instance",
                              },
                              kind: "RelayResolver",
                              name: "placement_exclusions",
                              resolverModule: n(
                                "relay-runtime/experimental",
                              ).resolverDataInjector(
                                n(
                                  "ClientAdAccountPlacementControlInfoData____relay_model_instance.graphql",
                                ),
                                n(
                                  "ClientAdAccountPlacementControlInfoData-resolvers",
                                ).placement_exclusions,
                                "__relay_model_instance",
                                !0,
                              ),
                              path: "account_controls.data.placement_controls.placement_exclusions",
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
              storageKey: null,
            },
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAdsTargetingAccountControlInfo_fragment",
          },
          {
            args: [
              {
                kind: "Variable",
                name: "enable_industry_benchmark_insight",
                variableName: "enable_industry_benchmark_insight",
              },
            ],
            kind: "FragmentSpread",
            name: "AdsPlacementSelection_fragment",
          },
          {
            condition:
              "__relay_internal__pv__perseusL4ColocatePlacementSectionWrapperrelayprovider",
            kind: "Condition",
            passingValue: !1,
            selections: [
              {
                kind: "ClientExtension",
                selections: [
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "useBaSkipDelayedEligibleOnAdAccountRelaySelector_fragment",
                        },
                      ],
                      type: "ClientAdAccount",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "useBaSkipDelayedEligibleOnAdAccountRelaySelector_fragment",
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "Defer",
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "AdsAdvantagePlacementMMOnlyRecommendationFragment",
                            },
                          ],
                        },
                      ],
                      type: "ClientAdAccount",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "AdsAdvantagePlacementMMOnlyRecommendationFragment",
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "Defer",
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "AdsAdvantagePlacementRecommendationFragment",
                            },
                          ],
                        },
                      ],
                      type: "ClientAdAccount",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "AdsAdvantagePlacementRecommendationFragment",
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "Defer",
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "AdsDuplicationUpgradeAdvantagePlusPlacementsMessagesContainerFragment",
                            },
                          ],
                        },
                      ],
                      type: "ClientAdAccount",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "AdsDuplicationUpgradeAdvantagePlusPlacementsMessagesContainerFragment",
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "Defer",
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "AdsPlacementBwPWarningFragment",
                            },
                          ],
                        },
                      ],
                      type: "ClientAdAccount",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "AdsPlacementBwPWarningFragment",
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "Defer",
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "AdsPVARInlineGuidanceWrapperFragment",
                            },
                          ],
                        },
                      ],
                      type: "ClientAdAccount",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "AdsPVARInlineGuidanceWrapperFragment",
                  },
                ],
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
                    path: "combined_campaigns.__relay_model_instance",
                  },
                },
                serverObjectOperations: null,
                backingField: {
                  alias: null,
                  args: t,
                  fragment: e,
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
                  path: "combined_campaigns",
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
                      args: null,
                      kind: "FragmentSpread",
                      name: "AdsUEditorCampaignPlacementSectionContainer_combinedCampaignsFragment",
                    },
                  ],
                  storageKey: null,
                },
              },
              {
                fragment: {
                  kind: "InlineFragment",
                  selections: [
                    {
                      kind: "Defer",
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "AdsValueAdjustmentRuleInPlacementsGuidanceWrapperFragment",
                        },
                      ],
                    },
                  ],
                  type: null,
                  abstractKey: null,
                },
                kind: "AliasedInlineFragmentSpread",
                name: "AdsValueAdjustmentRuleInPlacementsGuidanceWrapperFragment",
              },
              {
                fragment: {
                  kind: "InlineFragment",
                  selections: [
                    {
                      kind: "Defer",
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "AdsPlacementMessageMarketingSACGuidanceCard_fragment",
                        },
                      ],
                    },
                  ],
                  type: null,
                  abstractKey: null,
                },
                kind: "AliasedInlineFragmentSpread",
                name: "AdsPlacementMessageMarketingSACGuidanceCard_fragment",
              },
            ],
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
