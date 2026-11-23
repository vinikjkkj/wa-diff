__d(
  "StartConversationTemplateReengagementWithCatalogSectionQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "page_id" }],
        t = [{ kind: "Variable", name: "id", variableName: "page_id" }],
        n = {
          alias: null,
          args: null,
          concreteType: "XFBSMCProductCatalogInfo",
          kind: "LinkedField",
          name: "smc_product_catalog",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBSMCCatalogInfo",
              kind: "LinkedField",
              name: "catalog_info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "catalog_id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ad_catalog_id",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "StartConversationTemplateReengagementWithCatalogSectionQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [n],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "StartConversationTemplateReengagementWithCatalogSectionQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                n,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "9481135698661663",
          metadata: {},
          name: "StartConversationTemplateReengagementWithCatalogSectionQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
