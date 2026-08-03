__d(
  "WAWebContactManagerCustomerProfileUpsertMutation.graphql",
  ["WAWebContactManagerCustomerProfileUpsertMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "inputs", variableName: "input" }],
            concreteType: "XFBWAUpsertCustomerProfilesResponse",
            kind: "LinkedField",
            name: "xfb_wa_upsert_customer_profiles",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBWACustomerProfile",
                kind: "LinkedField",
                name: "profiles",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "lid",
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
          name: "WAWebContactManagerCustomerProfileUpsertMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebContactManagerCustomerProfileUpsertMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebContactManagerCustomerProfileUpsertMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebContactManagerCustomerProfileUpsertMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
