__d(
  "BillingAwareOnboardingPUXCouponSection_paymentMethodOptions.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "BillingAwareOnboardingPUXCouponSection_paymentMethodOptions",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          action: "THROW",
          path: "__typename",
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              fragment: {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "BillingAwareOnboardingNewCouponOption_option",
                  },
                ],
                type: "AdAccountNewTokenOption",
                abstractKey: null,
              },
              kind: "AliasedInlineFragmentSpread",
              name: "BillingAwareOnboardingNewCouponOption_option",
            },
          ],
          type: "AdAccountNewTokenOption",
          abstractKey: null,
        },
      ],
      type: "PaymentCredentialOption",
      abstractKey: "__isPaymentCredentialOption",
    };
    a.exports = e;
  },
  null,
);
