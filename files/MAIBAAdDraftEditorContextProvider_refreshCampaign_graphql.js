__d(
  "MAIBAAdDraftEditorContextProvider_refreshCampaign.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        kind: "Variable",
        name: "useOutcomeForecastV2",
        variableName: "useOutcomeForecastV2",
      };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "draftID" },
          { defaultValue: !1, kind: "LocalArgument", name: "isIG" },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "useOutcomeForecastV2",
          },
        ],
        kind: "Fragment",
        metadata: { throwOnFieldError: !0 },
        name: "MAIBAAdDraftEditorContextProvider_refreshCampaign",
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
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAAdCreativeCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAAdIdentityCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAAdDetailSummaryCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAAdPreviewCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAAdSetNameCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAAdTransparencyCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAAudienceCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAIGAudienceCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAIGAITransparencyCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBABudgetCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBACampaignSettingsCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBACampaignDetailsCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBACampaignRowCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAChatBuilderCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAConversionCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBALWIGoalCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAIGGoalCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBADestinationCard_campaign",
          },
          {
            args: [{ kind: "Variable", name: "isIG", variableName: "isIG" }, e],
            kind: "FragmentSpread",
            name: "useMAIBAOutcomeForecastMetrics_campaign",
          },
          {
            args: [e],
            kind: "FragmentSpread",
            name: "MAIBAOutcomeForecasterCardV2_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAGoalsOptimizationCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAIndiaFinServPolicyCard_campaign",
          },
          {
            args: [
              { kind: "Variable", name: "draftID", variableName: "draftID" },
            ],
            kind: "FragmentSpread",
            name: "MAIBALWICountryRegulationPolicyCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBALeadFormCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAPixelEventCard_campaign",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAPlacementsCard_campaign",
          },
        ],
        type: "AdCampaignWithDraftData",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
