__d(
  "MetaPayVaultLabyrinthSaveMutation.graphql",
  ["MetaPayVaultLabyrinthSaveMutation_facebookRelayOperation"],
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
            concreteType: "MetaPayVaultEntrySaveResponse",
            kind: "LinkedField",
            name: "meta_pay_vault_entry_save",
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
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "vault_entry_fbid",
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
          name: "MetaPayVaultLabyrinthSaveMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MetaPayVaultLabyrinthSaveMutation",
          selections: t,
        },
        params: {
          id: n("MetaPayVaultLabyrinthSaveMutation_facebookRelayOperation"),
          metadata: {},
          name: "MetaPayVaultLabyrinthSaveMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
