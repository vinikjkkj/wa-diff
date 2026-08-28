__d(
  "BillingAdsCouponPromotionBanner_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "BillingAdsCouponPromotionBanner_data",
      selections: [
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: "Literal",
                  name: "ads_coupon_entrypoint",
                  value: "billing_nux_landing",
                },
                {
                  kind: "Literal",
                  name: "ads_coupon_objectives",
                  value: "GENERIC",
                },
              ],
              concreteType: "AdsCouponProgressDataBase",
              kind: "LinkedField",
              name: "active_ad_coupon_progress",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "CurrencyAmount",
                  kind: "LinkedField",
                  name: "coupon_currency_amount",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "formatted_amount",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey:
                'active_ad_coupon_progress(ads_coupon_entrypoint:"billing_nux_landing",ads_coupon_objectives:"GENERIC")',
            },
          ],
          type: "AdAccount",
          abstractKey: null,
        },
      ],
      type: "BillableAccount",
      abstractKey: "__isBillableAccount",
    };
    a.exports = e;
  },
  null,
);
