__d(
  "ClientEdgeQuery_AdsBulkEditAgenticCheckoutOptInFieldContentContainer_adgroups_creative__product_set__product_catalog.graphql",
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
          name: "ClientEdgeQuery_AdsBulkEditAgenticCheckoutOptInFieldContentContainer_adgroups_creative__product_set__product_catalog",
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
                  name: "RefetchableClientEdgeQuery_AdsBulkEditAgenticCheckoutOptInFieldContentContainer_adgroups_creative__product_set__product_catalog",
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
          name: "ClientEdgeQuery_AdsBulkEditAgenticCheckoutOptInFieldContentContainer_adgroups_creative__product_set__product_catalog",
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
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28909016462037998",
          metadata: {},
          name: "ClientEdgeQuery_AdsBulkEditAgenticCheckoutOptInFieldContentContainer_adgroups_creative__product_set__product_catalog",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
