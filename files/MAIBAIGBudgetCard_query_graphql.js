__d(
  "MAIBAIGBudgetCard_query.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "accountID" },
        { defaultValue: null, kind: "LocalArgument", name: "draftID" },
        { defaultValue: null, kind: "LocalArgument", name: "flowID" },
      ],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAIGBudgetCard_query",
      selections: [
        {
          alias: null,
          args: [
            { kind: "Variable", name: "draft_id", variableName: "draftID" },
            { kind: "Variable", name: "flow_id", variableName: "flowID" },
          ],
          concreteType: "XFBIGBoostFlow",
          kind: "LinkedField",
          name: "xfb_ig_boost_flow_from_media_igid",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: "Variable",
                  name: "ad_account_id",
                  variableName: "accountID",
                },
              ],
              concreteType: "XFBIGBoostAdAccount",
              kind: "LinkedField",
              name: "boost_ad_account",
              plural: !1,
              selections: [
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
                  kind: "ScalarField",
                  name: "currency_offset",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBIGBoostBudgetAndDurationInfo",
                  kind: "LinkedField",
                  name: "budget_and_duration_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "CurrencyQuantity",
                      kind: "LinkedField",
                      name: "daily_budget_options",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "offset_amount",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
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
