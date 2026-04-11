__d(
  "WAWebBizAdCreationPaymentAdAccountSelectorModal_query.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizAdCreationPaymentAdAccountSelectorModal_query",
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
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "legacy_account_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "name",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
