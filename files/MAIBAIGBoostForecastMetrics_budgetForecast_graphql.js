__d(
  "MAIBAIGBoostForecastMetrics_budgetForecast.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAIGBoostForecastMetrics_budgetForecast",
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
          kind: "CatchField",
          field: {
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
          to: "NULL",
        },
        {
          kind: "CatchField",
          field: {
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
          to: "NULL",
        },
      ],
      type: "XFBMAIBAIGBoostForecast",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
