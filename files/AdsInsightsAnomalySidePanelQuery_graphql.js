__d(
  "AdsInsightsAnomalySidePanelQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [{ kind: "Variable", name: "input", variableName: "input" }],
        n = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "timestamp",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "value",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsInsightsAnomalySidePanelQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBAdsInsightsAnomaliesAndExplanationsNode",
              kind: "LinkedField",
              name: "xfb_applied_insights_anomaly_and_explanations",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "AdsMgmtCampaignTableInspectSidePanelChart_TimeSeries",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "AdsMgmtCampaignTableInspectSidePanelExplanations",
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
          name: "AdsInsightsAnomalySidePanelQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBAdsInsightsAnomaliesAndExplanationsNode",
              kind: "LinkedField",
              name: "xfb_applied_insights_anomaly_and_explanations",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBAnomalyMetricDeltaOutput",
                  kind: "LinkedField",
                  name: "anomaly_metrics",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "delta_percentage",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "reference_period_metric",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "anomaly_period_metric",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType:
                    "XFBAnomalyMetricAnomalyAndReferencePeriodTimeSeriesData",
                  kind: "LinkedField",
                  name: "anomaly_metric_time_series",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBAnomalyMetricTimeSeries",
                      kind: "LinkedField",
                      name: "anomaly_period_metric_data",
                      plural: !0,
                      selections: n,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBAnomalyMetricTimeSeries",
                      kind: "LinkedField",
                      name: "reference_period_metric_data",
                      plural: !0,
                      selections: n,
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBAnomalyExplanationsOutput",
                  kind: "LinkedField",
                  name: "anomaly_metric_explanations",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "name",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBAnomalyExplanationsAttributedAdObjects",
                      kind: "LinkedField",
                      name: "attributed_ad_objects",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "ad_object_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "ad_object_name",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "edit_timestamp",
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
        },
        params: {
          id: "25964357353224415",
          metadata: {},
          name: "AdsInsightsAnomalySidePanelQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
