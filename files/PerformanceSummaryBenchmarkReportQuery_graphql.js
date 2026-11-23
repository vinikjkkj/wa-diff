__d(
  "PerformanceSummaryBenchmarkReportQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "campaignGroupID",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "campaignID" },
        n = { defaultValue: !0, kind: "LocalArgument", name: "shouldQuery" },
        r = [
          {
            condition: "shouldQuery",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                alias: null,
                args: [
                  {
                    fields: [
                      {
                        kind: "Variable",
                        name: "campaign_group_id",
                        variableName: "campaignGroupID",
                      },
                      {
                        kind: "Variable",
                        name: "campaign_id",
                        variableName: "campaignID",
                      },
                    ],
                    kind: "ObjectValue",
                    name: "request",
                  },
                ],
                concreteType: "XFBBenchmarkingReportCampaignMetricsResponse",
                kind: "LinkedField",
                name: "xfb_camp_benchmarking_report_campaign_metrics",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBAdsInsightsRawLocalDateInterval",
                    kind: "LinkedField",
                    name: "date_range_used",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "end",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "start",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "industry_benchmark_p50",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "objective",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "relative_pct",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "PerformanceSummaryBenchmarkReportQuery",
          selections: r,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e, n],
          kind: "Operation",
          name: "PerformanceSummaryBenchmarkReportQuery",
          selections: r,
        },
        params: {
          id: "25227160223604349",
          metadata: {},
          name: "PerformanceSummaryBenchmarkReportQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
