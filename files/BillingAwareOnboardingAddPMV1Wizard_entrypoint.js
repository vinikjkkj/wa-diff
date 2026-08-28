__d(
  "BillingAwareOnboardingAddPMV1Wizard.entrypoint",
  [
    "BillingAwareOnboardingPMLandingScreenQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return t.paymentAccountID == null
          ? {}
          : {
              queries: {
                aware_onboarding_pm_landing_state_display: {
                  parameters: r(
                    "BillingAwareOnboardingPMLandingScreenQuery$Parameters",
                  ),
                  variables: { paymentAccountID: t.paymentAccountID },
                },
              },
            };
      },
      root: r("JSResourceForInteraction")(
        "BillingAwareOnboardingAddPMV1Wizard.react",
      ).__setRef("BillingAwareOnboardingAddPMV1Wizard.entrypoint"),
    };
    l.default = e;
  },
  98,
);
