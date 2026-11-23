__d(
  "MAIBAMemoryClearAllConfirmationModalDeleteMemoryMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "ad_account_id",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "client_context",
        },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "organization_id",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "summary_key" },
        o = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "ad_account_id",
              },
              {
                kind: "Variable",
                name: "client_context",
                variableName: "client_context",
              },
              {
                kind: "Variable",
                name: "organization_id",
                variableName: "organization_id",
              },
              {
                kind: "Variable",
                name: "summary_key",
                variableName: "summary_key",
              },
            ],
            concreteType: "XFBMAIBAMemoryDeleteResponse",
            kind: "LinkedField",
            name: "xfb_delete_maiba_memory",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_success",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "exception_message",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "deleted_summary_key",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r],
          kind: "Fragment",
          metadata: null,
          name: "MAIBAMemoryClearAllConfirmationModalDeleteMemoryMutation",
          selections: o,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, r, n, t],
          kind: "Operation",
          name: "MAIBAMemoryClearAllConfirmationModalDeleteMemoryMutation",
          selections: o,
        },
        params: {
          id: "27254989820866981",
          metadata: {},
          name: "MAIBAMemoryClearAllConfirmationModalDeleteMemoryMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
