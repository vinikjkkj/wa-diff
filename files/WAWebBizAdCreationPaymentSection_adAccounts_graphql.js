__d(
  "WAWebBizAdCreationPaymentSection_adAccounts.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizAdCreationPaymentSection_adAccounts",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "WaCtwaAdAccountsConnection",
          kind: "LinkedField",
          name: "wa_ctwa_ad_accounts",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "count",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          kind: "Defer",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "useWAWebBizAdCreationOpenAdAccountSelectorModal_query",
            },
          ],
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
