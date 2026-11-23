__d(
  "PerformanceSummaryCustomMetricsContainerFrequencyOptInMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "entity_id" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "personalization_types",
          },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "entity_id",
                variableName: "entity_id",
              },
              {
                kind: "Variable",
                name: "personalization_types",
                variableName: "personalization_types",
              },
            ],
            concreteType: "XFBMetricsProfile",
            kind: "LinkedField",
            name: "xfb_upsert_and_opt_in_metrics_profile",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
              {
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
                        name: "time_added",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "effective_time",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "backfill_status",
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
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "PerformanceSummaryCustomMetricsContainerFrequencyOptInMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "PerformanceSummaryCustomMetricsContainerFrequencyOptInMutation",
          selections: t,
        },
        params: {
          id: "26139178362430592",
          metadata: {},
          name: "PerformanceSummaryCustomMetricsContainerFrequencyOptInMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
