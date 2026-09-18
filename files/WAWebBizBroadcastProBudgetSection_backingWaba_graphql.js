__d(
  "WAWebBizBroadcastProBudgetSection_backingWaba.graphql",
  ["WAWebBizBroadcastProBudgetSectionBackingWabaRefetchQuery.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: {
        refetch: {
          connection: null,
          fragmentPathInResult: ["node"],
          operation: n(
            "WAWebBizBroadcastProBudgetSectionBackingWabaRefetchQuery.graphql",
          ),
          identifierInfo: {
            identifierField: "id",
            identifierQueryVariableName: "id",
          },
        },
      },
      name: "WAWebBizBroadcastProBudgetSection_backingWaba",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "audience_send_max_bid_amount",
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
      type: "WhatsAppBusinessAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
