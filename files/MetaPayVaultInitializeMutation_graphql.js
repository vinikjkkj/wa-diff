__d(
  "MetaPayVaultInitializeMutation.graphql",
  ["MetaPayVaultInitializeMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "input" },
            ],
            concreteType: "MetaPayVaultInitializeResponse",
            kind: "LinkedField",
            name: "meta_pay_vault_initialize",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_reason",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "status",
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
          name: "MetaPayVaultInitializeMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MetaPayVaultInitializeMutation",
          selections: t,
        },
        params: {
          id: n("MetaPayVaultInitializeMutation_facebookRelayOperation"),
          metadata: {},
          name: "MetaPayVaultInitializeMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
