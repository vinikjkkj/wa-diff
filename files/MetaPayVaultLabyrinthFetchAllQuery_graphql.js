__d(
  "MetaPayVaultLabyrinthFetchAllQuery.graphql",
  ["MetaPayVaultLabyrinthFetchAllQuery_facebookRelayOperation"],
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
            concreteType: "MetaPayVaultFetchEntriesResponse",
            kind: "LinkedField",
            name: "meta_pay_vault_entries",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MetaPayVaultEntryToEntryKeys",
                kind: "LinkedField",
                name: "vault_entry_to_entry_key",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "MetaPayVaultEntryInfo",
                    kind: "LinkedField",
                    name: "entry",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "entry_data",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "entry_fbid",
                        storageKey: null,
                      },
                    ],
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
          name: "MetaPayVaultLabyrinthFetchAllQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MetaPayVaultLabyrinthFetchAllQuery",
          selections: t,
        },
        params: {
          id: n("MetaPayVaultLabyrinthFetchAllQuery_facebookRelayOperation"),
          metadata: {},
          name: "MetaPayVaultLabyrinthFetchAllQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
