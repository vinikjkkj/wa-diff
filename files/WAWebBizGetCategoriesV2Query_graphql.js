__d(
  "WAWebBizGetCategoriesV2Query.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "query_params" },
        ],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "display_name",
          storageKey: null,
        },
        r = [t, n],
        o = [
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
                selections: [
                  t,
                  n,
                  {
                    alias: null,
                    args: null,
                    concreteType: "WhatsAppBizProfileCategory",
                    kind: "LinkedField",
                    name: "categories",
                    plural: !0,
                    selections: [
                      t,
                      n,
                      {
                        alias: null,
                        args: null,
                        concreteType: "WhatsAppBizProfileCategory",
                        kind: "LinkedField",
                        name: "categories",
                        plural: !0,
                        selections: r,
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "WhatsAppBizProfileCategory",
                kind: "LinkedField",
                name: "not_a_biz",
                plural: !1,
                selections: r,
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
          name: "WAWebBizGetCategoriesV2Query",
          selections: o,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizGetCategoriesV2Query",
          selections: o,
        },
        params: {
          id: "26869203922665622",
          metadata: {},
          name: "WAWebBizGetCategoriesV2Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
