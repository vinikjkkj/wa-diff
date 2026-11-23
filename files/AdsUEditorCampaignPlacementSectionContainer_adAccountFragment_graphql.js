__d(
  "AdsUEditorCampaignPlacementSectionContainer_adAccountFragment.graphql",
  [
    "relay-runtime/experimental",
    "CombinedCampaign__id.graphql",
    "CombinedCampaign-resolvers",
    "AdAccount-resolver",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
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
          { kind: "RootArgument", name: "selected_campaign_relay_ids" },
        ],
        kind: "Fragment",
        metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
        name: "AdsUEditorCampaignPlacementSectionContainer_adAccountFragment",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "AdsPlacementSelection_adAccountFragment",
          },
          {
            condition:
              "__relay_internal__pv__perseusL4ColocatePlacementSectionWrapperrelayprovider",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                fragment: {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "useBaSkipDelayedEligible_adAccountFragment",
                    },
                  ],
                  type: "AdAccount",
                  abstractKey: null,
                },
                kind: "AliasedInlineFragmentSpread",
                name: "useBaSkipDelayedEligible_adAccountFragment",
              },
              {
                kind: "CatchField",
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
                      path: "combined_campaigns.__relay_model_instance",
                    },
                  },
                  serverObjectOperations: null,
                  backingField: {
                    alias: null,
                    args: e,
                    fragment: {
                      args: null,
                      kind: "FragmentSpread",
                      name: "AdAccountResolverCombinedCampaignsFragment",
                    },
                    kind: "RelayResolver",
                    name: "combined_campaigns",
                    resolverModule: n("AdAccount-resolver").combined_campaigns,
                    path: "combined_campaigns",
                  },
                  linkedField: {
                    alias: null,
                    args: e,
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
                to: "NULL",
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
                          name: "AdsAdvantagePlacementMMOnlyRecommendation_adAccountFragment",
                        },
                      ],
                    },
                  ],
                  type: "AdAccount",
                  abstractKey: null,
                },
                kind: "AliasedInlineFragmentSpread",
                name: "AdsAdvantagePlacementMMOnlyRecommendation_adAccountFragment",
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
                          name: "AdsAdvantagePlacementRecommendation_adAccountFragment",
                        },
                      ],
                    },
                  ],
                  type: "AdAccount",
                  abstractKey: null,
                },
                kind: "AliasedInlineFragmentSpread",
                name: "AdsAdvantagePlacementRecommendation_adAccountFragment",
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
                          name: "AdsDuplicationUpgradeAdvantagePlusPlacementsMessagesContainer_adAccountFragment",
                        },
                      ],
                    },
                  ],
                  type: "AdAccount",
                  abstractKey: null,
                },
                kind: "AliasedInlineFragmentSpread",
                name: "AdsDuplicationUpgradeAdvantagePlusPlacementsMessagesContainer_adAccountFragment",
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
                          name: "AdsPlacementBwPWarning_adAccountFragment",
                        },
                      ],
                    },
                  ],
                  type: "AdAccount",
                  abstractKey: null,
                },
                kind: "AliasedInlineFragmentSpread",
                name: "AdsPlacementBwPWarning_adAccountFragment",
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
                          name: "AdsValueAdjustmentRuleInPlacementsGuidanceWrapper_adAccountFragment",
                        },
                      ],
                    },
                  ],
                  type: "AdAccount",
                  abstractKey: null,
                },
                kind: "AliasedInlineFragmentSpread",
                name: "AdsValueAdjustmentRuleInPlacementsGuidanceWrapper_adAccountFragment",
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
                          name: "AdsPVARInlineGuidanceWrapper_adAccountFragment",
                        },
                      ],
                    },
                  ],
                  type: "AdAccount",
                  abstractKey: null,
                },
                kind: "AliasedInlineFragmentSpread",
                name: "AdsPVARInlineGuidanceWrapper_adAccountFragment",
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
          {
            kind: "CatchField",
            field: {
              alias: null,
              args: null,
              concreteType: "XFBAudienceFunnel",
              kind: "LinkedField",
              name: "shopping_audience_funnel",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBCustomAudienceGroup",
                  kind: "LinkedField",
                  name: "custom_audience_groups",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "custom_audience_ids",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "group_type",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            to: "NULL",
          },
        ],
        type: "AdAccount",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
