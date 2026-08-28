__d(
  "BillingGKLogExposureMutation.graphql",
  ["BillingGKLogExposureMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            kind: "ScalarField",
            name: "billing_gk_log_exposure",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "BillingGKLogExposureMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "BillingGKLogExposureMutation",
          selections: t,
        },
        params: {
          id: n("BillingGKLogExposureMutation_facebookRelayOperation"),
          metadata: {},
          name: "BillingGKLogExposureMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
