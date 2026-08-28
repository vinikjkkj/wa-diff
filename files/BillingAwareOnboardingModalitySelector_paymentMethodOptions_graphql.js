__d(
  "BillingAwareOnboardingModalitySelector_paymentMethodOptions.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "BillingAwareOnboardingModalitySelector_paymentMethodOptions",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingAwareOnboardingSelectPostpay_paymentMethodOptions",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingAwareOnboardingSelectPrepay_paymentMethodOptions",
        },
      ],
      type: "PaymentCredentialOption",
      abstractKey: "__isPaymentCredentialOption",
    };
    a.exports = e;
  },
  null,
);
