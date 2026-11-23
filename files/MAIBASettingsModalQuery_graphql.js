__d(
  "MAIBASettingsModalQuery.graphql",
  ["relay-runtime"],
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
        r = [
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
            ],
            concreteType: "XFBMAIBAMemoriesResponse",
            kind: "LinkedField",
            name: "xfb_maiba_memories",
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
                concreteType: "XFBMAIBAMemorySummary",
                kind: "LinkedField",
                name: "results",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "summary_key",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "summary",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "timestamp_ms",
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
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "MAIBASettingsModalQuery",
          selections: r,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, n, t],
          kind: "Operation",
          name: "MAIBASettingsModalQuery",
          selections: r,
        },
        params: {
          id: "26788807054126261",
          metadata: {},
          name: "MAIBASettingsModalQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
