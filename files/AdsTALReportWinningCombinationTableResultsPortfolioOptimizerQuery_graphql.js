__d(
  "AdsTALReportWinningCombinationTableResultsPortfolioOptimizerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "objective_ids",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "skip_query" },
        n = { defaultValue: null, kind: "LocalArgument", name: "study_id" },
        r = [{ kind: "Variable", name: "id", variableName: "study_id" }],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cpa",
          storageKey: null,
        },
        a = {
          kind: "InlineFragment",
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
                    o,
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
                        o,
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
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: {
            throwOnFieldError: !0,
            vultureHash: "54K73Vjc-vDsxCe4hH8qUmvozxc=",
          },
          name: "AdsTALReportWinningCombinationTableResultsPortfolioOptimizerQuery",
          selections: [
            {
              condition: "skip_query",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: r,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [a],
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [n, t, e],
          kind: "Operation",
          name: "AdsTALReportWinningCombinationTableResultsPortfolioOptimizerQuery",
          selections: [
            {
              condition: "skip_query",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: r,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    a,
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
          ],
        },
        params: {
          id: "26303163482636297",
          metadata: { vultureHash: "54K73Vjc-vDsxCe4hH8qUmvozxc=" },
          name: "AdsTALReportWinningCombinationTableResultsPortfolioOptimizerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
