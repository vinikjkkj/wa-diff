__d(
  "WAWebACSServerProviderConfigQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "project_name" },
        ],
        t = [
          {
            kind: "Variable",
            name: "project_name",
            variableName: "project_name",
          },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cipher_suite",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "expire_time",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "max_evals",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "public_key",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "redemption_limit",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "token_ttl",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebACSServerProviderConfigQuery",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: t,
                concreteType: "TACSServerUpdateType",
                kind: "LinkedField",
                name: "xwa_wa_acs_config",
                plural: !1,
                selections: [
                  { kind: "RequiredField", field: n, action: "THROW" },
                  { kind: "RequiredField", field: r, action: "THROW" },
                  { kind: "RequiredField", field: o, action: "THROW" },
                  { kind: "RequiredField", field: a, action: "THROW" },
                  { kind: "RequiredField", field: i, action: "THROW" },
                  { kind: "RequiredField", field: l, action: "THROW" },
                  { kind: "RequiredField", field: s, action: "THROW" },
                ],
                storageKey: null,
              },
              action: "THROW",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebACSServerProviderConfigQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "TACSServerUpdateType",
              kind: "LinkedField",
              name: "xwa_wa_acs_config",
              plural: !1,
              selections: [n, r, o, a, i, l, s],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "25133761326299603",
          metadata: {},
          name: "WAWebACSServerProviderConfigQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
