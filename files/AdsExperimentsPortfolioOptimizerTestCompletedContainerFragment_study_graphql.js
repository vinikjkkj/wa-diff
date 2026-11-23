__d(
  "AdsExperimentsPortfolioOptimizerTestCompletedContainerFragment_study.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "cpa",
        storageKey: null,
      };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "objective_ids" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "AdsExperimentsPortfolioOptimizerTestCompletedContainerFragment_study",
        selections: [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "objective_ids",
                variableName: "objective_ids",
              },
            ],
            concreteType: "XFBPortfolioOptimizerOutput",
            kind: "LinkedField",
            name: "portfolio_optimizer_result",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ds",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "study_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "objective_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_primary_objective",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBPortfolioOptimizerBreakdown",
                kind: "LinkedField",
                name: "breakdown",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "creative_combination",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_objective_recommended",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBPortfolioOptimizerMetrics",
                kind: "LinkedField",
                name: "metrics",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "baseline_cpa",
                    storageKey: null,
                  },
                  e,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "winner_confidence",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_bau",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_insufficient_data",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBPortfolioOptimizerAdgroupMetrics",
                    kind: "LinkedField",
                    name: "per_adgroup_metrics",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "adgroup_id",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "conversions",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "impressions",
                        storageKey: null,
                      },
                      e,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "spend",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "AdStudy",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
