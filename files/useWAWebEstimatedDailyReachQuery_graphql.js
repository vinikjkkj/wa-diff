__d(
  "useWAWebEstimatedDailyReachQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "audienceOptionAudience",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "configuredPlacementSpec",
        },
        n = { defaultValue: null, kind: "LocalArgument", name: "currency" },
        r = { defaultValue: null, kind: "LocalArgument", name: "flow" },
        o = { defaultValue: null, kind: "LocalArgument", name: "flowID" },
        a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "legacyAdAccountID",
        },
        i = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "optimizationGoalInput",
        },
        l = { defaultValue: null, kind: "LocalArgument", name: "postID" },
        s = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "targetingSpecAudience",
        },
        u = [
          {
            alias: null,
            args: null,
            concreteType: "LWIAPI",
            kind: "LinkedField",
            name: "lwi",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "audience_option",
                    variableName: "audienceOptionAudience",
                  },
                  {
                    kind: "Variable",
                    name: "configured_placement_spec",
                    variableName: "configuredPlacementSpec",
                  },
                  {
                    kind: "Variable",
                    name: "currency",
                    variableName: "currency",
                  },
                  { kind: "Variable", name: "flow", variableName: "flow" },
                  { kind: "Variable", name: "flow_id", variableName: "flowID" },
                  {
                    kind: "Variable",
                    name: "legacy_ad_account_id",
                    variableName: "legacyAdAccountID",
                  },
                  {
                    kind: "Variable",
                    name: "optimization_goal_input",
                    variableName: "optimizationGoalInput",
                  },
                  { kind: "Variable", name: "post_id", variableName: "postID" },
                  { kind: "Literal", name: "supports_pfr_of", value: !0 },
                  {
                    kind: "Variable",
                    name: "targeting_spec_string",
                    variableName: "targetingSpecAudience",
                  },
                ],
                concreteType: "AdsLWIBudgetEstimateData",
                kind: "LinkedField",
                name: "budget_estimate_data_v2",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "AdDailyOutcome",
                    kind: "LinkedField",
                    name: "daily_outcomes_curve",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "actions",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "actions_lower_bound",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "actions_upper_bound",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "bid",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "impressions",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "reach",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "reach_lower_bound",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "reach_upper_bound",
                        storageKey: null,
                      },
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
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r, o, a, i, l, s],
          kind: "Fragment",
          metadata: null,
          name: "useWAWebEstimatedDailyReachQuery",
          selections: u,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [a, s, i, e, t, n, l, o, r],
          kind: "Operation",
          name: "useWAWebEstimatedDailyReachQuery",
          selections: u,
        },
        params: {
          id: "26555147174103537",
          metadata: {},
          name: "useWAWebEstimatedDailyReachQuery",
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
