__d(
  "WAWebContactManagerCustomerProfileQuery.graphql",
  ["WAWebContactManagerCustomerProfileQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "lid" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "lid", variableName: "lid" }],
            concreteType: "XFBWACustomerProfile",
            kind: "LinkedField",
            name: "xfb_wa_customer_profile",
            plural: !1,
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
                kind: "ScalarField",
                name: "email",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "dob",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "address",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "lead_stage",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "acquisition_source",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "acquisition_date",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "last_order_date",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBWACustomerFieldMetadata",
                kind: "LinkedField",
                name: "last_updates",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "ts",
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
          name: "WAWebContactManagerCustomerProfileQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebContactManagerCustomerProfileQuery",
          selections: t,
        },
        params: {
          id: n(
            "WAWebContactManagerCustomerProfileQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebContactManagerCustomerProfileQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
