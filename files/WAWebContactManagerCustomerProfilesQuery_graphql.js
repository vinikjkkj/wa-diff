__d(
  "WAWebContactManagerCustomerProfilesQuery.graphql",
  ["WAWebContactManagerCustomerProfilesQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XFBWACustomerProfilesResult",
            kind: "LinkedField",
            name: "xfb_wa_customer_profiles",
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
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "cursor",
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
          name: "WAWebContactManagerCustomerProfilesQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebContactManagerCustomerProfilesQuery",
          selections: t,
        },
        params: {
          id: n(
            "WAWebContactManagerCustomerProfilesQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebContactManagerCustomerProfilesQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
