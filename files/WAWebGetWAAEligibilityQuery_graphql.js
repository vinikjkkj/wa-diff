__d(
  "WAWebGetWAAEligibilityQuery.graphql",
  ["WAWebGetWAAEligibilityQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "WaAdAccountEligibilityCheckResponse",
            kind: "LinkedField",
            name: "eval_wa_ad_account_eligibility_rules",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "eligibility_result",
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
          name: "WAWebGetWAAEligibilityQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebGetWAAEligibilityQuery",
          selections: t,
        },
        params: {
          id: n("WAWebGetWAAEligibilityQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebGetWAAEligibilityQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
