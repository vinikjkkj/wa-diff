__d(
  "MAIBAAppStateProvider_query.graphql",
  ["MAIBAAppStateProviderRefetchQuery.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "appStateInput" },
      ],
      kind: "Fragment",
      metadata: {
        refetch: {
          connection: null,
          fragmentPathInResult: [],
          operation: n("MAIBAAppStateProviderRefetchQuery.graphql"),
        },
        throwOnFieldError: !0,
      },
      name: "MAIBAAppStateProvider_query",
      selections: [
        {
          kind: "CatchField",
          field: {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "input",
                variableName: "appStateInput",
              },
            ],
            concreteType: "MAIBAAppStateResponse",
            kind: "LinkedField",
            name: "maiba_app_state",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "doc_json",
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
                name: "updated_time",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          to: "RESULT",
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
