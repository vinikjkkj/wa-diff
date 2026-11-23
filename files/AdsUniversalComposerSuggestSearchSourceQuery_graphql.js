__d(
  "AdsUniversalComposerSuggestSearchSourceQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "anchor" },
        t = { defaultValue: null, kind: "LocalArgument", name: "count" },
        n = { defaultValue: null, kind: "LocalArgument", name: "query" },
        r = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "anchor", variableName: "anchor" },
              { kind: "Variable", name: "count", variableName: "count" },
              { kind: "Variable", name: "query", variableName: "query" },
            ],
            concreteType: "UniversalComposerSuggestion",
            kind: "LinkedField",
            name: "universal_composer_suggest",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "action",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "source_query",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "text",
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
          name: "AdsUniversalComposerSuggestSearchSourceQuery",
          selections: r,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [n, e, t],
          kind: "Operation",
          name: "AdsUniversalComposerSuggestSearchSourceQuery",
          selections: r,
        },
        params: {
          id: "27702794889392990",
          metadata: {},
          name: "AdsUniversalComposerSuggestSearchSourceQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
