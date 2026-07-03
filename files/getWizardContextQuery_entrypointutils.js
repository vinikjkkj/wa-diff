__d(
  "getWizardContextQuery.entrypointutils",
  [
    "BillingContextFactoryGKInitCheckQuery$Parameters",
    "BillingContextFactoryQEInitCheckQuery$Parameters",
    "BillingContextFactoryQuery$Parameters",
    "BillingWizardGKConfig",
    "BillingWizardQEConfig",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.paymentAccountID,
        n = t != null && t !== "" ? [t] : [];
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
        billingGKInitCheckQuery: {
          parameters: r("BillingContextFactoryGKInitCheckQuery$Parameters"),
          variables: { input: { payment_account_ids: n } },
        },
        billingQEInitCheckQuery: {
          parameters: r("BillingContextFactoryQEInitCheckQuery$Parameters"),
          variables: { input: { payment_account_ids: n } },
        },
      };
    }
    l.default = e;
  },
  98,
);
