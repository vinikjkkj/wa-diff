__d(
  "WAWebContactManagerCustomerProfileDeleteMutation.graphql",
  ["WAWebContactManagerCustomerProfileDeleteMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "lid" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "lid", variableName: "lid" }],
            concreteType: "XFBWADeleteCustomerProfileResponse",
            kind: "LinkedField",
            name: "xfb_wa_delete_customer_profile",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "deleted_lid",
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
          name: "WAWebContactManagerCustomerProfileDeleteMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebContactManagerCustomerProfileDeleteMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebContactManagerCustomerProfileDeleteMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebContactManagerCustomerProfileDeleteMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
