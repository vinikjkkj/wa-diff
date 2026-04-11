__d(
  "WAWebFetchMetaAISearchTypeAheadSuggestionsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "param" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "param", variableName: "param" }],
            concreteType: "XWAMetaAISearchTypeaheadResponse",
            kind: "LinkedField",
            name: "xwa_genai_meta_ai_search_typeahead",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XWAMetaAITypeaheadSuggestion",
                kind: "LinkedField",
                name: "suggestions",
                plural: !0,
                selections: [
                  {
                    alias: "query",
                    args: null,
                    kind: "ScalarField",
                    name: "suggestion",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "session_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "context",
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
          name: "WAWebFetchMetaAISearchTypeAheadSuggestionsQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebFetchMetaAISearchTypeAheadSuggestionsQuery",
          selections: t,
        },
        params: {
          id: "10099941310063078",
          metadata: {},
          name: "WAWebFetchMetaAISearchTypeAheadSuggestionsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
