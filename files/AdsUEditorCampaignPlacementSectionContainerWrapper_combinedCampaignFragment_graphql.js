__d(
  "AdsUEditorCampaignPlacementSectionContainerWrapper_combinedCampaignFragment.graphql",
  [
    "relay-runtime/experimental",
    "CombinedCampaignGroup__id.graphql",
    "CombinedCampaignGroup-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { hasClientEdges: !0, plural: !0 },
      name: "AdsUEditorCampaignPlacementSectionContainerWrapper_combinedCampaignFragment",
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
            fragment: {
              args: null,
              kind: "FragmentSpread",
              name: "CombinedCampaign____relay_model_instance",
            },
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
                name: "usePlacementsUniformObjective_fragment",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "useUEditorCampaignIsAdditionalOptionsEnabledSelector_fragment",
              },
            ],
            storageKey: null,
          },
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useHasSomeAdgroupWithAutoflowLiteSelector_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "usePlacementValue_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useAdsUEditorCampaignHasACOAdgroup_campaign",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useBAYouthAdsHasInvalidPlacementsSelector_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useBAYouthAdsIsTargetingYouthRelaySelector_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useBlockListsRelaySelector_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useAdsUEditorCampaignShowBulkEdit_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "usePlacementHidePlatformsRelaySelector_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useIsCampaignEligibleForPlacementAssetCustomizationPhase2RelaySelector_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "usePlacementDevicePlatforms_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useYouthAdsAgeCutoff_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useTargetedAudienceGroups_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useAllowedAudienceGroupsForSelectedPlacements_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useBrandSafetyContentExclusionTypesRelaySelector_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "usePlacementFullFunnelObjective_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useAdsBAYouthAdsTransformInvalidPlacementsToPluginKeys_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "AdsUEditorIsCampaignTargetingBAYouthHooks_useAdsBAYouthAdsVisibilityRestrictions_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useAdsUEditorCampaignDraftFragmentIDFragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useAdsUEditorCampaignPlacementAllPositionsAndDevicesSelectedRelaySelector_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useIsWhatsAppStatusAdsEnabledRelaySelector_fragment",
        },
      ],
      type: "CombinedCampaign",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
