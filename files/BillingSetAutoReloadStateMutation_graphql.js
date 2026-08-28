__d(
  "BillingSetAutoReloadStateMutation.graphql",
  ["BillingSetAutoReloadStateMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "BillableAccountAutoReloadUpdateResponsePayload",
            kind: "LinkedField",
            name: "billable_account_auto_reload_update",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "status",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBAutoReloadChargeResponse",
                kind: "LinkedField",
                name: "charge_response",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "charge_status",
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
          name: "BillingSetAutoReloadStateMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "BillingSetAutoReloadStateMutation",
          selections: t,
        },
        params: {
          id: n("BillingSetAutoReloadStateMutation_facebookRelayOperation"),
          metadata: {},
          name: "BillingSetAutoReloadStateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
