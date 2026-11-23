__d(
  "MAIBABudgetCard_account.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBABudgetCard_account",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "account_currency_ratio_to_usd",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "currency",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "CurrencyQuantity",
          kind: "LinkedField",
          name: "min_daily_budget",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "amount_with_offset",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "TimezoneInfo",
          kind: "LinkedField",
          name: "timezone_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "timezone_id",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "AdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
