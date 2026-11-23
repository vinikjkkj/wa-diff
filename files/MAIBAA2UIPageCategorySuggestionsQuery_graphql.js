__d(
  "MAIBAA2UIPageCategorySuggestionsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "pageName" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Literal", name: "num_result", value: 1 },
              { kind: "Variable", name: "page_name", variableName: "pageName" },
            ],
            concreteType: "MAIBAGP8PageCategorySuggestion",
            kind: "LinkedField",
            name: "maiba_gp8_page_category_suggestions",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "category_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "category_name",
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
          name: "MAIBAA2UIPageCategorySuggestionsQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAA2UIPageCategorySuggestionsQuery",
          selections: t,
        },
        params: {
          id: "28835776249413674",
          metadata: {},
          name: "MAIBAA2UIPageCategorySuggestionsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
