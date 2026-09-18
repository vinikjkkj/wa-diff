__d(
  "WAWebBizBroadcastProDefaultCostQuery.graphql",
  ["WAWebBizBroadcastProDefaultCostQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "currency" },
          { defaultValue: null, kind: "LocalArgument", name: "wabaID" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "currency",
                    variableName: "currency",
                  },
                  { kind: "Variable", name: "waba_id", variableName: "wabaID" },
                ],
                kind: "ObjectValue",
                name: "input",
              },
            ],
            concreteType: "XWAMMAPIEstimatedCost",
            kind: "LinkedField",
            name: "xwa_mm_api_estimated_costs",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "country_code",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "currency_code",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "display_name",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "estimated_cost",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_default",
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
          metadata: { throwOnFieldError: !0 },
          name: "WAWebBizBroadcastProDefaultCostQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizBroadcastProDefaultCostQuery",
          selections: t,
        },
        params: {
          id: n("WAWebBizBroadcastProDefaultCostQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizBroadcastProDefaultCostQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
