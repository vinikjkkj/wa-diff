__d(
  "BillingAwareOnboardingAddPMV2Wizard.entrypoint",
  [
    "BillingAwareOnboardingModalitySelectLandingScreenQuery$Parameters",
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
                aware_onboarding_modality_select_landing_state_display: {
                  parameters: r(
                    "BillingAwareOnboardingModalitySelectLandingScreenQuery$Parameters",
                  ),
                  variables: { paymentAccountID: t.paymentAccountID },
                },
              },
            };
      },
      root: r("JSResourceForInteraction")(
        "BillingAwareOnboardingAddPMV2Wizard.react",
      ).__setRef("BillingAwareOnboardingAddPMV2Wizard.entrypoint"),
    };
    l.default = e;
  },
  98,
);
