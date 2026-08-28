__d(
  "BillingAwareOnboardingPMLandingView_paymentMethodOptions.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "BillingAwareOnboardingPMLandingView_paymentMethodOptions",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingPostPayPaymentMethodOptions_paymentMethodOptions",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingPrePayPaymentMethodOptions_paymentMethodOptions",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingAwareOnboardingPUXCouponSection_paymentMethodOptions",
        },
      ],
      type: "PaymentCredentialOption",
      abstractKey: "__isPaymentCredentialOption",
    };
    a.exports = e;
  },
  null,
);
