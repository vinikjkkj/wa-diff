__d(
  "MAIBAAdDraftEditorContextProvider_refreshCampaignGroup.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            kind: "Variable",
            name: "isAdsManager",
            variableName: "isAdsManager",
          },
        ],
        t = { kind: "Variable", name: "isIG", variableName: "isIG" };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "isAdsManager" },
          { defaultValue: !1, kind: "LocalArgument", name: "isIG" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "paymentSummaryEntryPoint",
          },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "useOutcomeForecastV2",
          },
        ],
        kind: "Fragment",
        metadata: { throwOnFieldError: !0 },
        name: "MAIBAAdDraftEditorContextProvider_refreshCampaignGroup",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "draft_fragment_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "draft_validation_status",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "AdDraftValidationError",
            kind: "LinkedField",
            name: "draft_validation_errors",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_code",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_description",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_type",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "blame_field_spec",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: e,
            kind: "FragmentSpread",
            name: "MAIBAAdCreativeCard_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAAdIdentityCard_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAAudienceCard_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBABudgetCard_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBACampaignNameCard_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBACampaignSettingsCard_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBACampaignSummaryCard_campaignGroup",
          },
          {
            args: e,
            kind: "FragmentSpread",
            name: "MAIBAAdDraftEditorContextProvider_adSetupCampaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBACatalogCard_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAConversionCard_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBADestinationCard_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBALWIGoalCard_campaignGroup",
          },
          {
            args: [t],
            kind: "FragmentSpread",
            name: "MAIBAIGGoalCard_campaignGroup",
          },
          {
            args: [
              t,
              {
                kind: "Variable",
                name: "useOutcomeForecastV2",
                variableName: "useOutcomeForecastV2",
              },
            ],
            kind: "FragmentSpread",
            name: "useMAIBAOutcomeForecastMetrics_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAGoalCard_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAGoalsOptimizationCard_campaignGroup",
          },
          {
            args: [
              {
                kind: "Variable",
                name: "paymentSummaryEntryPoint",
                variableName: "paymentSummaryEntryPoint",
              },
            ],
            kind: "FragmentSpread",
            name: "MAIBAPaymentSummaryCard_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAPixelEventCard_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAPlacementsCard_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAProductSetCard_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAPromotedAppCard_campaignGroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBASpecialAdCategoryCard_campaignGroup",
          },
        ],
        type: "AdCampaignGroupWithDraftData",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
