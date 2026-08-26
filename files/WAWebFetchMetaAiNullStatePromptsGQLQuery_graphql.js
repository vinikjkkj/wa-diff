__d(
  "WAWebFetchMetaAiNullStatePromptsGQLQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "exp_config" },
        t = { defaultValue: null, kind: "LocalArgument", name: "locale" },
        n = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "exp_config",
                variableName: "exp_config",
              },
              { kind: "Variable", name: "locale", variableName: "locale" },
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
                    name: "display_string",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "query",
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
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebFetchMetaAiNullStatePromptsGQLQuery",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebFetchMetaAiNullStatePromptsGQLQuery",
          selections: n,
        },
        params: {
          id: "27342231062121832",
          metadata: {},
          name: "WAWebFetchMetaAiNullStatePromptsGQLQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
