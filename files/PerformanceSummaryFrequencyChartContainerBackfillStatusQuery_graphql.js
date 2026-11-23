__d(
  "PerformanceSummaryFrequencyChartContainerBackfillStatusQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "metrics_entity_id",
          },
          { defaultValue: null, kind: "LocalArgument", name: "should_skip" },
        ],
        t = [
          {
            kind: "Variable",
            name: "metrics_entity_id",
            variableName: "metrics_entity_id",
          },
        ],
        n = {
          alias: null,
          args: null,
          concreteType: "XFBMetricPersonalization",
          kind: "LinkedField",
          name: "personalizations",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "personalization_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XFBMetricPersonalizationMetadata",
              kind: "LinkedField",
              name: "personalization_metadata",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "backfill_status",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "effective_time",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "PerformanceSummaryFrequencyChartContainerBackfillStatusQuery",
          selections: [
            {
              condition: "should_skip",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: t,
                  concreteType: "XFBMetricsProfile",
                  kind: "LinkedField",
                  name: "xfb_metrics_profile",
                  plural: !1,
                  selections: [n],
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
          argumentDefinitions: e,
          kind: "Operation",
          name: "PerformanceSummaryFrequencyChartContainerBackfillStatusQuery",
          selections: [
            {
              condition: "should_skip",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: t,
                  concreteType: "XFBMetricsProfile",
                  kind: "LinkedField",
                  name: "xfb_metrics_profile",
                  plural: !1,
                  selections: [
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
          ],
        },
        params: {
          id: "28278711928433578",
          metadata: {},
          name: "PerformanceSummaryFrequencyChartContainerBackfillStatusQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
