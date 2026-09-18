__d(
  "WAWebBizBroadcastProBudgetSectionBackingWabaRefetchQuery.graphql",
  [
    "WAWebBizBroadcastProBudgetSectionBackingWabaRefetchQuery_facebookRelayOperation",
  ],
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
          name: "WAWebBizBroadcastProBudgetSectionBackingWabaRefetchQuery",
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
                  name: "WAWebBizBroadcastProBudgetSection_backingWaba",
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
          name: "WAWebBizBroadcastProBudgetSectionBackingWabaRefetchQuery",
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
                      name: "audience_send_max_bid_amount",
                      storageKey: null,
                    },
                  ],
                  type: "WhatsAppBusinessAccount",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizBroadcastProBudgetSectionBackingWabaRefetchQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProBudgetSectionBackingWabaRefetchQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
