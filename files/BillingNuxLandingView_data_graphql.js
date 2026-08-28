__d(
  "BillingNuxLandingView_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "BillingNuxLandingView_data",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "billing_payment_method_options",
          plural: !0,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "BillingNewPaymentMethodRow_paymentOptions",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "billable_account",
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
              name: "can_update_currency_timezone",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_tax_info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "can_update_tax_country",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "payment_modes",
              storageKey: null,
            },
            {
              alias: "isMissingPM",
              args: [
                {
                  kind: "Literal",
                  name: "requested_flags",
                  value: ["MISSING_PAYMENT_METHOD"],
                },
              ],
              kind: "ScalarField",
              name: "billing_flags",
              storageKey:
                'billing_flags(requested_flags:["MISSING_PAYMENT_METHOD"])',
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "BillingAdsCouponPromotionBanner_data",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "BillingCountryCurrencyRow_data",
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingNewPaymentMethodRow_paymentAccount",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingImportablePaymentMethodsList_items",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingAccountInformationRow_data",
        },
      ],
      type: "PaymentAccount",
      abstractKey: "__isPaymentAccount",
    };
    a.exports = e;
  },
  null,
);
