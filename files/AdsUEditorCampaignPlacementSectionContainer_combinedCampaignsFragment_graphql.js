__d(
  "AdsUEditorCampaignPlacementSectionContainer_combinedCampaignsFragment.graphql",
  [
    "relay-runtime/experimental",
    "CombinedCampaignGroup__id.graphql",
    "CombinedCampaignGroup-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        args: null,
        kind: "FragmentSpread",
        name: "CombinedCampaign____relay_model_instance",
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { hasClientEdges: !0, plural: !0, throwOnFieldError: !0 },
        name: "AdsUEditorCampaignPlacementSectionContainer_combinedCampaignsFragment",
        selections: [
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
                  n("CombinedCampaignGroup-resolvers").CombinedCampaignGroup,
                  "id",
                  !0,
                ),
                path: "combined_campaign_group.__relay_model_instance",
              },
            },
            serverObjectOperations: null,
            backingField: {
              alias: null,
              args: null,
              fragment: e,
              kind: "RelayResolver",
              name: "combined_campaign_group",
              resolverModule: n(
                "relay-runtime/experimental",
              ).resolverDataInjector(
                n("CombinedCampaign____relay_model_instance.graphql"),
                n("CombinedCampaign-resolvers").combined_campaign_group,
                "__relay_model_instance",
                !0,
              ),
              path: "combined_campaign_group",
            },
            linkedField: {
              alias: null,
              args: null,
              concreteType: "CombinedCampaignGroup",
              kind: "LinkedField",
              name: "combined_campaign_group",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "useCrepeEditorModifications_fragment",
                },
              ],
              storageKey: null,
            },
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useIsSelectedRegulatedCategory_fragment",
          },
          {
            alias: null,
            args: null,
            fragment: e,
            kind: "RelayResolver",
            name: "destination_type",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("CombinedCampaign____relay_model_instance.graphql"),
              n("CombinedCampaign-resolvers").destination_type,
              "__relay_model_instance",
              !0,
            ),
            path: "destination_type",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAdsUEditorCampaignIDsRelaySelector_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "usePlacementsSelectedCampaigns_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useInstreamOnlyDefaultSkippableExclusionRelaySelector_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useHidePlacementsForAutomatedAdsMessage_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "usePlacementsMobileDevices_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "usePlacementsAdgroupIDs_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useCampaignsAreMixedPAC_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAdsUEditorAreSomeCampaignsBwPFragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useInstreamVideoSkippableExcludedRelaySelector_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "usePlacementBrandSafetyContentFilterLevels_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useBrandSafetyCommentModerationFilter_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useBrandSafetyPlatformCommentModerationFilter_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useBrandSafetyThreadsCommentModerationFilter_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAdgroupsMap_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useBaSkipDelayedEligibleRelaySelector_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAdsCampaignMessageMarketingIncludedCustomAudiencesFragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAdsCampaignMessageMarketingExcludedCustomAudiencesFragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAdsCampaignMessageMarketingHasWhatsAppMessageMarketingChannelFragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useCampaignHasSavedAudience_fragment",
          },
          {
            kind: "Defer",
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "AdsUEditorCampaignPlacementPoliticalNoticeFragment",
              },
            ],
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAdsUEditorCampaignPlacementSoftOptOut_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAdsUEditorCampaignPlacementAllPositionsAndDevicesSelectedRelaySelector_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAdsCampaignHasValueRuleSet_fragment",
          },
          {
            alias: null,
            args: null,
            fragment: e,
            kind: "RelayResolver",
            name: "source_adset_id",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("CombinedCampaign____relay_model_instance.graphql"),
              n("CombinedCampaign-resolvers").source_adset_id,
              "__relay_model_instance",
              !0,
            ),
            path: "source_adset_id",
          },
        ],
        type: "CombinedCampaign",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
