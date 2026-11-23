__d(
  "ClientEdgeQuery_AdsBulkEditAdgroupAgenticCheckoutOptInPlugin_Query_selected_ad_account__shops_ads_identity_product_catalog.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "id" }],
        t = [{ kind: "Variable", name: "id", variableName: "id" }];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "ClientEdgeQuery_AdsBulkEditAdgroupAgenticCheckoutOptInPlugin_Query_selected_ad_account__shops_ads_identity_product_catalog",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "RefetchableClientEdgeQuery_AdsBulkEditAdgroupAgenticCheckoutOptInPlugin_Query_selected_ad_account__shops_ads_identity_product_catalog",
                },
              ],
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
          name: "ClientEdgeQuery_AdsBulkEditAdgroupAgenticCheckoutOptInPlugin_Query_selected_ad_account__shops_ads_identity_product_catalog",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_agentic_checkout_enabled",
                      storageKey: null,
                    },
                  ],
                  type: "ProductCatalog",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28392457797119809",
          metadata: {},
          name: "ClientEdgeQuery_AdsBulkEditAdgroupAgenticCheckoutOptInPlugin_Query_selected_ad_account__shops_ads_identity_product_catalog",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
