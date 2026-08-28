__d(
  "BillingAwareOnboardingModalitySelectLandingView_paymentMethodOptions.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "BillingAwareOnboardingModalitySelectLandingView_paymentMethodOptions",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingAwareOnboardingModalitySelectLandingViewMsite_paymentMethodOptions",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingAwareOnboardingModalitySelectLandingViewDesktop_paymentMethodOptions",
        },
      ],
      type: "PaymentCredentialOption",
      abstractKey: "__isPaymentCredentialOption",
    };
    a.exports = e;
  },
  null,
);
