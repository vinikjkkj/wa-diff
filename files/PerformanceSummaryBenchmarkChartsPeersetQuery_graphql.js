__d(
  "PerformanceSummaryBenchmarkChartsPeersetQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "callerId" },
          { defaultValue: null, kind: "LocalArgument", name: "campaignId" },
          { defaultValue: null, kind: "LocalArgument", name: "dateRange" },
        ],
        t = [
          { kind: "Variable", name: "caller_id", variableName: "callerId" },
          { kind: "Variable", name: "campaign_id", variableName: "campaignId" },
          { kind: "Variable", name: "date_range", variableName: "dateRange" },
        ],
        n = [
          {
            alias: null,
            args: null,
            concreteType: "XFBAppliedInsightsIndustryBenchmark",
            kind: "LinkedField",
            name: "benchmark",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "p50",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "date",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "PerformanceSummaryBenchmarkChartsPeersetQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AppliedInsightsCostPerResultIndustryBenchmarkL2V2",
              kind: "LinkedField",
              name: "cost_per_result_industry_benchmark_l2_from_campaign_id_v2",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBAppliedInsightsDateIndustryBenchmarkPair",
                  kind: "LinkedField",
                  name: "benchmarks",
                  plural: !0,
                  selections: [
                    {
                      kind: "InlineDataFragmentSpread",
                      name: "PerformanceSummaryWidgetUtils_benchmarkData",
                      selections: n,
                      args: null,
                      argumentDefinitions: [],
                    },
                  ],
                  storageKey: null,
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
          name: "PerformanceSummaryBenchmarkChartsPeersetQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AppliedInsightsCostPerResultIndustryBenchmarkL2V2",
              kind: "LinkedField",
              name: "cost_per_result_industry_benchmark_l2_from_campaign_id_v2",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBAppliedInsightsDateIndustryBenchmarkPair",
                  kind: "LinkedField",
                  name: "benchmarks",
                  plural: !0,
                  selections: n,
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "29942117215390622",
          metadata: {},
          name: "PerformanceSummaryBenchmarkChartsPeersetQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
