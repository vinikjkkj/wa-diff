__d(
  "getWizardContextQuery.entrypointutils",
  ["BillingContextFactoryQuery$Parameters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.paymentAccountID;
      return {
        billingContextQuery: {
          parameters: r("BillingContextFactoryQuery$Parameters"),
          variables: {
            hasPaymentAccount: t != null && t !== "",
            paymentAccountID: t != null ? t : "",
          },
        },
      };
    }
    l.default = e;
  },
  98,
);
