__d(
  "MAIBAOutcomeForecasterCardV2_campaign.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "useOutcomeForecastV2",
        },
      ],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAOutcomeForecasterCardV2_campaign",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "daily_budget",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "optimization_goal",
          storageKey: null,
        },
        {
          condition: "useOutcomeForecastV2",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType:
                "XFBUGPAdAccountOutcomeForecasterBudgetRecommendationPFRExtraData",
              kind: "LinkedField",
              name: "outcome_forecasts_v2",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBPreflightBudgetResultsPrediction",
                  kind: "LinkedField",
                  name: "current_prediction",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "predicted_impressions",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "predicted_impressions_lower",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "predicted_impressions_upper",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "predicted_results",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "predicted_results_lower",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "predicted_results_upper",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "outcome_forecasts_v2_from_ofs",
              storageKey: null,
            },
          ],
        },
      ],
      type: "AdCampaignWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
