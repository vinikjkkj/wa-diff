__d(
  "AdsFocusFrameworkStickinessDataManagerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "ad_account_id" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "ad_account_id",
              },
            ],
            concreteType: "XFBXAdsFocusFrameworkStickyFieldsController",
            kind: "LinkedField",
            name: "xfb_andromeda_XAdsFocusFrameworkStickyFieldsController",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "sticky_fields",
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
          name: "AdsFocusFrameworkStickinessDataManagerQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsFocusFrameworkStickinessDataManagerQuery",
          selections: t,
        },
        params: {
          id: "9593850350702942",
          metadata: {},
          name: "AdsFocusFrameworkStickinessDataManagerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
