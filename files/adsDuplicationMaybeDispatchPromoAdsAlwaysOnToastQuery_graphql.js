__d(
  "adsDuplicationMaybeDispatchPromoAdsAlwaysOnToastQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "accountID" },
          { defaultValue: null, kind: "LocalArgument", name: "adgroupIDs" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "account_id",
                variableName: "accountID",
              },
              {
                kind: "Variable",
                name: "adgroup_ids",
                variableName: "adgroupIDs",
              },
            ],
            kind: "ScalarField",
            name: "promo_ads_any_adgroup_always_on_eligible",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "adsDuplicationMaybeDispatchPromoAdsAlwaysOnToastQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "adsDuplicationMaybeDispatchPromoAdsAlwaysOnToastQuery",
          selections: t,
        },
        params: {
          id: "27645472368449352",
          metadata: {},
          name: "adsDuplicationMaybeDispatchPromoAdsAlwaysOnToastQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
