__d(
  "WAWebFetchMetaAISearchNullStateSuggestionsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "exp_config" },
        t = { defaultValue: null, kind: "LocalArgument", name: "locale" },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "null_state_source",
        },
        r = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "exp_config",
                variableName: "exp_config",
              },
              { kind: "Variable", name: "locale", variableName: "locale" },
              {
                kind: "Variable",
                name: "null_state_source",
                variableName: "null_state_source",
              },
            ],
            concreteType: "XWAMetaAISearchNullStateResponse",
            kind: "LinkedField",
            name: "xwa_genai_meta_ai_search_null_state",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XWAMetaAINullStateSuggestion",
                kind: "LinkedField",
                name: "suggestions",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "suggestion",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "query",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "session_id",
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
          name: "WAWebFetchMetaAISearchNullStateSuggestionsQuery",
          selections: r,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, n, e],
          kind: "Operation",
          name: "WAWebFetchMetaAISearchNullStateSuggestionsQuery",
          selections: r,
        },
        params: {
          id: "9962874563796224",
          metadata: {},
          name: "WAWebFetchMetaAISearchNullStateSuggestionsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
