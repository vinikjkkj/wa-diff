__d(
  "getWizardContextQuery.entrypointutils",
  [
    "BillingContextFactoryQuery$Parameters",
    "BillingWizardGKConfig",
    "BillingWizardQEConfig",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.paymentAccountID;
      return {
        billingContextQuery: {
          parameters: r("BillingContextFactoryQuery$Parameters"),
          variables: {
            gks: o("BillingWizardGKConfig").BillingWizardGKs,
            hasPaymentAccount: t != null && t !== "",
            paymentAccountID: t != null ? t : "",
            universes: o("BillingWizardQEConfig").BillingWizardQEUniverses,
          },
        },
      };
    }
    l.default = e;
  },
  98,
);
