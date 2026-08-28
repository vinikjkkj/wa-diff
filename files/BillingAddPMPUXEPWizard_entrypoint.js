__d(
  "BillingAddPMPUXEPWizard.entrypoint",
  ["BillingWizardLandingScreenQuery$Parameters", "JSResourceForInteraction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e;
        return {
          queries: {
            wizard_landing_state_display: {
              parameters: r("BillingWizardLandingScreenQuery$Parameters"),
              variables: {
                paymentAccountID: (e = t.paymentAccountID) != null ? e : "",
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "BillingAddPMPUXEPWizard.react",
      ).__setRef("BillingAddPMPUXEPWizard.entrypoint"),
    };
    l.default = e;
  },
  98,
);
