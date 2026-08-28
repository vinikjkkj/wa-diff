__d(
  "BillingAwareOnboardingModalitySelectLandingView_paymentAccount.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "BillingAwareOnboardingModalitySelectLandingView_paymentAccount",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingAwareOnboardingBottomSheet_paymentAccount",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingAwareOnboardingModalitySelectLandingViewMsite_paymentAccount",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingAwareOnboardingModalitySelectLandingViewDesktop_paymentAccount",
        },
      ],
      type: "PaymentAccount",
      abstractKey: "__isPaymentAccount",
    };
    a.exports = e;
  },
  null,
);
