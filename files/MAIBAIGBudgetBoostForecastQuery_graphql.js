__d(
  "MAIBAIGBudgetBoostForecastQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "campaignID" },
          { defaultValue: null, kind: "LocalArgument", name: "dailyBudget" },
          { defaultValue: null, kind: "LocalArgument", name: "duration" },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "campaignID" }],
        n = [
          {
            kind: "Variable",
            name: "daily_budget",
            variableName: "dailyBudget",
          },
          { kind: "Variable", name: "duration", variableName: "duration" },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "MAIBAIGBudgetBoostForecastQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdCampaignWithDraftData",
              kind: "LinkedField",
              name: "fetch__AdCampaignWithDraftData",
              plural: !1,
              selections: [
                {
                  kind: "CatchField",
                  field: {
                    alias: null,
                    args: n,
                    concreteType: "XFBMAIBAIGBoostForecast",
                    kind: "LinkedField",
                    name: "ig_bow_forecast",
                    plural: !1,
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "MAIBAIGBoostForecastMetrics_budgetForecast",
                      },
                    ],
                    storageKey: null,
                  },
                  to: "NULL",
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAIGBudgetBoostForecastQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdCampaignWithDraftData",
              kind: "LinkedField",
              name: "fetch__AdCampaignWithDraftData",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: n,
                  concreteType: "XFBMAIBAIGBoostForecast",
                  kind: "LinkedField",
                  name: "ig_bow_forecast",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "duration",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "destination",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBIGBoostImpressionEstimate",
                      kind: "LinkedField",
                      name: "impressions",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "estimated_impressions_lower",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "estimated_impressions_upper",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBIGBoostOutcomeEstimate",
                      kind: "LinkedField",
                      name: "outcomes",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "estimated_outcomes_upper",
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
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27630879823254556",
          metadata: {},
          name: "MAIBAIGBudgetBoostForecastQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
