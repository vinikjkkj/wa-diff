__d(
  "WAWebBizGetCategoriesQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "query_params" },
        ],
        t = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "display_name",
            storageKey: null,
          },
        ],
        n = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "query_params",
                variableName: "query_params",
              },
            ],
            concreteType: "CatkitTypeaheadResponse",
            kind: "LinkedField",
            name: "whatsapp_catkit_typeahead_proxy",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "WhatsAppBizProfileCategory",
                kind: "LinkedField",
                name: "categories",
                plural: !0,
                selections: t,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "WhatsAppBizProfileCategory",
                kind: "LinkedField",
                name: "not_a_biz",
                plural: !1,
                selections: t,
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
          name: "WAWebBizGetCategoriesQuery",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizGetCategoriesQuery",
          selections: n,
        },
        params: {
          id: "26266473919627648",
          metadata: {},
          name: "WAWebBizGetCategoriesQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
