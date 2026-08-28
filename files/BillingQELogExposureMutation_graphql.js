__d(
  "BillingQELogExposureMutation.graphql",
  ["BillingQELogExposureMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            kind: "ScalarField",
            name: "billing_qe_log_exposure",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "BillingQELogExposureMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "BillingQELogExposureMutation",
          selections: t,
        },
        params: {
          id: n("BillingQELogExposureMutation_facebookRelayOperation"),
          metadata: {},
          name: "BillingQELogExposureMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
