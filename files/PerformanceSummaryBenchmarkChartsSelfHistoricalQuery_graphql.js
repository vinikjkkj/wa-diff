__d(
  "PerformanceSummaryBenchmarkChartsSelfHistoricalQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "campaignId" },
          { defaultValue: null, kind: "LocalArgument", name: "dateRange" },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "campaignId" }],
        n = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: "Variable",
                  name: "date_range",
                  variableName: "dateRange",
                },
              ],
              kind: "ScalarField",
              name: "cost_per_result_self_historical_benchmark",
              storageKey: null,
            },
          ],
          type: "AdCampaign",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "PerformanceSummaryBenchmarkChartsSelfHistoricalQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [n],
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
          name: "PerformanceSummaryBenchmarkChartsSelfHistoricalQuery",
          selections: [
            {
              alias: null,
              args: t,
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
                n,
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
          id: "24420597277625403",
          metadata: {},
          name: "PerformanceSummaryBenchmarkChartsSelfHistoricalQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
