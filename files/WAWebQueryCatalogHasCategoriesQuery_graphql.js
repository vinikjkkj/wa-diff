__d(
  "WAWebQueryCatalogHasCategoriesQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "request" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "request" },
            ],
            concreteType: "XWAProductCatalogGetCategoriesResponseSuccess",
            kind: "LinkedField",
            name: "xwa_product_catalog_get_categories",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType:
                  "XWAProductCatalogGetCategoriesResponseSuccessCategoryWithSubCategories",
                kind: "LinkedField",
                name: "categories",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
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
          name: "WAWebQueryCatalogHasCategoriesQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebQueryCatalogHasCategoriesQuery",
          selections: t,
        },
        params: {
          id: "9759957480718978",
          metadata: {},
          name: "WAWebQueryCatalogHasCategoriesQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
